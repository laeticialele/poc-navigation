import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Iconic from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator, TabBarOptions} from '@react-navigation/bottom-tabs'
/*import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import AddScreen from './screens/AddScreen';
import ActivityScreen from './screens/ActivityScreen';
import ProfileScreen from './screens/ProfileScreen';*/
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import AddScreen from './AddScreen';
import ActivityScreen from './ActivityScreen';
import ProfileScreen from './ProfileScreen';
const Tab = createBottomTabNavigator();
const MenuScreen =()=>{
  
  return(
         <Tab.Navigator tabBarOptions={{
          activeTintColor:'black',
          inactiveTinColor: 'black',
          showLabel: false,
          style:{
             backgroundColor:'#ffc125',
             height: 60,
          }

    }} 
        screenOptions={
          
          ({route}) =>({
        tabBarIcon: ({focused, size, colour})=>{
          let iconName;
          if(route.name === "Home"){
            iconName = focused? "ios-home":"ios-home-outline";
            size = focused ? size + 8 : size +5;
          } else if(route.name === "Search"){
            iconName = focused? "search-sharp":"search-outline";
            size = focused ? size + 8 : size +5;
          } else if(route.name === "Add"){
            iconName = focused ? "ios-map":"map-outline";
            size = focused ? size + 8 : size +5;
          } else if(route.name === "Activity"){
            iconName = focused ? "ios-settings":"ios-settings-outline";
            size = focused ? size + 8 : size +5;
          } else if(route.name === "Profile"){
            iconName = focused? "person-circle-sharp":"person-circle-sharp";
            size = focused ? size + 8 : size +5;
          } 
         return <Iconic name={iconName} size={size} colour={colour}/>;
      },
      tabBarLabel: '',
      headerShown: false,
    })} 
    
    >
        <Tab.Screen name="Home" component={HomeScreen} 
        options={{ tabBarLabel: () => null }}
        />
        <Tab.Screen name="Search" component={SearchScreen}
        options={{ tabBarLabel: () => null }}
        />
        <Tab.Screen name="Add" component={AddScreen}
        options={{ tabBarLabel: () => null }}
        />
        <Tab.Screen name="Activity" component={ActivityScreen}
        options={{ tabBarLabel: () => null }}
        />
        <Tab.Screen name="Profile" component={ProfileScreen}
        options={{ tabBarLabel: () => null }}
        />
      </Tab.Navigator>
    
  )
};
export default MenuScreen;