import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import  HomeScreen from '../Screens/HomeScreen';
import LoginScreen from '../Screens/LoginScreen';

const Tab = createBottomTabNavigator ();

const TabNavigator = () => {
return(
    <Tab.Navigator
             screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: { backgroundColor: '#fff' },
  }}
    >
        <Tab.Screen
            name="home"
            component={HomeScreen}
            options={{
                tabBarIcon: ({ color }) => (
                <Icon name="home-outline" color={color} size={28} />
          ),
        }}
        />
        <Tab.Screen
            name="Search"
            component={LoginScreen}
            options={{
                tabBarIcon: ({ color }) => (
                <Icon name="magnify" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>



    )
}
export default TabNavigator;