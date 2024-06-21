import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { BottomTabNavigator } from './src/navigators/BottomTabNavigator';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    const loadDarkMode = async () => {
      const darkModeValue = await AsyncStorage.getItem("darkMode");
      if (darkModeValue !== null) {
        setDarkMode(JSON.parse(darkModeValue));
      }
    };
    loadDarkMode();
  }, []);

  React.useEffect(() => {
    const saveDarkMode = async () => {
      await AsyncStorage.setItem("darkMode", JSON.stringify(darkMode));
    };
    saveDarkMode();
  }, [darkMode]);

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <BottomTabNavigator darkMode={darkMode} setDarkMode={setDarkMode} />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
