import { apiFetch } from './api'

interface AuthPayload {
	username: string
	password: string
}

interface AuthResponse {
	token: string
	user_id: number
}

export async function login(payload: AuthPayload): Promise<AuthResponse> {
	return apiFetch<AuthResponse>('/auth', {
		method: 'POST',
		body: JSON.stringify(payload)
	})
}
