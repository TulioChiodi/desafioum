import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';

import 'config/ReactotronConfig';
import 'config/DevToolsConfig';
import Post from 'components/Post';

console.tron.log('teste');

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const { width, height } = Dimensions.get('window');

export default class App extends Component {
  static propTypes ={
    prop: PropTypes.string.isRequired,
  };
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.boxText}>GoNative App</Text>
      </View>
      <View style={styles.whiteBox}>
      <Post />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EE7777',
  },
  box: {
    flex: 1,
    maxHeight: 60,
    backgroundColor: '#FFFFFF',
  },
  boxText: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  whiteBox: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    padding: 20,
  },
});
