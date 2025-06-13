import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { API_URL, TOKEN_KEY, USER_KEY } from '@env'

interface User {
	id: string
	name: string
	email: string
}

interface AuthResponse {
	token: string
	user: User
}

export function useAuth() {
	const [token, setToken] = useState<string | null>(null)
	const [user, setUser] = useState<User | null>(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<Error | null>(null)

	useEffect(() => {
		async function loadStorageData() {
			try {
				const storedToken = await AsyncStorage.getItem(TOKEN_KEY)
				const storedUser = await AsyncStorage.getItem(USER_KEY)

				if (storedToken) setToken(storedToken)
				if (storedUser) setUser(JSON.parse(storedUser))
			} catch (err) {
				setError(err as Error)
			} finally {
				setLoading(false)
			}
		}

		loadStorageData()
	}, [])

	async function login(email: string, password: string) {
		try {
			setLoading(true)
			setError(null)

			const response = await fetch(`${API_URL}/auth/login`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, password })
			})

			if (!response.ok) {
				throw new Error('Invalid credentials')
			}

			const data: AuthResponse = await response.json()

			await AsyncStorage.setItem(TOKEN_KEY, data.token)
			await AsyncStorage.setItem(USER_KEY, JSON.stringify(data.user))

			setToken(data.token)
			setUser(data.user)
		} catch (err) {
			setError(err as Error)
			setToken(null)
			setUser(null)
		} finally {
			setLoading(false)
		}
	}

	async function register(name: string, email: string, password: string) {
		try {
			setLoading(true)
			setError(null)

			const response = await fetch(`${API_URL}/auth/register`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, email, password })
			})

			if (!response.ok) {
				const errorData = await response.json()
				throw new Error(errorData.message || 'Registration failed')
			}

			const data: AuthResponse = await response.json()

			await AsyncStorage.setItem(TOKEN_KEY, data.token)
			await AsyncStorage.setItem(USER_KEY, JSON.stringify(data.user))

			setToken(data.token)
			setUser(data.user)
		} catch (err) {
			setError(err as Error)
			setToken(null)
			setUser(null)
		} finally {
			setLoading(false)
		}
	}

	async function logout() {
		try {
			setLoading(true)
			await AsyncStorage.removeItem(TOKEN_KEY)
			await AsyncStorage.removeItem(USER_KEY)
			setToken(null)
			setUser(null)
			setError(null)
		} catch (err) {
			setError(err as Error)
		} finally {
			setLoading(false)
		}
	}

	const isAuthenticated = !!token

	return { token, user, isAuthenticated, loading, error, login, register, logout }
}
