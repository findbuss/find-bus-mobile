import { NavigationContainer } from '@react-navigation/native'
import { AuthStack } from './AuthStack'
import { AppStack } from './AppStack'
import { useAuth } from '../contexts/AuthContext'
import { Splash } from '../screens/Splash/Splash'

export function Routes() {
	const { loading, isAuthenticated } = useAuth()

	if (loading) return <Splash />

	return <NavigationContainer>{isAuthenticated ? <AppStack /> : <AuthStack />}</NavigationContainer>
}
