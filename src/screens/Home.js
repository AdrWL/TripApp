import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import profileImage from "../../assets/images/profile.jpg";
import { Bell, Search } from "../../assets/icons/index";

export const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image source={profileImage} style={styles.image} />
        <View style={{ flex: 1, paddingHorizontal: 10 }}>
          <Text style={styles.hello}>Hello, Shane</Text>
          <Text style={styles.info}>Where do you want to go?</Text>
        </View>
        <View>
          <Bell />
        </View>
      </View>
      <View style={styles.searchContainer}>
        <Search style={{ position: 'absolute', left: 10, top: 24 }} />
        <TextInput
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
          placeholder="Search"
          style={[styles.input, { paddingLeft: 40 }]}
        >
        </TextInput>
      </View>
      <View style={{ paddingTop: 10 }}>
        <Text style={styles.info}>Popular Destinations</Text>
      </View>
      <View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  hello: {
    fontSize: 12,
    color: "#666",
  },
  info: {
    fontSize: 14,
    fontWeight: "bold",
  },
  searchContainer: {
    paddingTop: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
  },
});