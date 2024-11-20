import { StyleSheet } from "react-native";
import colors from "../styles/colors";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Wrapper({ children }) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryBackgroundColor,
    flex: 1,
  },
});
