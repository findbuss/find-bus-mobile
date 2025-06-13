import { useEffect, useState } from 'react'
import { Item } from '../services/api.types'
import { apiFetch } from '../services/api'

export function useSearch(query: string) {
	const [results, setResults] = useState<Item[]>([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<Error | null>(null)

	useEffect(() => {
		if (!query) return

		let isMounted = true

		apiFetch<Item[]>(`/search?q=${encodeURIComponent(query)}`, { skipAuth: true })
			.then(data => {
				if (isMounted) setResults(data)
			})
			.catch(err => {
				if (isMounted) setError(err as Error)
			})
			.finally(() => {
				if (isMounted) setLoading(false)
			})

		setLoading(true)
		setError(null)

		return () => {
			isMounted = false
		}
	}, [query])

	return { results, loading, error }
}
