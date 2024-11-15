import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../Home";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  <Tab.Navigator initialRouteName="Home">
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: () => {
          return <Text>📆</Text>;
        },
      }}
    />
    <Tab.Screen
      name="Sd"
      component={Home}
      options={{
        tabBarIcon: () => {
          return <Text>📆</Text>;
        },
      }}
    />
    <Tab.Screen
      name="Ho43me"
      component={Home}
      options={{
        tabBarIcon: () => {
          return <Text>📆</Text>;
        },
      }}
    />
  </Tab.Navigator>;
}
