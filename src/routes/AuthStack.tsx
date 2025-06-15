import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SignInScreen, SignUpScreen } from '../screens'

const Stack = createNativeStackNavigator()

export function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='SignIn'>
            <Stack.Screen name='SignIn' component={SignInScreen} />
            <Stack.Screen name='SignUp' component={SignUpScreen} />
        </Stack.Navigator>
    )
}
