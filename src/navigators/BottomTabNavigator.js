import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import MyProfileScreen from '../screens/MyProfile';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="My Profile" component={MyProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;