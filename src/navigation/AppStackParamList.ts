import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { TabsParamList } from './TabsParamList'
import { NavigatorScreenParams } from '@react-navigation/native'

export type AppStackParamList = {
	Profile: undefined
	Search: undefined
	Settings: undefined
	Tabs: NavigatorScreenParams<TabsParamList>
}

export type AppNavigationProp = NativeStackNavigationProp<AppStackParamList>
