import { existsSync, readFileSync } from 'fs'
import { join, normalize } from 'path'
import { inflateSync } from 'zlib'

const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])
const accentCache = new Map<string, string | null>()

type Rgb = {
	r: number
	g: number
	b: number
}

function resolvePublicAsset(src: string) {
	const relativePath = src.replace(/^\/+/, '')
	const absolutePath = normalize(join(process.cwd(), 'public', relativePath))
	const publicRoot = normalize(join(process.cwd(), 'public'))

	if (!absolutePath.startsWith(publicRoot) || !existsSync(absolutePath)) {
		return null
	}

	return absolutePath
}

function normalizeHexColor(hex: string) {
	const value = hex.replace('#', '')

	if (value.length === 3 || value.length === 4) {
		return value
			.slice(0, 3)
			.split('')
			.map((char) => char + char)
			.join('')
			.toUpperCase()
	}

	if (value.length === 6 || value.length === 8) {
		return value.slice(0, 6).toUpperCase()
	}

	return null
}

function rgbToHex({ r, g, b }: Rgb) {
	return `#${[r, g, b].map((channel) => channel.toString(16).padStart(2, '0')).join('').toUpperCase()}`
}

function parseHexColor(hex: string): Rgb | null {
	const normalized = normalizeHexColor(hex)

	if (!normalized) {
		return null
	}

	return {
		r: Number.parseInt(normalized.slice(0, 2), 16),
		g: Number.parseInt(normalized.slice(2, 4), 16),
		b: Number.parseInt(normalized.slice(4, 6), 16),
	}
}

function isUsefulAccentColor({ r, g, b }: Rgb) {
	const max = Math.max(r, g, b)
	const min = Math.min(r, g, b)
	const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b

	return luminance < 244 && luminance > 10 && (max - min > 8 || luminance < 70)
}

function extractSvgAccent(svg: string) {
	const colorPattern = /(?:fill|stroke)=["'](#[0-9a-fA-F]{3,8})["']/g
	let match = colorPattern.exec(svg)

	while (match) {
		const rgb = parseHexColor(match[1])

		if (rgb && isUsefulAccentColor(rgb)) {
			return rgbToHex(rgb)
		}

		match = colorPattern.exec(svg)
	}

	return null
}

function paethPredictor(left: number, above: number, upperLeft: number) {
	const estimate = left + above - upperLeft
	const distanceLeft = Math.abs(estimate - left)
	const distanceAbove = Math.abs(estimate - above)
	const distanceUpperLeft = Math.abs(estimate - upperLeft)

	if (distanceLeft <= distanceAbove && distanceLeft <= distanceUpperLeft) return left
	if (distanceAbove <= distanceUpperLeft) return above
	return upperLeft
}

function unfilterScanline(filter: number, current: Buffer, previous: Buffer, bytesPerPixel: number) {
	const output = Buffer.alloc(current.length)

	for (let i = 0; i < current.length; i++) {
		const left = i >= bytesPerPixel ? output[i - bytesPerPixel] : 0
		const above = previous[i] ?? 0
		const upperLeft = i >= bytesPerPixel ? previous[i - bytesPerPixel] ?? 0 : 0

		switch (filter) {
			case 0:
				output[i] = current[i]
				break
			case 1:
				output[i] = (current[i] + left) & 0xff
				break
			case 2:
				output[i] = (current[i] + above) & 0xff
				break
			case 3:
				output[i] = (current[i] + Math.floor((left + above) / 2)) & 0xff
				break
			case 4:
				output[i] = (current[i] + paethPredictor(left, above, upperLeft)) & 0xff
				break
			default:
				return output
		}
	}

	return output
}

function quantizeRgb({ r, g, b }: Rgb) {
	return {
		r: Math.round(r / 8) * 8,
		g: Math.round(g / 8) * 8,
		b: Math.round(b / 8) * 8,
	}
}

function extractPngAccent(buffer: Buffer) {
	if (!buffer.subarray(0, PNG_SIGNATURE.length).equals(PNG_SIGNATURE)) {
		return null
	}

	let offset = PNG_SIGNATURE.length
	let width = 0
	let height = 0
	let bitDepth = 0
	let colorType = 0
	const idatChunks: Buffer[] = []

	while (offset < buffer.length) {
		const length = buffer.readUInt32BE(offset)
		const type = buffer.subarray(offset + 4, offset + 8).toString('ascii')
		const data = buffer.subarray(offset + 8, offset + 8 + length)

		if (type === 'IHDR') {
			width = data.readUInt32BE(0)
			height = data.readUInt32BE(4)
			bitDepth = data[8]
			colorType = data[9]
		}

		if (type === 'IDAT') {
			idatChunks.push(data)
		}

		if (type === 'IEND') {
			break
		}

		offset += length + 12
	}

	if (bitDepth !== 8 || (colorType !== 2 && colorType !== 6)) {
		return null
	}

	const bytesPerPixel = colorType === 6 ? 4 : 3
	const scanlineLength = width * bytesPerPixel
	const inflated = inflateSync(Buffer.concat(idatChunks))
	const colorCounts = new Map<string, { color: Rgb; count: number }>()
	let previous = Buffer.alloc(scanlineLength)
	let readOffset = 0

	for (let y = 0; y < height; y++) {
		const filter = inflated[readOffset]
		const current = inflated.subarray(readOffset + 1, readOffset + 1 + scanlineLength)
		const unfiltered = unfilterScanline(filter, current, previous, bytesPerPixel)

		for (let x = 0; x < width; x++) {
			const pixelOffset = x * bytesPerPixel
			const alpha = colorType === 6 ? unfiltered[pixelOffset + 3] : 255

			if (alpha < 180) continue

			const color = quantizeRgb({
				r: unfiltered[pixelOffset],
				g: unfiltered[pixelOffset + 1],
				b: unfiltered[pixelOffset + 2],
			})

			if (!isUsefulAccentColor(color)) continue

			const key = rgbToHex(color)
			const currentCount = colorCounts.get(key)
			colorCounts.set(key, { color, count: (currentCount?.count ?? 0) + 1 })
		}

		previous = unfiltered
		readOffset += scanlineLength + 1
	}

	const dominant = Array.from(colorCounts.values()).sort((a, b) => b.count - a.count)[0]

	return dominant ? rgbToHex(dominant.color) : null
}

export function getLogoAccentColor(src?: string) {
	if (!src) {
		return null
	}

	const cached = accentCache.get(src)
	if (cached !== undefined) {
		return cached
	}

	const assetPath = resolvePublicAsset(src)

	if (!assetPath) {
		accentCache.set(src, null)
		return null
	}

	const buffer = readFileSync(assetPath)
	const accentColor = assetPath.endsWith('.svg') ? extractSvgAccent(buffer.toString('utf8')) : extractPngAccent(buffer)

	accentCache.set(src, accentColor)
	return accentColor
}
