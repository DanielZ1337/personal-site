import { useQuery } from '@tanstack/react-query'
import { getDictionary } from '@/dictionaries/utils/dictionaries'

export default function useDictionary(lang: string | undefined) {
	return useQuery({
		queryKey: ['dictionary', lang],
		queryFn: () => getDictionary(lang as string),
		retry: false,
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		refetchOnReconnect: false,
		refetchInterval: false,
		refetchIntervalInBackground: false,
		enabled: !!lang,
	})
}
