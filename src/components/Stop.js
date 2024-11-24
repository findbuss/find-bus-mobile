import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../styles/colors";

export default function Stop({ data }) {
  const [saved, setSaved] = useState(false);

  return (
    <View style={styles.container}>
      <View style={[styles.code, { backgroundColor: data.stop_color }]}>
        <Text style={[styles.text, { color: data.stop_text_color }]}>
          {data.stop_id}
        </Text>
      </View>
      <Text style={styles.title}>{data.stop_long_name}</Text>
      <TouchableOpacity style={styles.button} onPress={() => setSaved(!saved)}>
        {saved ? (
          <Ionicons style={styles.activedIcon} name={"bookmark"} />
        ) : (
          <Ionicons style={styles.icon} name={"bookmark-outline"} />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.tertiaryBackgroundColor,
    borderRadius: 12,
    display: "flex",
    flexDirection: "row",
    gap: 8,
    padding: 8,
  },
  code: {
    borderRadius: 8,
    color: colors.primaryTextColor,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  text: {
    fontWeight: "bold",
  },
  title: {
    fontWeight: "bold",
    flex: 1,
  },
  highlightText: {
    color: colors.highlightColor,
    whiteSpace: "nowrap",
  },
  button: {
    borderRadius: 50,
    display: "flex",
    padding: 8,
  },
  icon: {
    color: colors.secondaryTextColor,
    fontSize: 24,
  },
  activedIcon: {
    color: colors.highlightColor,
    fontSize: 24,
  },
});
