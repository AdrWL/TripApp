import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import profileImage from "../../../assets/images/profile.jpg";
import { DarkModeButton, LogoutButton } from "../../../assets/icons/index";
import { CustomSwitch } from "./CustomSwitch";

export const MyProfileScreen = ({ darkMode, setDarkMode }) => {
  const styles = darkMode ? stylesDark : stylesLight;

  const handleLogout = () => {
    console.log("Logout button pressed");
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.blackBackground}></View>
      <View style={styles.container}>
        <Text style={styles.title}>My Profile</Text>
        <View style={styles.row}>
          <Image source={profileImage} style={styles.image} />
          <View style={styles.user}>
            <Text style={styles.name}>Shane Watson</Text>
            <Text style={styles.email}>shanewatson@example.com</Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <DarkModeButton
              fill={darkMode ? "#242528" : "#fff"}
              strokes={darkMode ? "#fff" : "#080613"}
            />
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
    </View>
  );
};

const stylesCommon = {
  outerContainer: {
    flex: 1,
  },
  blackBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 50,
  },
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
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
  user: {
    flex: 1,
    paddingHorizontal: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
  },
};

const stylesLight = StyleSheet.create({
  ...stylesCommon,
  title: {
    ...stylesCommon.title,
    color: "#000",
  },
  line: {
    ...stylesCommon.line,
    backgroundColor: "#ccc",
  },
  textButton: {
    ...stylesCommon.textButton,
    color: "#000",
  },
  textButtonLogout: {
    ...stylesCommon.textButtonLogout,
    color: "red",
  },
  iconContainerLogout: {
    ...stylesCommon.iconContainerLogout,
    backgroundColor: "#ffe7f1",
  },
  name: {
    ...stylesCommon.name,
    color: "#000",
  },
  email: {
    ...stylesCommon.email,
    color: "#666",
  },
});

const stylesDark = StyleSheet.create({
  ...stylesCommon,
  blackBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: "#000",
  },
  container: {
    ...stylesCommon.container,
    backgroundColor: "#000",
  },
  title: {
    ...stylesCommon.title,
    color: "#fff",
  },
  line: {
    ...stylesCommon.line,
    backgroundColor: "#555",
  },
  textButton: {
    ...stylesCommon.textButton,
    color: "#fff",
  },
  textButtonLogout: {
    ...stylesCommon.textButtonLogout,
    color: "red",
  },
  iconContainerLogout: {
    ...stylesCommon.iconContainerLogout,
    backgroundColor: "#fff",
  },
  name: {
    ...stylesCommon.name,
    color: "#fff",
  },
  email: {
    ...stylesCommon.email,
    color: "#ccc",
  },
});
