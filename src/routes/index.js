import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import App from './tab'
import Profile from '../pages/Profile'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import { isAuth } from '../utils/index'

const Stack = createNativeStackNavigator()

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="App" component={App}/>
        {isAuth ? (
          <Stack.Screen name="Profile" component={Profile}/>
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignIn}/>
            <Stack.Screen name="SignUp" component={SignUp}/>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}