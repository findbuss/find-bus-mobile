import { apiFetch } from './api'

export interface Fare {
	fare_id: string
	price: number
	currency_type: string
	payment_method: number
	transfers: number
	[key: string]: any
}

export async function getFares(): Promise<Fare[]> {
	return apiFetch<Fare[]>('/fares')
}
