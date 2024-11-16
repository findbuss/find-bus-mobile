import { Text, View, StyleSheet } from "react-native";

import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import BusItem from "../components/BusItem";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import ShapeMap from "../components/maps/shape-map";

export default function BusDetails() {
  const route = useRoute();
  const { shapeId } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      <Card>
        <Text style={styles.title}>Paradas</Text>
        <Text style={styles.title}>{shapeId}</Text>
        <BusItem
          color={"yellow"}
          code={"233C"}
          destination={"Ceret"}
          distance={"5 min"}
        />
      </Card>
      <ShapeMap shapeId={shapeId} />
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
