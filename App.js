import React, { Component, useState, setState, state } from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button, StatusBar, SafeAreaView, ScrollView ,Alert,Switch} from 'react-native';

class Demo extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     data: "Click to update"
  //   }
  //   console.warn("--> constructor is called");
  // }
  // componentDidMount() {
  //   // API calls here!!
  //   console.warn("--> componentDidMount is called");
  // }
  // componentDidUpdate() {
  //   console.warn("-> componentDidUpdate is called");
  // }
  // shouldComponentUpdate(props, state) {
  //   console.warn("--> shouldComponentUpdate is called");
  //   return true;
  // }
  render() {
    //console.warn("--> render is called");
    return (
      <ScrollView>
        <View>
          <ViewBoxesWithColorAndText />
          <SimpleText />
          <DisplayAnImage />
          <UselessTextInput />
          <ScrollViewComponent />
          <ButtonComponent/>
          <ToggleButtonComponent/>
        </View>
      </ScrollView>


    );
    //   <View>
    //     <Text>Hello World 2</Text>
    //     <Button title={this.state.data} onPress={() => { this.setState({ data: "You updated me" }) }}></Button>
    //   </View>

    // );
  }
}


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
//@Text Component
const SimpleText = () => {
  return (
    <Text>Hello Devs</Text>
  );
};

//@Image component
const DisplayAnImage = () => {
  return (
    <View style={styles.containerbtn}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
    </View>
  );
}

//@Input Text component
const UselessTextInput = () => {
  const [number, onChangeNumber] = React.useState(null);

  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric" />
    </>
  );
};
//@ScrollView Component
const ScrollViewComponent = () => {
  return (
    <SafeAreaView >
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text2}>
        Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.
 Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};


const Separator = () => (
  <View style={styles.separatorbtn} />
);

//@ButtonComponent
const ButtonComponent = () => (
  <SafeAreaView style={styles.containerbtn}>
    <Separator></Separator>
    <View>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
  </SafeAreaView>
);

//@Switch
const ToggleButtonComponent = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.containerToggleButtonComponent}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#f4f3f4"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}



const styles = StyleSheet.create({
  containerToggleButtonComponent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  containerbtn: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  titlebtn: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToTextbtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separatorbtn: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  container2: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text2: {
    fontSize: 16,
  },

  container: {
    paddingTop: 10
    ,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Demo;


