import React from 'react';
import { View, Text } from 'react-native';
import { Button, CardSection } from '../../common';

const LogOut = () => {
  return (
    <View style={styles.ViewStyle}>
      <Text>Are You Sure You Want To Log Out?</Text>
      <CardSection>
        <Button>Yes</Button>
      </CardSection>
      <CardSection>
        <Button>No</Button>
      </CardSection>
    </View>
  );
};

const styles = {
  ViewStyle: {
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export default LogOut;
