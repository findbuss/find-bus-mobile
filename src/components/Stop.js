import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../styles/colors";

export default function Stop({ name }) {
  const [saved, setSaved] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.code}>
        <Text style={styles.text}>{code}</Text>
      </View>
      <Text style={styles.title}>{name}</Text>
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
    backgroundColor: color,
    borderRadius: 12,
    color: colors.primaryTextColor,
    padding: 8,
  },
  text: {
    fontWeight: "bold",
  },
  title: {
    fontWeight: "bold",
    width: "100%",
  },
  button: {
    borderRadius: 50,
    display: "flex",
    padding: 8,
  },
  icon: {
    color: colors.secondaryTextColor,
    fontSize: "1.5rem",
  },
  activedIcon: {
    color: colors.highlightColor,
    fontSize: "1.5rem",
  },
});
