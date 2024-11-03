import { Text, View, StyleSheet } from "react-native";
import Wrapper from "../components/Wrapper";
import SearchBar from "../components/SearchBar";
import Bus from "../components/Bus";
import colors from "../styles/colors";
import MapView from "react-native-maps";

export default function Map() {
  return (
    <Wrapper>
      <View style={styles.container}>
        <SearchBar />
        <MapView style={styles.map} />
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
  map: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});
