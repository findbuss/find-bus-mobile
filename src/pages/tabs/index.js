import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'
import Home from "./Home";
import Map from "./Map";
import Saves from "./Saves";
import colors from "../../styles/colors";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.highlightColor,
        tabBarInactiveTintColor: colors.secondaryTextColor,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          switch (route.name) {
            case 'Início':
              iconName = focused ? 'home': 'home-outline'
              break
            case 'Explorar':
              iconName = focused? 'location': 'location-outline'
              break
            case 'Salvos':
              iconName = focused? 'bookmark': 'bookmark-outline'
          }
          
          return <Ionicons name={iconName} size={size} color={color} />
        }
      })}
      initialRouteName="Início"
    >
      <Tab.Screen name="Início" component={Home}/>
      <Tab.Screen name="Explorar" component={Map}/>
      <Tab.Screen name="Salvos" component={Saves}/>
    </Tab.Navigator>
  )
}
