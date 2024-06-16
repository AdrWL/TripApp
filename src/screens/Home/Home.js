import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import profileImage from "../../../assets/images/profile.jpg";
import { Bell, Search } from "../../../assets/icons/index.js";
import { filterCitiesByReview } from "../../data/FilterCities.js";
import { City, CityRecommendation } from "../Home/CityFilter.js";
import { CITIES } from "../../data/Cities.js";

export const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredCities([]);
    } else {
      const results = CITIES.filter((city) =>
        city.city.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCities(results);
    }
  }, [searchQuery]);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image source={profileImage} style={styles.image} />
        <View style={styles.user}>
          <Text style={styles.hello}>Hello, Shane</Text>
          <Text style={styles.info}>Where do you want to go?</Text>
        </View>
        <View style={styles.bell}>
          <Bell style={styles.bellSvg} />
        </View>
      </View>
      <View style={styles.searchContainer}>
        <Search style={styles.searchSvg} />
        <TextInput
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
          placeholder="Search"
          style={[styles.input]}
        />
      </View>
      {searchQuery === "" ? (
        <>
          <SafeAreaView edges={[]}>
            <View style={styles.textPlaces}>
              <Text style={styles.info}>Popular Destinations</Text>
            </View>
            <View tyle={styles.listContainer}>
              <FlatList
                data={filterCitiesByReview(true)}
                renderItem={({ item }) => <City {...item} />}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
            <View style={styles.textPlaces}>
              <Text style={styles.info}>Recommendation</Text>
            </View>
            <View style={styles.recommendationListContainer}>
              <FlatList
                data={filterCitiesByReview(false)}
                renderItem={({ item }) => (
                  <CityRecommendation {...item} isVertical={true} />
                )}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </SafeAreaView>
        </>
      ) : (
        <SafeAreaView style={styles.searchResultsContainer} edges={[]}>
          <FlatList
            data={filteredCities}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.citySearch}>
                <City {...item} />
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 50,
  },
  user: {
    flex: 1,
    paddingHorizontal: 10,
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
  bell: {
    width: 40,
    height: 40,
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 25,
  },
  bellSvg: {
    position: "absolute",
    top: 10,
  },
  searchContainer: {
    paddingTop: 16,
  },
  searchSvg: {
    position: "absolute",
    left: 10,
    top: 24,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    paddingLeft: 40,
  },
  textPlaces: {
    paddingTop: 10,
  },
  listContainer: {
    marginTop: 15,
  },
  recommendationListContainer: {
    marginTop: 15,
    flex: 1,
  },
  searchResultsContainer: {
    marginTop: 15,
    flex: 1,
    alignItems: "center",
  },
  citySearch: {
    marginBottom: 15,
  },
});
