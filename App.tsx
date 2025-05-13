import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AuthProvider } from './src/contexts/AuthContext'
import { Routes } from './src/routes'

export default function App() {
	return (
		<AuthProvider>
			<SafeAreaProvider>
				<Routes />
			</SafeAreaProvider>
		</AuthProvider>
	)
}
