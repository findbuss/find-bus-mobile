import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import BusDetails from '../pages/bus-details'
import SignIn from '../pages/SignIn'
import Profile from '../pages/Profile'
import SignUp from '../pages/SignUp'
import Tabs from '../pages/tabs'
import StopLines from '../pages/stop-lines'

const Stack = createStackNavigator()

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Tabs'>
                <Stack.Screen name='BusDetails' component={BusDetails} />
                <Stack.Screen name='Tabs' component={Tabs} />
                <Stack.Screen name='Profile' component={Profile} />
                <Stack.Screen name='SignIn' component={SignIn} />
                <Stack.Screen name='SignUp' component={SignUp} />
                <Stack.Screen name='StopLines' component={StopLines} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
