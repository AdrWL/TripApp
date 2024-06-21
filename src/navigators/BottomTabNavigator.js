import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/Home/Home';
import { MyProfileScreen } from '../screens/MyProfile/MyProfile';
import { HomeIcon, UserCircleIcon } from '../../assets/icons/index';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = ({ darkMode, setDarkMode }) => {

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: darkMode ? createStyles.darkBackground : createStyles.lightBackground,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <HomeIcon stroke={focused ? createStyles.iconFocused : color} width={33} height={24} />
          ),
        }}
      >
        {(props) => <HomeScreen {...props} darkMode={darkMode} setDarkMode={setDarkMode} />}
      </Tab.Screen>
      <Tab.Screen
        name="Profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <UserCircleIcon stroke={focused ? createStyles.iconFocused : color} width={24} height={24} />
          ),
        }}
      >
        {(props) => <MyProfileScreen {...props} darkMode={darkMode} setDarkMode={setDarkMode} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

const createStyles = {
  darkBackground: '#000',
  lightBackground: '#fff',
  iconFocused: '#285dfb',
};