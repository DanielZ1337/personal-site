import type { Dictionary } from '@/dictionaries/utils/dictionary-type'
import en from '@/dictionaries/en'
import da from '@/dictionaries/da'

const dictionaries: Record<string, Dictionary> = { en, da }

export const getDictionary = async (language: string): Promise<Dictionary> => {
	return dictionaries[language] || dictionaries['en']
}
