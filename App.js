import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';

class TextInANest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Hello",
      bodyText: 'World',
    };
  }

  onPressTitle = () => {
    this.setState({titleText: "Bird's Nest [pressed]"});
  };

  render() {
    return (
      <Text style={styles.baseText}>
        <Text style={styles.titleText} onPress={this.onPressTitle}>
          {this.state.titleText}
          {'\n'}
          {'\n'}
        </Text>
        <Text numberOfLines={5}>{this.state.bodyText}</Text>
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TextInANest;
