import { useState, useEffect } from 'react'
import { getRecents } from '../services/recents.service'
import { getSaved } from '../services/saved.service'
import { DataType, DataMap } from '../services/api.types'

function useData<T extends DataType>(type: T, category: 'recents' | 'saved') {
	const [data, setData] = useState<DataMap[T]>([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<Error | null>(null)

	useEffect(() => {
		setLoading(true)
		setError(null)

		const fetcher = category === 'recents' ? getRecents : getSaved

		fetcher(type)
			.then(response => {
				setData(response)
				setLoading(false)
			})
			.catch(err => {
				setError(err)
				setLoading(false)
			})
	}, [type, category])

	return { data, loading, error }
}

export function useRecents<T extends DataType>(type: T) {
	return useData(type, 'recents')
}

export function useSaved<T extends DataType>(type: T) {
	return useData(type, 'saved')
}
