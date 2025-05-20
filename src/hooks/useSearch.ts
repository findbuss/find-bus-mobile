import { useEffect, useState } from 'react'
import { find } from '../services/search.service'
import { DataType, DataMap } from '../services/api.types'

export function useSearch<T extends DataType>(type: T, query: string) {
	const [results, setResults] = useState<DataMap[T]>([] as DataMap[T])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<Error | null>(null)

	useEffect(() => {
		if (!query) return

		setLoading(true)
		setError(null)

		find(type, query)
			.then(data => setResults(data as DataMap[T]))
			.catch(err => setError(err instanceof Error ? err : new Error(String(err))))
			.finally(() => setLoading(false))
	}, [type, query])

	return { results, loading, error }
}
