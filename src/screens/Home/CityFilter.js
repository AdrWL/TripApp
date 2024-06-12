import {
    View,
    Text,
    StyleSheet,
    Image,
  } from "react-native";
import { Location } from "../../../assets/icons/index.js";

export const City = ({ city, image, price, persons, location, rating, review }) => (
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
        <Text style={styles.rating}>⭐ {rating} ({review}k Review)</Text>
      </View>
    </View>
  );
  
  export const CityRecommendation = ({ city, image, price, persons, location, rating, review }) => (
    <View>
      <View style={styles.textContainerRecommendation}>
        <View style={styles.row}>
          <Image source={image} style={styles.itemImageRecommendation} />
          <View style={styles.infoContainer}>
            <Text style={styles.city}>{city}</Text>
            <Text>
              <Text style={{ color: "#0000FF", fontWeight: "bold" }}>{price}</Text>/{persons}
            </Text>
            <View style={styles.locationContainer}>
              <Location />
              <Text style={styles.location}>{location}</Text>
            </View>
            <Text style={styles.rating}>⭐ {rating} ({review}k Review)</Text>
          </View>
        </View>
      </View>
    </View>
  );

  const styles = StyleSheet.create({
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
      row: {
        flexDirection: "row",
        alignItems: "center",
      },
      itemImageRecommendation: {
        width: 104,
        height: 104,
        borderRadius: 10,
      },
      infoContainer: {
        paddingLeft: 10,
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
      itemImageRecommendation: {
        width: 104,
        height: 104,
        borderRadius: 10,
      },
  });