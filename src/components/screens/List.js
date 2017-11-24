import React, { Component } from 'react';
import { View, Text } from 'react-native';

class List extends Component {
  static navigationOptions = {
    title: 'List'
  };

  render() {
    return (
      <View>
        <Text>List</Text>
      </View>
    );
  }
}

export default List;
