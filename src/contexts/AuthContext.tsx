import React, { createContext, useContext } from 'react'
import { useAuthLogic } from '../hooks/useAuthLogic'
import type { User } from '../services/auth.service'

interface AuthContextData {
	user: User | null
	loading: boolean
	error: Error | null
	signIn: (credentials: { username: string; password: string }) => Promise<void>
	signOut: () => void
}

const AuthContext = createContext<AuthContextData | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const auth = useAuthLogic()

	return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
	const context = useContext(AuthContext)
	if (!context) throw new Error('useAuthContext must be used within AuthProvider')
	return context
}
