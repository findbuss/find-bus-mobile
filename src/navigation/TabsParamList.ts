import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type TabsParamList = {
	Início: undefined
	Recentes: { tabType: string }
	Salvos: { tabType: string }
}

export type TabsNavigationProp = NativeStackNavigationProp<TabsParamList>
