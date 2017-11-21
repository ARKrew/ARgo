import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import AppNavigator from './AppNavigator';
// import firebase from 'firebase';
// Middleware
import reducers from './reducers';

class App extends Component {

  render() {
    // Wire up redux-thunk
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      // STORE
      // Pass reducers through createStore call
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ARgo', () => App);
