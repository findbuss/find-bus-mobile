import { useState } from 'react'
import { registerUser, RegisterPayload } from '../services/register.service'

export function useRegister() {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<Error | null>(null)
	const [success, setSuccess] = useState(false)

	const register = async (payload: RegisterPayload) => {
		setLoading(true)
		setError(null)
		setSuccess(false)

		try {
			await registerUser(payload)
			setSuccess(true)
			return true
		} catch (err) {
			setError(err as Error)
			return false
		} finally {
			setLoading(false)
		}
	}

	return { register, loading, error, success }
}
