import React, { createContext, useContext } from 'react'
import { useAuth as useAuthProvider } from '../hooks/useAuth'

interface User {
	id: string
	name: string
	email: string
}

interface AuthContextType {
	token: string | null
	user: User | null
	isAuthenticated: boolean
	loading: boolean
	error: Error | null
	login: (email: string, password: string) => Promise<void>
	register: (name: string, email: string, password: string) => Promise<void>
	logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const auth = useAuthProvider()

	return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export function useAuth() {
	const context = useContext(AuthContext)
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider')
	}
	return context
}
