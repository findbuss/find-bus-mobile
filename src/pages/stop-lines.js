import { Text, View, StyleSheet, Image } from "react-native";

import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import BusItem from "../components/BusItem";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import ShapeMap from "../components/maps/shape-map";
import StopIcon from "../../assets/icons/stop.png";
import { useEffect, useState } from "react";
import { getStopDetails } from "../services/gtfs-api/api.services";
import Bus from "../components/Bus";

export default function StopLines({ navigation }) {
  const route = useRoute();
  const { stopId } = route.params;

  const [details, setDetails] = useState(null);

  async function getDetails() {
    const response = await getStopDetails(stopId);
    console.log(response);
    setDetails(response.features[0]);
  }

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      {details && (
        <Card style={styles.cardContainer}>
          <View style={styles.titleContainer}>
            <Image
              source={require("../../assets/icons/stop.png")}
              style={styles.image}
            />
            <Text style={styles.title}>{details.properties.stop_name}</Text>
          </View>
          {details.properties.routes.map((busLines, index) => {
            return (
              <Bus
                onPress={() => {
                  navigation.navigate("BusDetails", {
                    routeId: busLines.route_id,
                  });
                }}
                key={index}
                data={busLines}
              />
            );
          })}
        </Card>
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
  cardContainer: {
    display: "flex",
    gap: 10,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
    width: "100%",
    marginTop: 15,
    marginBottom: 5,
  },
  image: {
    height: 40,
    width: 40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
