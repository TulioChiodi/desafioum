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

const { width, height } = Dimensions.get('window');

export default class App extends Component {

  state = {
    posts: [
      {
        titulo: 'Aprendendo React Native',
//        autor:'Túlio Chiodi Laine Mateus',
//        conteudo:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.boxText}>GoNative App</Text>
        </View>
        <View style={styles.whiteBox}>
            {this.state.posts.map(post => <Post titulo={post}/>)}
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
