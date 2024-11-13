import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../styles/colors'
import Home from '../pages/Home'
import Map from '../pages/Map'
import Saves from '../pages/Saves'

const Tab = createBottomTabNavigator()

export default function MyTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'search': 'search-outline'
              break
            case 'Map':
              iconName = focused? 'location': 'location-outline'
              break
            case 'Saves':
              iconName = focused? 'bookmark': 'bookmark-outline'
          }
          
          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: colors.highlightColor,
        tabBarInactiveTintColor: colors.secondaryTextColor,
        headerShown: false
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ title: 'Busca' }}/>
      <Tab.Screen name="Map" component={Map} options={{ title: 'Explorar' }}/>
      <Tab.Screen name="Saves" component={Saves} options={{ title: 'Salvos' }}/>
    </Tab.Navigator>
  )
}