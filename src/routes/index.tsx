import { NavigationContainer } from '@react-navigation/native'
import { AuthStack } from './AuthStack'
import { AppStack } from './AppStack'
import { useAuth } from '../contexts/AuthContext'

export function Routes() {
	const { loading } = useAuth()

	// Removemos o loading obrigatório e sempre permitimos acesso ao app
	// A autenticação é opcional e pode ser feita de dentro do app

	return (
		<NavigationContainer>
			<AppStack />
		</NavigationContainer>
	)
}
