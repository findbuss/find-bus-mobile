import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type TabsParamList = {
    Início: undefined
    Recentes: undefined
    Salvos: undefined
}

export type TabsNavigationProp = NativeStackNavigationProp<TabsParamList>
