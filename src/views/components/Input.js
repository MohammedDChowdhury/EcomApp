/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import COLOURS from '../../conts/colours';
import {SendMessageButton} from './Buttons';
SendMessageButton;

const Input = ({inputText}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.inputText}>{inputText}</Text>

      <SendMessageButton />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOURS.white,
    padding: 15,
    margin: 15,
    height: '8.5%',
    borderRadius: 10,
    flexDirection: 'row',
  },
  inputText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLOURS.grey,
  },
});
export default Input;
