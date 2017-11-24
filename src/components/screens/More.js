import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CardSection, Button } from '../common';

class More extends Component {
  static navigationOptions = {
    title: 'More'
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <CardSection>
          <Button>
            Terms of Service
          </Button>
        </CardSection>
      </View>
    );
  }
}

export default More;
