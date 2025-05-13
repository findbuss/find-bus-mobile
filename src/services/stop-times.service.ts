import { apiFetch } from './api'

export interface StopTime {
	trip_id: string
	arrival_time: string
	departure_time: string
	stop_id: string
	stop_sequence: number
	[key: string]: any
}

export async function getStopTimes(id?: string): Promise<StopTime[] | StopTime> {
	const path = id ? `/stop-times/${id}` : '/stop-times'

	return apiFetch<StopTime[] | StopTime>(path)
}
