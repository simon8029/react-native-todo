import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
class Fancy extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.Text}>Fancy</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 50,
  },
  Text: {
    fontSize: width / 5
  }
});

export default Fancy;
