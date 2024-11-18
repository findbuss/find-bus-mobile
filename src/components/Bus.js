import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../styles/colors";

export default function Bus({ data, navigation }) {
  const [saved, setSaved] = useState(false);

  console.log(data.route_id);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("BusDetails", { routeId: data.route_id });
      }}
      style={styles.container}
    >
      <View style={[styles.code, { backgroundColor: data.route_color }]}>
        <Text style={[styles.text, { color: data.route_text_color }]}>
          {data.route_id}
        </Text>
      </View>

      <Text style={styles.title}>{data.route_long_name}</Text>
      <Text style={styles.highlightText}>{data.next_bus}</Text>

      <TouchableOpacity style={styles.button} onPress={() => setSaved(!saved)}>
        {saved ? (
          <Ionicons style={styles.activedIcon} name={"bookmark"} />
        ) : (
          <Ionicons style={styles.icon} name={"bookmark-outline"} />
        )}
      </TouchableOpacity>
    </TouchableOpacity>
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
    width: "100%",
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
