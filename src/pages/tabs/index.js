import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import Map from "./Map";
import Saves from "./Saves";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={Home}
        // options={{
        //   tabBarIcon: () => {
        //     return <Text>📆</Text>;
        //   },
        // }}
      />
      <Tab.Screen
        name="Explorar"
        component={Map}
        // options={{
        //   tabBarIcon: () => {
        //     return <Text>📆</Text>;
        //   },
        // }}
      />
      <Tab.Screen
        name="Salvos"
        component={Saves}
        // options={{
        //   tabBarIcon: () => {
        //     return <Text>📆</Text>;
        //   },
        // }}
      />
    </Tab.Navigator>
  );
}
