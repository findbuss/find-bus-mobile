import { apiFetch } from './api'

export interface Trip {
	trip_id: string
	route_id: string
	service_id: string
	trip_headsign: string
	direction_id: number
	[key: string]: any
}

export async function getTrips(id?: string): Promise<Trip[] | Trip> {
	const path = id ? `/trips/${id}` : '/trips'

	return apiFetch<Trip[] | Trip>(path)
}
