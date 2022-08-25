import React, { Component } from 'react';
import { Text, View,StyleSheet, Button} from 'react-native';



class LifeCycle extends Component {
  constructor() {
    super();
    this.state = {
      data: "Click to called componentDidUpdate"
    }
    console.warn("--> constructor is called");
  }
  componentDidMount() {
    // API calls here!!
    console.warn("--> componentDidMount is called");
  }
  componentDidUpdate() {
    console.warn("-> componentDidUpdate is called");
  }
  shouldComponentUpdate(props, state) {
    console.warn("--> shouldComponentUpdate is called");
    return true;
  }
  render() {
    console.warn("--> render is called");
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize:20}}>Back Press to component Will Unmount</Text>
        <Separator></Separator>
        <Button title={this.state.data} onPress={() => { this.setState({ data: "You called component Did Update" }) }}></Button>
      </View>
    );
  }
  componentWillUnmount() {
    console.warn("--> componentWillUnmount is called");
  }
}
const Separator = () => (
    <View style={{marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,}} />
  );
// const NewBtn = () => {
//   const [buttonText, setButtonText] = useState('Click');

//   function handleClick() {
//     setButtonText('New text');
//   }
//   return (
//     <View>
//       <Button title={buttonText} onPress={handleClick}></Button>
//     </View>
//   );
// };



export default LifeCycle;


