import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../../components/SearchBar";
import colors from "../../styles/colors";
import StopsMap from "../../components/maps/stops-map";
import Wrapper from "../../components/Wrapper";

export default function Map() {
  const [busLineState, setBusLineState] = useState([]);
  const [region, setRegion] = useState([]);

  return (
    <Wrapper>
      <View style={styles.container}>
        <SearchBar />
        <StopsMap />
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 12,
    height: "100%",
    justifyContent: "space-between",
    padding: 12,
    flex: 1,
  },
  title: {
    color: colors.primaryTextColor,
    fontWeight: "bold",
  },
});
