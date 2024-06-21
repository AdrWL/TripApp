import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import profileImage from "../../../assets/images/profile.jpg";
import { DarkModeButton, LogoutButton } from "../../../assets/icons/index";
import { CustomSwitch } from "./CustomSwitch";

export const MyProfileScreen = ({ darkMode, setDarkMode }) => {
  const styles = createStyles(darkMode);

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
              fill={styles.iconColor.fill}
              strokes={styles.iconColor.stroke}
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

const createStyles = (darkMode) => {
  const commonStyles = {
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
    iconColor: {
      fill: darkMode ? "#242528" : "#fff",
      stroke: darkMode ? "#fff" : "#080613",
    },
  };

  const lightStyles = {
    ...commonStyles,
    title: {
      ...commonStyles.title,
      color: "#000",
    },
    line: {
      ...commonStyles.line,
      backgroundColor: "#ccc",
    },
    textButton: {
      ...commonStyles.textButton,
      color: "#000",
    },
    name: {
      ...commonStyles.name,
      color: "#000",
    },
    email: {
      ...commonStyles.email,
      color: "#666",
    },
  };

  const darkStyles = {
    ...commonStyles,
    blackBackground: {
      ...commonStyles.blackBackground,
      backgroundColor: "#000",
    },
    container: {
      ...commonStyles.container,
      backgroundColor: "#000",
    },
    title: {
      ...commonStyles.title,
      color: "#fff",
    },
    line: {
      ...commonStyles.line,
      backgroundColor: "#555",
    },
    textButton: {
      ...commonStyles.textButton,
      color: "#fff",
    },
    name: {
      ...commonStyles.name,
      color: "#fff",
    },
    email: {
      ...commonStyles.email,
      color: "#ccc",
    },
  };

  return darkMode ? darkStyles : lightStyles;
};
