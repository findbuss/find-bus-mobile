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
    borderColor: colors.borderColor,
    borderRadius: 12,
    borderStyle: 'solid',
    borderWidth: 1,
    flex: 1,
    gap: 16,
    paddingTop: 12
  },
  title: {
    color: colors.primaryTextColor,
    fontWeight: "bold",
    paddingHorizontal: 12
  },
  contentArea: {
    paddingBottom: 12,
    paddingHorizontal: 12
  }
})
