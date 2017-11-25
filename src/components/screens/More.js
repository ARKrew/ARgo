import React, { Component } from 'react';
import { View } from 'react-native';
import { CardSection, Button, Header } from '../common';

class More extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'More'} />
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
