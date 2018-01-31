/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
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
      <View style={styles.container}>
        <Todo />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
