import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type AppStackParamList = {
    Profile: undefined
    Search: undefined
    Settings: undefined
    Tabs: undefined
}

export type AppNavigationProp = NativeStackNavigationProp<AppStackParamList>
