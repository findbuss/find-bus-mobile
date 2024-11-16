import React from "react";
import { View, StyleSheet } from "react-native";
import Wrapper from "../../components/Wrapper";
import SearchBar from "../../components/SearchBar";
import ChipBar from "../../components/ChipBar";
import Card from "../../components/Card";
import Bus from "../../components/Bus";

export default function Saves({ navigation }) {
  const data = [
    {
      title: "Linhas",
      action: null,
    },
    {
      title: "Paradas",
      action: null,
    },
  ];

  const buses = [
    {
      route_id: "233C-10",
      shape_id: 59558,
      route_color: "#FFD100",
      route_text_color: "#000000",
      trip_id: "233C-10-0",
      destination: "Ceret",
      next_bus: "5min",
    },
    {
      route_id: "407L-10",
      shape_id: 80728,
      route_color: "#DA291C",
      route_text_color: "#FFFFFF",
      trip_id: "407L-10-0",
      destination: "Barro Branco",
      next_bus: "5min",
    },
  ];

  return (
    <Wrapper>
      <View style={styles.container}>
        <SearchBar />
        <ChipBar data={data} />
        <Card title="Linhas salvas">
          <View style={styles.itemArea}>
            {buses.map((busLine, index) => (
              <Bus key={index} data={busLine} navigation={navigation} />
            ))}
          </View>
        </Card>
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
    padding: 12,
  },
  itemArea: {
    display: "flex",
    gap: 12,
  },
});
