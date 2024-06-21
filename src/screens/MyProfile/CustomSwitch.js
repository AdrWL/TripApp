import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";

export const CustomSwitch = ({ value, onValueChange }) => {
  return (
    <TouchableOpacity
      onPress={() => onValueChange(!value)}
      style={[
        styles.switchContainer,
        { backgroundColor: value ? "#4CAF50" : "#ccc" },
      ]}
    >
      <View style={[styles.thumb, value ? { left: 22 } : { left: 2 }]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    width: 45,
    height: 24,
    borderRadius: 17,
    backgroundColor: "#ccc",
    padding: 2,
    justifyContent: "center",
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 15,
    backgroundColor: "#fff",
    position: "absolute",
    top: 2,
  },
});
