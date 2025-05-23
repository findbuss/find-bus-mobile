import { apiFetch } from './api'

export interface User {
	id: string
	name: string
	email: string
}

interface Credentials {
	username: string
	password: string
}

export async function login(credentials: Credentials): Promise<User> {
	return apiFetch<User>('/auth', {
		method: 'POST',
		body: JSON.stringify(credentials)
	})
}

export async function getAuthStatus(): Promise<User> {
	return apiFetch<User>('/auth', {
		method: 'GET'
	})
}
