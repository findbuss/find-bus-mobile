import { apiFetch } from './api'

export interface Stop {
	stop_id: string
	stop_name: string
	stop_lat: number
	stop_lon: number
	[key: string]: any
}

export async function getStops(id?: string): Promise<Stop[] | Stop> {
	const path = id ? `/stops/${id}` : '/stops'

	return apiFetch<Stop[] | Stop>(path)
}
