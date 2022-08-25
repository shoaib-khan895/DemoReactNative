import React, { Component, useState, setState, state } from 'react';
import { Text, View,FlatList ,StyleSheet, Image, TextInput, Button, StatusBar, SafeAreaView, ScrollView ,Alert,Switch} from 'react-native';

//@View component
const ViewBoxesWithColorAndText = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 100,
        }}>
        <View style={{ backgroundColor: "blue", flex: 0.3 }} />
        <View style={{ backgroundColor: "red", flex: 0.5 }} />
      </View>
    );
  };