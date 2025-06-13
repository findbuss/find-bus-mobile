import { useState, useEffect } from 'react'
import { Item } from '../services/api.types'
import { apiFetch } from '../services/api'

export function useItems(endpoint: '/recents' | '/saved', query?: string) {
	const [items, setItems] = useState<Item[]>([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<Error | null>(null)

	useEffect(() => {
		let isMounted = true

		const url = query ? `${endpoint}?q=${encodeURIComponent(query)}` : endpoint

		apiFetch<Item[]>(url)
			.then(data => {
				if (isMounted) setItems(data)
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
	}, [endpoint, query])

	return { items, loading, error }
}
