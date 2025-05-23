import { NavigationContainer } from '@react-navigation/native'
import { AuthStack } from './AuthStack'
import { AppStack } from './AppStack'
import { useAuthContext } from '../contexts/AuthContext'
import { Splash } from '../screens/Splash/Splash'

export function Routes() {
	const { loading, user } = useAuthContext()

	if (loading) return <Splash />

	return <NavigationContainer>{user ? <AppStack /> : <AuthStack />}</NavigationContainer>
}
