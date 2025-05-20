import { useState, useEffect } from 'react'
import { login as apiLogin } from '../services/auth.service'
import AsyncStorage from '@react-native-async-storage/async-storage'

const userKey = process.env.USER_KEY

interface User {
	id: string
	name: string
	email: string
}

export function useAuthLogic() {
	const [user, setUser] = useState<User | null>(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<Error | null>(null)

	async function checkAuth() {
		setLoading(true)
		try {
			const storedUser = await AsyncStorage.getItem(userKey)
			if (storedUser) {
				setUser(JSON.parse(storedUser))
			} else {
				setUser(null)
			}
		} catch (err) {
			setError(err as Error)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		checkAuth()
	}, [])

	async function signIn(credentials: { username: string; password: string }) {
		setLoading(true)
		setError(null)
		try {
			const userData = await apiLogin(credentials)
			setUser(userData)
			await AsyncStorage.setItem(userKey, JSON.stringify(userData))
		} catch (err) {
			setError(err as Error)
			setUser(null)
		} finally {
			setLoading(false)
		}
	}

	const signOut = async () => {
		await AsyncStorage.removeItem(userKey)
		setUser(null)
	}

	useEffect(() => {
		checkAuth()
	}, [])

	return { user, loading, error, signIn, signOut }
}
