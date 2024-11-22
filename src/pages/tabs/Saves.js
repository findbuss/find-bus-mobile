import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Wrapper from "../../components/Wrapper";
import SearchBar from "../../components/SearchBar";
import ChipBar from "../../components/ChipBar";
import Card from "../../components/Card";
import BusMap from "./BusMap";
import StopMap from "./StopMap";

export default function Saves() {
  const [selectedTab, setSelectedTab] = useState(0)

  const data = [
    {
      title: "Linhas"
    },
    {
      title: "Paradas"
    }
  ]

  return (
    <Wrapper>
      <View style={styles.container}>
        <SearchBar />
        <ChipBar data={data} selectedOption={selectedTab} onChangeTab={setSelectedTab} />
        <Card title="Linhas salvas">
          <View style={styles.itemArea}>
            {selectedTab === 0 ? (
              <BusMap/>
            ) : (
              <StopMap/>
            )}
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
