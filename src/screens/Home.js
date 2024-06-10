import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import profileImage from "../../assets/images/profile.jpg";
import towerImage from "../../assets/images/Tower.jpg";
import saintImage from "../../assets/images/Saint.jpg";
import { Bell, Search, Location } from "../../assets/icons/index";

const CITIES = [
  {
    id: "0",
    city: "Saint Moritz",
    image: saintImage,
    price: "$1200",
    persons: "person",
    location: "Zurich, Switzerland",
    rating: "5.0 (6k Review)",
  },
  {
    id: "1",
    city: "Tower Bridge",
    image: towerImage,
    price: "$890",
    persons: "person",
    location: "London, United Kingdom",
    rating: "5.0 (2.5k Review)",
  },
];

const Item = ({ city, image, price, persons, location, rating }) => (
  <View style={styles.item}>
    <Image source={image} style={styles.itemImage} />
    <View style={styles.textContainer}>
      <View style={styles.row}>
        <Text style={styles.city}>{city}</Text>
        <Text style={styles.price}>
          <Text style={{ color: "#0000FF", fontWeight: "bold" }}>{price}</Text>/{persons}
        </Text>
      </View>
      <View style={styles.locationContainer}>
        <Location />
        <Text style={styles.location}>{location}</Text>
      </View>
      <Text style={styles.rating}>⭐ {rating}</Text>
    </View>
  </View>
);


export const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

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
        <Search style={{ position: "absolute", left: 10, top: 24 }} />
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
      <SafeAreaView style={styles.listContainer} edges={[]}>
        <FlatList
          data={CITIES}
          renderItem={({ item }) => <Item {...item} />}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </SafeAreaView>
      <View style={{ paddingTop: 20 }}>
        <Text style={styles.info}>Recommendation</Text>
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
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
  },
  listContainer: {
    marginTop: 15,
  },
  item: {
    width: 225,
    height: 225,
    justifyContent: "flex-end",
    alignItems: "center",
    marginEnd: 10,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  itemImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  textContainer: {
    width: "93%",
    marginBottom: 7,
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 8,
  },
  city: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    fontSize: 12,
    marginLeft: "auto",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  location: {
    fontSize: 12,
    marginLeft: 5,
  },
  rating: {
    fontSize: 12,
    marginTop: 5,
  },
});

