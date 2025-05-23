import { apiFetch } from './api'

export interface RegisterPayload {
	name: string
	email: string
	password: string
}

export const registerUser = (payload: RegisterPayload) =>
	apiFetch('/register', {
		method: 'POST',
		body: JSON.stringify(payload)
	})
