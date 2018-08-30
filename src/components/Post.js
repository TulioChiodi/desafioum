import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class Post extends Component {
//  static propTypes = {
//    title:
//  };
  render() {
    return(
      <View style={styles.container}>
       <View style={styles.header}>
        <Text style={styles.whiteBoxTextOne}>
           Aprendendo React Native
        </Text>
        <Text style={styles.whiteBoxTextTwo}>
           Túlio Chiodi Laine Mateus
        </Text>
        </View>
        <View style={styles.mainPost}>
        <Text style={styles.whiteBoxThree}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
       sed do eiusmod tempor incididunt ut labore et dolore
       magna aliqua. Ut enim ad minim veniam, quis nostrud
       exercitation ullamco laboris nisi ut aliquip ex ea
       commodo consequat.
        </Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    padding: 20,
    borderRadius: 6,
    alignItems:'flex-start',
    width: width - 40,
    backgroundColor: '#FFFFFF',
  },
  header:{
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#EEEEEE',
  },
  mainPost:{
    paddingTop:10,
  },
  whiteBoxTextOne:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  whiteBoxTextTwo:{
    color: '#999999',
  },
  whiteBoxTextThree:{
    color: '#666666',
  },
});
