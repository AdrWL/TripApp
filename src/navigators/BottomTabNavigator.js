import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/Home';
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
          tabBarIcon: ({ color }) => <HomeIcon stroke={color} width={24} height={24} />
        }}
      />
      <Tab.Screen
        name="Profile"
        component={MyProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <UserCircleIcon stroke={color} width={24} height={24} />
        }}
      />
    </Tab.Navigator>
  );
};