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
  const [sentidoBus, setSentidoBus] = useState(0);

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

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />

      <View style={styles.lineDataContainer}>
        {trips &&
          route &&
          trips.map((trip, index) => {
            return (
              <Bus
                onPress={() => {
                  setSentidoBus(index);
                  console.log(index);
                }}
                key={index}
                data={{
                  route_id: routeId,
                  shape_id: trip.shape_id,
                  route_color: `#${route.route_color}`,
                  route_text_color: `#${route.route_text_color}`,
                  route_long_name: trip.trip_headsign,
                }}
                style={index === sentidoBus ? { backgroundColor: "white" } : {}}
              />
            );
          })}
      </View>

      {trips && (
        <ShapeMap style={styles.map} shapeId={trips[sentidoBus].shape_id} />
      )}
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
  lineDataContainer: {
    display: "flex",
    gap: 8,
  },
  title: {
    fontWeight: "bold",
  },
});
