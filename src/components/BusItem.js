import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../styles/colors";

export default function BusItem({
  code,
  destination,
  distance,
  backgroundColor,
  navigation,
}) {
  const [saved, setSaved] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("BusDetails", { code });
      }}
      style={[styles.container, { backgroundColor }]}
    >
      <View style={styles.code}>
        <Text style={styles.text}>{code}</Text>
      </View>
      <Text style={styles.title}>{destination}</Text>
      <Text style={styles.highlightText}>{distance}</Text>
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
