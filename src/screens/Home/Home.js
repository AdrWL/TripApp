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

export const HomeScreen = ({ darkMode }) => {
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

  const styles = darkMode ? stylesDark : stylesLight;

  return (
    <View style={styles.outerContainer}>
      <View style={styles.blackBackground}></View>
      <View style={styles.container}>
        <View style={styles.row}>
          <Image source={profileImage} style={styles.image} />
          <View style={styles.user}>
            <Text style={styles.hello}>Hello, Shane</Text>
            <Text style={styles.info}>Where do you want to go?</Text>
          </View>
          <View style={styles.bell}>
            <Bell style={styles.bellSvg} stroke={darkMode ? "#fff" : "#000"} />
          </View>
        </View>
        <View style={styles.searchContainer}>
          <Search style={styles.searchSvg} stroke={darkMode ? "#fff" : "#000"} />
          <TextInput
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
            placeholder="Search"
            placeholderTextColor={darkMode ? "#353541" : "#999"}
            style={[styles.input]}
          />
        </View>
        {searchQuery === "" ? (
          <>
            <SafeAreaView style={styles.safeAreaView} edges={[]}>
              <View style={styles.textPlaces}>
                <Text style={styles.info}>Popular Destinations</Text>
              </View>
              <View style={styles.listContainer}>
                <FlatList
                  data={filterCitiesByReview(true)}
                  renderItem={({ item }) => <City {...item} darkMode={darkMode} />}
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
                    <CityRecommendation {...item} isVertical={true} darkMode={darkMode} />
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
                  <City {...item} darkMode={darkMode} />
                </View>
              )}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
        )}
      </View>
    </View>
  );
};

const stylesCommon = {
  outerContainer: {
    flex: 1,
  },
  blackBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 50,
  },
  container: {
    flex: 1,
    marginTop: 40,
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
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
  },
  info: {
    fontSize: 14,
    fontWeight: "bold",
  },
  bell: {
    width: 40,
    height: 40,
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
  safeAreaView: {
    flex: 1,
  },
  input: {
    height: 40,
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
};

const stylesLight = StyleSheet.create({
  ...stylesCommon,
  hello: {
    ...stylesCommon.hello,
    color: "#666",
  },
  info: {
    ...stylesCommon.info,
    color: "#000",
  },
  bell: {
    ...stylesCommon.bell,
    backgroundColor: "#fff",
  },
  input: {
    ...stylesCommon.input,
    borderColor: "#ccc",
  },
});

const stylesDark = StyleSheet.create({
  ...stylesCommon,
  blackBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: '#000',
  },
  container: {
    ...stylesCommon.container,
    backgroundColor: "#000",
  },
  hello: {
    ...stylesCommon.hello,
    color: "#4f4e51",
  },
  info: {
    ...stylesCommon.info,
    color: "#fff",
  },
  bell: {
    ...stylesCommon.bell,
    backgroundColor: "#000",
    borderColor: "#1b1a22",
    borderWidth: 1,
  },
  input: {
    ...stylesCommon.input,
    borderColor: "#555",
    color: "#fff",
  },
});
