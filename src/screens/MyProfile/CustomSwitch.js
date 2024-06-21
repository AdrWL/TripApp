import React from "react";
import { TouchableOpacity, View } from "react-native";

export const CustomSwitch = ({ value, onValueChange }) => {
  const styles = createStyles(value);

  return (
    <TouchableOpacity onPress={() => onValueChange(!value)} style={styles.switchContainer}>
      <View style={styles.thumb} />
    </TouchableOpacity>
  );
};

const createStyles = (value) => ({
  switchContainer: {
    width: 45,
    height: 24,
    borderRadius: 17,
    backgroundColor: value ? "#4CAF50" : "#ccc",
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
    left: value ? 22 : 2,
  },
});
