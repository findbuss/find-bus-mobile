import { View, ScrollView, Text, StyleSheet } from "react-native";
import colors from "../styles/colors";

export default function Card({ title, children, style }) {
  return (
    <View style={[styles.container]}>
      {title && <Text style={styles.title}>{title}</Text>}
      <ScrollView>
        <View style={[styles.contentArea, style]}>{children}</View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondaryBackgroundColor,
    border: "1px solid " + colors.borderColor,
    borderRadius: 12,
    flex: 1,
    gap: 16,
  },
  title: {
    color: colors.primaryTextColor,
    fontWeight: "bold",
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  contentArea: {
    paddingBottom: 12,
    paddingHorizontal: 12,
  },
});
