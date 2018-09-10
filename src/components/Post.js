import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Post = ({post}) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerText}>
        {post.titulo}
      </Text>
      <Text style={styles.whiteBoxTextTwo}>
        {post.autor}
      </Text>
    </View>
    <View style={styles.mainPost}>
      <Text style={styles.whiteBoxThree}>
        {post.conteudo}
      </Text>
   </View>
  </View>
);

  Post.defaultProps = {
    titulo: 'blank',
  };
  Post.propTypes = {
    post: PropTypes.any.isRequired,
  };

const styles = StyleSheet.create({
  container:{
    marginBottom: 20,
    padding: 20,
    borderRadius: 8,
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

export default Post;
