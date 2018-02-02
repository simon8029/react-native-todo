import React from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native';

export const TodoForm = (props) => (
  <View style={styles.form}>
    <TextInput
      style={styles.textInput}
      underlineColorAndroid="transparent"
      autoCorrect={false}
      placeholder="Input here..."
      placeholderTextColor="grey"
      clearButtonMode="always"
      onChangeText={props.onTextInputChange}
      value={props.value}
    />
    <TouchableOpacity
      style={styles.button}
      onPress={props.onCreatePressed}
    >
      <Text style={styles.buttonText}>Create</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({

});
