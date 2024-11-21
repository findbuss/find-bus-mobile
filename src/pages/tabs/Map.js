import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import SearchBar from "../../components/SearchBar";
import colors from "../../styles/colors";
import StopsMap from "../../components/maps/stops-map";
import Wrapper from "../../components/Wrapper";

const { width, height } = Dimensions.get("window");

export default function Map({ navigation }) {
  const [busLineState, setBusLineState] = useState([]);
  const [region, setRegion] = useState([]);

  return (
    <Wrapper>
      <View style={styles.container}>
        <StopsMap navigation={navigation} />
        <View style={styles.floatingContent}>
          <SearchBar />
        </View>
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  floatingContent: {
    paddingHorizontal: 12,
    paddingTop: 12,
    position: "absolute",
    zIndex: 1,
  },
});
