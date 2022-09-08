import React, { Component } from "react";
import { View, Text, Button,StyleSheet } from 'react-native';

const Home = function HomeScreen({ navigation })  {
    const Separator = () => (
        <View style={{marginVertical: 8,
            borderBottomColor: '#737373',
            borderBottomWidth: StyleSheet.hairlineWidth,}} />
      );
      
    
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
            <Separator></Separator>
         
           <Button 
          title={"Fetch Details"}
          onPress={()=>navigation.navigate('Fetch')}></Button>
          <Separator></Separator>
         
      
         
         <Button 
        title={"HomeComponent"}
        onPress={()=>navigation.navigate('HomeComponent')}></Button>
      </View>
      
        
    );
  

}
export default Home;
