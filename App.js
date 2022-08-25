import React, { Component } from "react";
import { View, Text, Button,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Demo from "./src/Screen/Demo";
import DetailsScreen from "./src/Screen/DetailsScreen";
import LifeCycle from "./src/Screen/LifeCycle";


const Stack = createNativeStackNavigator();

const Separator = () => (
  <View style={{marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,}} />
);
// function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//     </View>
//   );
// }

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:20,color:'red'}}>Here we have used navigation</Text>
      <Separator></Separator>
      <Button
        title="Components"
        onPress={() => navigation.navigate('Demo')
        }/>
      <Separator></Separator>
        <Button 
        title={"Click to see LifeCycle in Logs"}
        onPress={()=>navigation.navigate('LifeCycle')}></Button>
    </View>
  );
}


function MainMethod() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Demo" component={Demo} />
        <Stack.Screen name="LifeCycle" component={LifeCycle} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}




export default MainMethod;