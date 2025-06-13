import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SearchScreen, SignInScreen, SignUpScreen } from '../screens'
import { MapScreen } from '../screens/tabs/Map'

const Stack = createNativeStackNavigator()

export function AuthStack() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
			<Stack.Screen name='SignIn' component={SignInScreen} />
			<Stack.Screen name='SignUp' component={SignUpScreen} />
			<Stack.Screen name='Home' component={MapScreen} />
			<Stack.Screen name='Search' component={SearchScreen} />
		</Stack.Navigator>
	)
}
