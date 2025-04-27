import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MapScreen, RecentsScreen, SavesScreen } from '../screens/tabs'
import { colors } from '../styles'
import { Icon } from '../components/Icon/Icon'

const Tab = createBottomTabNavigator()

export function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: colors.highlight,
                tabBarInactiveTintColor: colors.secondaryText,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: string = 'home-outline'

                    switch (route.name) {
                        case 'Início':
                            iconName = focused ? 'home' : 'home-outline'
                            break
                        case 'Recentes':
                            iconName = focused ? 'time' : 'time-outline'
                            break
                        case 'Salvos':
                            iconName = focused ? 'bookmark' : 'bookmark-outline'
                    }

                    return <Icon name={iconName} size={size} color={color} />
                }
            })}
            initialRouteName='Início'
        >
            <Tab.Screen name='Início' component={MapScreen} />
            <Tab.Screen name='Recentes' component={RecentsScreen} />
            <Tab.Screen name='Salvos' component={SavesScreen} />
        </Tab.Navigator>
    )
}
