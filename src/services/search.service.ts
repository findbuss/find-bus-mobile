import { apiFetch } from './api'
import { DataType, DataMap } from './api.types'

export async function find<T extends DataType>(type: T, query: string): Promise<DataMap[T]> {
	return apiFetch<DataMap[T]>(`/find/${type}?q=${encodeURIComponent(query)}`)
}
