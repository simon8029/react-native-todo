import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Todo from './src/app/Todo';

export default class App extends React.Component {
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
  },
});
