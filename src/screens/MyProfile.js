import React, { useState } from "react";
import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import profileImage from "../../assets/images/profile.jpg";
import { DarkModeButton, LogoutButton } from "../../assets/icons/index";

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
        <Switch
          style={{ flex: 1 }}
          value={darkMode}
          onValueChange={(value) => setDarkMode(value)}
        />
      </View>
      <TouchableOpacity onPress={handleLogout}>
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <LogoutButton />
          </View>
          <Text style={styles.textButtonLogout}>Logout</Text>
        </View>
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
  },
  textButtonLogout: {
    fontSize: 16,
    padding: 10,
    color: "red",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: 30, 
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
  },
});

