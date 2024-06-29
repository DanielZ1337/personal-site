// import 'server-only'

import type { Languages } from '@/lib/site'
import type { Dictionary } from '@/dictionaries/utils/dictionary-type'

const dictionaries: Record<Languages, () => Promise<Dictionary>> = {
	en: () => import('@/dictionaries/en').then((module) => module.default),
	da: () => import('@/dictionaries/da').then((module) => module.default),
}

export const getDictionary = async (language: Languages) => dictionaries[language]()
