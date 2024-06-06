import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { BottomTabNavigator } from './src/navigators/BottomTabNavigator';


export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider style={{ overflow: 'visible' }}>
        <BottomTabNavigator />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
