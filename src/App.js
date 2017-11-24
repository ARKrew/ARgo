// import React, { Component } from 'react';
// import { AppRegistry } from 'react-native';
// import { Provider } from 'react-redux';
// import ReduxThunk from 'redux-thunk';
// import { createStore, applyMiddleware } from 'redux';
// import AppNavigator from './AppNavigator';
// // import firebase from 'firebase';
// // Middleware
// import reducers from './reducers';
//
// class App extends Component {
//
//   render() {
//     // Wire up redux-thunk
//     const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
//
//     return (
//       // STORE
//       // Pass reducers through createStore call
//       <Provider store={store}>
//         <AppNavigator />
//       </Provider>
//     );
//   }
// }
//
// AppRegistry.registerComponent('ARgo', () => App);

import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { addNavigationHelpers } from 'react-navigation';
import { AppNavigator } from './Router';
import reducers from './reducers';
import AppNavigator from './AppNavigator';


const App = ({ dispatch, nav }) => (
    <AppNavigator
        screenProps={{ headerStyle: styles.headerStyle }}
        navigation={addNavigationHelpers({ dispatch, state: nav })}
    />
);

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class NavigationalApp extends Component {

  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

const styles = {
    headerStyle: {
        backgroundColor: '#fff',
    },
};

export default NavigationalApp;
