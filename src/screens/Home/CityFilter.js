import {
  View,
  Text,
  Image,
} from "react-native";
import { Location } from "../../../assets/icons/index.js";

export const City = ({ city, image, price, persons, location, rating, review, darkMode }) => {
  const styles = createStyles(darkMode);

  return (
    <View style={styles.item}>
      <Image source={image} style={styles.itemImage} />
      <View style={styles.textContainer}>
        <View style={styles.rowCity}>
          <Text style={styles.city}>{city}</Text>
          <Text>
            <Text style={styles.price}>{price}</Text>
            <Text style={styles.location}>/{persons}</Text>
          </Text>
        </View>
        <View style={styles.locationContainer}>
          <Location fill={styles.fillLocation} />
          <Text style={styles.location}>{location}</Text>
        </View>
        <Text style={styles.rating}>⭐ {rating} ({review}k Review)</Text>
      </View>
    </View>
  );
};

export const CityRecommendation = ({ city, image, price, persons, location, rating, review, darkMode }) => {
  const styles = createStyles(darkMode);

  return (
    <View>
      <View style={styles.textContainerRecommendation}>
        <View style={styles.rowCityRecommendation}>
          <Image source={image} style={styles.itemImageRecommendation} />
          <View style={styles.infoContainer}>
            <Text style={styles.city}>{city}</Text>
            <Text>
              <Text style={styles.price}>{price}</Text>
              <Text style={styles.location}>/{persons}</Text>
            </Text>
            <View style={styles.locationContainer}>
              <Location fill={styles.fillLocation} />
              <Text style={styles.location}>{location}</Text>
            </View>
            <Text style={styles.rating}>⭐ {rating} ({review}k Review)</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const createStyles = (darkMode) => {
  const commonStyles = {
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
      fontWeight: "bold",
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
    fillLocation: darkMode ? "#fff" : "#080613",
  };

  const lightStyles = {
    ...commonStyles,
    textContainer: {
      ...commonStyles.textContainer,
      backgroundColor: "#FFF",
    },
    textContainerRecommendation: {
      ...commonStyles.textContainerRecommendation,
      backgroundColor: "#FFF",
    },
    city: {
      ...commonStyles.city,
      color: "#000",
    },
    price: {
      ...commonStyles.price,
      color: "#5942dc",
    },
    location: {
      ...commonStyles.location,
      color: "#666",
    },
    rating: {
      ...commonStyles.rating,
      color: "#666",
    },
  };

  const darkStyles = {
    ...commonStyles,
    textContainer: {
      ...commonStyles.textContainer,
      backgroundColor: "#000",
    },
    textContainerRecommendation: {
      ...commonStyles.textContainerRecommendation,
      backgroundColor: "#333",
    },
    city: {
      ...commonStyles.city,
      color: "#FFF",
    },
    price: {
      ...commonStyles.price,
      color: "#5942dc",
    },
    location: {
      ...commonStyles.location,
      color: "#CCC",
    },
    rating: {
      ...commonStyles.rating,
      color: "#CCC",
    },
  };

  return darkMode ? darkStyles : lightStyles;
};
