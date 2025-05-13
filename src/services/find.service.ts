import { apiFetch } from './api'

export interface FindResult {
	route_id: string
	route_long_name: string
	[key: string]: any
}

export async function findRoutes(query: string): Promise<FindResult[]> {
	const url = `/find?query=${encodeURIComponent(query)}`

	return apiFetch<FindResult[]>(url)
}
