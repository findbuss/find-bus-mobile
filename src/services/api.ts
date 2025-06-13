import AsyncStorage from '@react-native-async-storage/async-storage'
import { API_URL, TOKEN_KEY } from '@env'

export async function apiFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
	const token = await AsyncStorage.getItem(TOKEN_KEY)

	const headers = {
		'Content-Type': 'application/json',
		...(token ? { Authorization: `Bearer ${token}` } : {}),
		...options.headers
	}

	const response = await fetch(`${API_URL}${endpoint}`, {
		...options,
		headers
	})

	if (!response.ok) {
		const errorData = await response.json().catch(() => null)
		throw new Error(errorData?.message || 'API request failed')
	}

	return response.json()
}
