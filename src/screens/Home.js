import React from 'react';
import { View, Text, Switch, StyleSheet } from "react-native";

export const HomeScreen = () => {

  return (
    <View style={styles.container}>
      <Text>
        Example Home
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 50,
  },
});