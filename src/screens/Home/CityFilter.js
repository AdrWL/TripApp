import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import { Location } from "../../../assets/icons/index.js";

export const City = ({ city, image, price, persons, location, rating, review, darkMode }) => {
  const styles = darkMode ? stylesDark : stylesLight;

  return (
    <View style={styles.item}>
      <Image source={image} style={styles.itemImage} />
      <View style={styles.textContainer}>
        <View style={styles.rowCity}>
          <Text style={styles.city}>{city}</Text>
          <Text>
            <Text style={styles.price}>{price}</Text><Text style={styles.location}>/{persons}</Text>
          </Text>
        </View>
        <View style={styles.locationContainer}>
        <Location fill={darkMode ? "#fff" : "#080613"} />
          <Text style={styles.location}>{location}</Text>
        </View>
        <Text style={styles.rating}>⭐ {rating} ({review}k Review)</Text>
      </View>
    </View>
  );
};

export const CityRecommendation = ({ city, image, price, persons, location, rating, review, darkMode }) => {
  const styles = darkMode ? stylesDark : stylesLight;

  return (
    <View>
      <View style={styles.textContainerRecommendation}>
        <View style={styles.rowCityRecommendation}>
          <Image source={image} style={styles.itemImageRecommendation} />
          <View style={styles.infoContainer}>
            <Text style={styles.city}>{city}</Text>
            <Text>
              <Text style={styles.price}>{price}</Text ><Text style={styles.location}>/{persons}</Text>
            </Text>
            <View style={styles.locationContainer}>
            <Location fill={darkMode ? "#fff" : "#080613"} />
              <Text style={styles.location}>{location}</Text>
            </View>
            <Text style={styles.rating}>⭐ {rating} ({review}k Review)</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const stylesCommon = {
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
  textContainer: {
    width: "93%",
    marginBottom: 7,
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 8,
  },
  itemImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  textContainerRecommendation: {
    width: "100%",
    marginBottom: 7,
    backgroundColor: "#FFF",
    padding: 5,
    borderRadius: 8,
  },
  rowCity: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowCityRecommendation: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemImageRecommendation: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  infoContainer: {
    padding: 10,
  },
  city: {
    fontSize: 14,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    fontWeight: "bold"
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  location: {
    fontSize: 12,
    fontWeight: "normal",
    marginStart: 3,
  },
  rating: {
    fontSize: 12,
    fontWeight: "normal",
    marginTop: 5,
  },
};

const stylesLight = StyleSheet.create({
  ...stylesCommon,
  textContainer: {
    ...stylesCommon.textContainer,
    backgroundColor: "#FFF",
  },
  textContainerRecommendation: {
    ...stylesCommon.textContainerRecommendation,
    backgroundColor: "#FFF",
  },
  city: {
    ...stylesCommon.city,
    color: "#000",
  },
  price: {
    ...stylesCommon.price,
    color: "#5942dc",
  },
  location: {
    ...stylesCommon.location,
    color: "#666",
  },
  rating: {
    ...stylesCommon.rating,
    color: "#666",
  },
});

const stylesDark = StyleSheet.create({
  ...stylesCommon,
  textContainer: {
    ...stylesCommon.textContainer,
    backgroundColor: "#000",
  },
  textContainerRecommendation: {
    ...stylesCommon.textContainerRecommendation,
    backgroundColor: "#333",
  },
  city: {
    ...stylesCommon.city,
    color: "#FFF",
  },
  price: {
    ...stylesCommon.price,
    color: "#5942dc",
  },
  location: {
    ...stylesCommon.location,
    color: "#CCC",
  },
  rating: {
    ...stylesCommon.rating,
    color: "#CCC",
  },
});
