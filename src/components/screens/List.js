import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, CardSection } from '../common';

class List extends Component {
  pressedAR = () => {
    this.props.navigation.navigate('ARPortal');
  };

  pressedDemo = () => {
    this.props.navigation.navigate('DemoARPortal');
  };

  render() {
    return (
      <View>
        <Header headerText={'List'} />
        <CardSection>
          <Button onPress={this.pressedDemo}>Demo AR Portal</Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.pressedAR}>AR Portal</Button>
        </CardSection>
      </View>
    );
  }
}

export default List;
