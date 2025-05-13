import { apiFetch } from './api'

export interface Shape {
	shape_id: string
	shape_pt_lat: number
	shape_pt_lon: number
	shape_pt_sequence: number
	[key: string]: any
}

export async function getShape(id?: string): Promise<Shape[] | Shape> {
	const path = id ? `/shapes/${id}` : '/shapes'

	return apiFetch<Shape[] | Shape>(path)
}
