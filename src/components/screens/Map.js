import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from '../common';

class Map extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Map'} />
      </View>
    );
  }
}

export default Map;
