import React, { Component } from "react";
import { View, Text, Button,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ComponentScreen from "./src/Screen/ComponentScreen";
import DetailsScreen from "./src/Screen/DetailsScreen";
import LifeCycle from "./src/Screen/LifeCycle";
import Fetch from "./src/Screen/Fetch";
import Home from "./src/Screen/Home";
import HomeComponent from "./src/redux/src/component/HomeComponent";
const Stack = createNativeStackNavigator();

function MainMethod() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Demo" component={ComponentScreen} />
        <Stack.Screen name="LifeCycle" component={LifeCycle} />
        <Stack.Screen name="Fetch" component={Fetch} />
        <Stack.Screen name="HomeComponent" component={HomeComponent} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}




export default MainMethod;