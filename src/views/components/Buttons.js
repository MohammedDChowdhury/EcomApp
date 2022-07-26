/* eslint-disable prettier/prettier */

import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import COLOURS from '../../conts/colours';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import {chatbubble-ellipses-outline} from '@mdi/js';
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
export function TurnOnButton({title, onPress = () => {}}) {
  return (
    <TouchableOpacity
      style={styles.turnOn}
      onPress={onPress}
      activeOpacity={0.7}>
      <Text style={styles.TurnOnText}>
        {title} <Icon name={'bell-outline'} style={styles.turnOnIcon} />
      </Text>
    </TouchableOpacity>
  );
}
export function ChatButton({title, onPress = () => {}}) {
  return (
    <TouchableOpacity style={styles.chat} onPress={onPress} activeOpacity={0.7}>
      <Text style={styles.chatText}>
        {title}
        <Icon name={'chat-processing-outline'} style={styles.chatIcon} />
      </Text>
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
    backgroundColor: COLOURS.darkBlue,
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
    backgroundColor: COLOURS.darkBlue,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    borderRadius: 50,
  },
  turnOn: {
    height: 29,
    width: '50%',
    backgroundColor: COLOURS.darkBlue,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 10,
    padding: 1,
    borderColor: COLOURS.darkBlue,
    borderRadius: 5,
    marginLeft: 10,
    marginTop: 20,
  },
  chat: {
    height: 29,
    width: '50%',
    backgroundColor: COLOURS.lightGrey,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 10,
    padding: 1,
    borderColor: COLOURS.grey,
    borderRadius: 5,
    marginLeft: 10,
    marginTop: 20,
  },
  text: {
    color: COLOURS.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
  TurnOnText: {
    color: COLOURS.white,
    fontWeight: 'bold',
    fontSize: 14,
    opacity: 0.8,
  },
  chatText: {
    color: COLOURS.darkBlue,
    fontWeight: 'bold',
    fontSize: 14,
    opacity: 0.8,
  },
  chatIcon: {
    margin: 1,
    height: 50,
    width: 50,

    fontSize: 18,
  },
  turnOnIcon: {
    margin: 1,
    height: 50,
    width: 50,

    fontSize: 15,
  },
});
