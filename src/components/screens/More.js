import React, { Component } from 'react';
import { View } from 'react-native';
import { CardSection, Button, Header } from '../common';

class More extends Component {
  pressedTerms = () => {
    this.props.navigation.navigate('TermsOfService');
  };

  render() {
    return (
      <View>
        <Header headerText={'More'} />
        <CardSection>
          <Button>
            Help And About
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.pressedTerms}>
            Terms of Service
          </Button>
        </CardSection>
        <CardSection>
          <Button>
            Log Out
          </Button>
        </CardSection>
      </View>
    );
  }
}

export default More;
