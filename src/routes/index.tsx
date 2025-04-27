import { NavigationContainer } from '@react-navigation/native'
import { AuthStack } from './AuthStack'
import { AppStack } from './AppStack'
import { useAuth } from '../contexts/AuthContext'

export function Routes() {
    const { isAuthenticated } = useAuth()

    return <NavigationContainer>{isAuthenticated ? <AppStack /> : <AuthStack />}</NavigationContainer>
}
