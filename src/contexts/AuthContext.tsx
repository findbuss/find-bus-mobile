import { createContext, useContext, useState } from 'react'

interface AuthContextData {
    isAuthenticated: boolean
    login: () => void
    logout: () => void
}

const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    function login() {
        setIsAuthenticated(true)
    }

    function logout() {
        setIsAuthenticated(false)
    }

    return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
    return useContext(AuthContext)
}
