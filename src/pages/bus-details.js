import { Text, View, StyleSheet } from "react-native";

import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import BusItem from "../components/BusItem";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import ShapeMap from "../components/maps/shape-map";
import { useEffect, useState } from "react";
import { getTrips, getRoute } from "../services/gtfs-api/api.services";
import Bus from "../components/Bus";

export default function BusDetails() {
  const router = useRoute();
  const { routeId } = router.params;

  const [trips, setTrips] = useState(null);
  const [route, setRoute] = useState(null);

  async function getDetails() {
    const response = await getTrips(routeId);
    setTrips(response);
  }

  async function getRoutes() {
    const response = await getRoute(routeId);
    setRoute(response[0]);
  }

  useEffect(() => {
    getDetails();
    getRoutes();
  }, []);

  console.log("caminho", trips);
  console.log("rota", route);

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      <Card>
        <Text style={styles.title}>Paradas</Text>
        <Text style={styles.title}>{routeId}</Text>
        {trips &&
          route &&
          trips.map((trip) => {
            return (
              <Bus
                data={{
                  route_id: routeId,
                  shape_id: trip.shape_id,
                  route_color: `#${route.route_color}`,
                  route_text_color: `#${route.route_text_color}`,
                  trip_id: "233C-10-0",
                  route_long_name: trip.trip_headsign,
                  next_bus: "5min",
                }}
              />
            );
          })}
      </Card>
      {/* {details && <ShapeMap shapeId={trips[0].shape_id} />} */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 8,
    height: "100%",
    justifyContent: "space-between",
    padding: 8,
  },
  title: {
    fontWeight: "bold",
  },
});
