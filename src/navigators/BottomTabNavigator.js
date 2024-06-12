import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/Home/Home';
import { MyProfileScreen } from '../screens/MyProfile';
import { HomeIcon, UserCircleIcon } from '../../assets/icons/index';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <HomeIcon stroke={focused ? '#285dfb' : color} width={33} height={24} />
        }}
      />
      <Tab.Screen
        name="Profile"
        component={MyProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <UserCircleIcon stroke={focused ? '#285dfb' : color} width={24} height={24} />
        }}
      />
    </Tab.Navigator>
  );
};
