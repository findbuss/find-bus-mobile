import AsyncStorage from '@react-native-async-storage/async-storage'

import Constants from 'expo-constants'

const { API_URL, TOKEN_KEY } = Constants.expoConfig?.extra || {}

type ApiFetchOptions = RequestInit & {
	skipAuth?: boolean
}

export async function apiFetch<T>(endpoint: string, options: ApiFetchOptions = {}): Promise<T> {
	const { skipAuth, ...restOptions } = options

	const token = skipAuth ? null : await AsyncStorage.getItem(TOKEN_KEY)

	const headers = {
		'Content-Type': 'application/json',
		...(token ? { Authorization: `Bearer ${token}` } : {}),
		...restOptions.headers
	}

	const response = await fetch(`${API_URL}${endpoint}`, {
		...restOptions,
		headers
	})

	if (!response.ok) {
		const errorData = await response.json().catch(() => null)
		throw new Error(errorData?.message || 'API request failed')
	}

	return response.json()
}
