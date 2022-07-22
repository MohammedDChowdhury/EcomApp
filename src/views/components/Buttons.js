/* eslint-disable prettier/prettier */

import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import COLOURS from '../../conts/colours';
export function SmallButton({title, onPress = () => {}}) {
  return (
    <TouchableOpacity
      style={styles.small}
      onPress={onPress}
      activeOpacity={0.7}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export function BigButton({title, onPress = () => {}}) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.7}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {padding: '20 40'},
  big: {
    height: 55,
    width: '100%',
    backgroundColor: COLOURS.blue,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    borderRadius: 50,
  },
  small: {
    height: 27.5,
    width: '50%',
    backgroundColor: COLOURS.blue,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    borderRadius: 50,
  },
  text: {
    color: COLOURS.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
