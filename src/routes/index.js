import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Ionicons from 'react-native-vector-icons/Ionicons'

import colors from '../styles/colors'

import Home from '../pages/Home'
import BusStops from '../pages/BusStops'
import Saves from '../pages/Saves'
import Profile from '../pages/Profile'

const Tab = createBottomTabNavigator()

export default function MyTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            switch (route.name) {
              case 'Home':
                iconName = focused ? 'home': 'home-outline'
                break
              case 'BusStops':
                iconName = focused? 'location': 'location-outline'
                break
              case 'Saves':
                iconName = focused? 'bookmark': 'bookmark-outline'
                break
              case 'Profile':
                iconName = focused? 'person': 'person-outline'
            }
            
            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: colors.highlightColor,
          tabBarInactiveTintColor: colors.secondaryTextColor,
          headerShown: false
        })}
      >
        <Tab.Screen name="Home" component={Home} options={{ title: 'Home' }}/>
        <Tab.Screen name="BusStops" component={BusStops} options={{ title: 'Paradas' }}/>
        <Tab.Screen name="Saves" component={Saves} options={{ title: 'Salvos' }}/>
        <Tab.Screen name="Profile" component={Profile} options={{ title: 'Perfil' }}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}