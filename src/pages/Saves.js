import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Wrapper from "../components/Wrapper";
import SearchBar from "../components/SearchBar";
import ChipBar from "../components/ChipBar";
import Card from "../components/Card";
import Bus from "../components/Bus";
import colors from "../styles/colors";

export default function Saves() {
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
      color: "yellow",
      code: "233C-10",
      destination: "CERET",
      distance: "5 min",
    },
    {
      color: "red",
      code: "407L-10",
      destination: "Metro Guilhermina",
      distance: "5 min",
    },
  ];

  return (
    <Wrapper>
      <View style={styles.container}>
        <SearchBar />
        <ChipBar data={data} />
        <Card title="Linhas salvas">
          <View style={styles.itemArea}>
            {buses.map((item, index) => (
              <Bus
                key={index}
                color={item.color}
                code={item.code}
                destination={item.destination}
                distance={item.distance}
              />
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
