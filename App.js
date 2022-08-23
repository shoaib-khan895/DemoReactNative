import React, {Component} from 'react';
import {Text,View,Button} from 'react-native';

class Demo extends Component {
  
  constructor() {
    super();
    this.state={
      data: "Click to update"
    }
   console.warn("--> constructor is called");
  }
  componentDidMount(){
    // API calls here!!
    console.warn("--> componentDidMount is called");
  }
  componentDidUpdate(){
    console.warn("-> componentDidUpdate is called");
  }
  shouldComponentUpdate(props, state){
    console.warn("--> shouldComponentUpdate is called");
    return true;
  }
  componentDidUpdate(){
    console.warn("--> componentDidUpdate is called");
  }
  render() 
  {
    console.warn("--> render is called");
    return (
      <View>
        <Text>Hello World 1</Text>
        <Button title={this.state.data} onPress={()=>{this.setState({data:"You updated me"})}}></Button>
      </View>
    );
  }
}



export default Demo;
