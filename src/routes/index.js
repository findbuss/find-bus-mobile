import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BusStops from "../pages/BusStops";
import Home from "../pages/Home";
import Map from "../pages/Map";
import Profile from "../pages/Profile";
import Saves from "../pages/Saves";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Tabs from "../pages/tabs";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // screenOptions={{ headerShown: false }}
        initialRouteName="Tabs"
      >
        <Stack.Screen name="BusStops" component={BusStops} />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Saves" component={Saves} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
