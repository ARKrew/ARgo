import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from '../common';

class List extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'List'} />
      </View>
    );
  }
}

export default List;
