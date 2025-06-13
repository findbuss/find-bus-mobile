import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type AuthStackParamList = {
	SignIn: undefined
	SignUp: undefined
	Home: undefined
	Search: undefined
}

export type AuthNavigationProp = NativeStackNavigationProp<AuthStackParamList>
