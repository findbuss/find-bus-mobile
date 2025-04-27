import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Tabs } from './Tabs'
import { SearchScreen, ProfileScreen, SettingsScreen } from '../screens'

const Stack = createNativeStackNavigator()

export function AppStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Tabs'>
            <Stack.Screen name='Tabs' component={Tabs} />
            <Stack.Screen name='Search' component={SearchScreen} />
            <Stack.Screen name='Profile' component={ProfileScreen} />
            <Stack.Screen name='Settings' component={SettingsScreen} />
        </Stack.Navigator>
    )
}
