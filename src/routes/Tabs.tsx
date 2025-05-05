import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MapScreen } from '../screens/tabs'
import { colors } from '../styles'
import { Icon } from '../components/Icon/Icon'
import { ListWrapper } from '../components'

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
            <Tab.Screen name='Recentes' component={ListWrapper} initialParams={{ tabType: 'recents' }} />
            <Tab.Screen name='Salvos' component={ListWrapper} initialParams={{ tabType: 'saves' }} />
        </Tab.Navigator>
    )
}
