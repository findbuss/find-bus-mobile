import { AuthProvider } from './src/contexts/AuthContext'
import { Routes } from './src/routes/Tabs'

export default function App() {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    )
}
