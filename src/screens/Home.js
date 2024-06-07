import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import profileImage from "../../assets/images/profile.jpg";
import towerImage from "../../assets/images/Tower.jpg";
import saintImage from "../../assets/images/Saint.jpg";
import { Bell, Search } from "../../assets/icons/index";

const CITIES = [
  {
    id: "0",
    city: "Saint Moritz",
    image: saintImage,
  },
  {
    id: "1",
    city: "Tower Bridge",
    image: towerImage,
  },
];

const Item = ({ city, image }) => (
  <View style={styles.item}>
    <Image source={image} style={styles.itemImage} />
    <Text style={styles.city}>{city}</Text>
  </View>
);

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
        />
      </View>
      <View style={{ paddingTop: 20 }}>
        <Text style={styles.info}>Popular Destinations</Text>
      </View>
      <SafeAreaView>
        <FlatList
          data={CITIES}
          renderItem={({ item }) => <Item city={item.city} image={item.image} />}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </SafeAreaView>
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
  item: {
    width: 225,
    height: 225,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  itemImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  city: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
