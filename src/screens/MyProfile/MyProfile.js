import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import profileImage from "../../../assets/images/profile.jpg";
import { DarkModeButton, LogoutButton } from "../../../assets/icons/index";
import { CustomSwitch } from "./CustomSwitch";

export const MyProfileScreen = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleLogout = () => {
    console.log("Logout button pressed");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
      <View style={styles.row}>
        <Image source={profileImage} style={styles.image} />
        <View style={{ flex: 1, paddingHorizontal: 10 }}>
          <Text style={styles.name}>Shane Watson</Text>
          <Text style={styles.email}>shanewatson@example.com</Text>
        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <DarkModeButton />
        </View>
        <Text style={styles.textButton}>Dark Mode</Text>
        <CustomSwitch value={darkMode} onValueChange={setDarkMode} />
      </View>
      <TouchableOpacity onPress={handleLogout} style={styles.row}>
        <View style={styles.iconContainerLogout}>
          <LogoutButton style={styles.logoutButtonIcon} />
        </View>
        <Text style={styles.textButtonLogout}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  line: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textButton: {
    fontSize: 16,
    padding: 10,
    flex: 1,
  },
  textButtonLogout: {
    fontSize: 16,
    padding: 10,
    color: "red",
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  iconContainer: {
    marginRight: 10,
  },
  iconContainerLogout: {
    width: 44,
    height: 44,
    backgroundColor: "#ffe7f1",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 22,
    marginRight: 10,
  },
  logoutButtonIcon: {
    position: "absolute",
    top: 10,
    left: 15,
  },
  switchContainer: {
    width: 45,
    height: 24,
    borderRadius: 17,
    backgroundColor: "#ccc",
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
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
  },
});
