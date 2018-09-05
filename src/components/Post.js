import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class Post extends Component {
  static defaultProps = {
    //
  };
  static propTypes = {
    post: PropTypes.any.isRequired,
  };

  componentWillMount() {
    console.tron.log(this.props.post);
  };

  render() {
    return(
      <View style={styles.container}>
       <View style={styles.header}>
        <Text style={styles.headerText}>
           {this.props.post.titulo}
        </Text>
        <Text style={styles.whiteBoxTextTwo}>
        {this.props.post.autor}
        </Text>
        </View>
        <View style={styles.mainPost}>
        <Text style={styles.whiteBoxThree}>
          {this.props.post.conteudo}
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
  headerText:{
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
