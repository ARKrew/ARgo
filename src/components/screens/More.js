import React, { Component } from 'react';
import { View } from 'react-native';
import { CardSection, Button, Header } from '../common';

class More extends Component {
  pressedTerms = () => {
    this.props.navigation.navigate('TermsOfService');
  };

  pressedHelp = () => {
    this.props.navigation.navigate('HelpAndAbout');
  }

  pressedLogOut = () => {
    this.props.navigation.navigate('LogOut');
  }

  render() {
    return (
      <View>
        <Header headerText={'More'} />
        <CardSection>
          <Button onPress={this.pressedHelp}>
            Help And About
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.pressedTerms}>
            Terms of Service
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.pressedLogOut}>
            Log Out
          </Button>
        </CardSection>
      </View>
    );
  }
}

export default More;
