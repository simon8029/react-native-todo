/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/app/store';
import Todo from './src/app/Todo';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Fancy from './src/app/Fancy';



export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <Todo />
      </Provider>
    );
  }
}
});
