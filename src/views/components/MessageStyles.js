/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import COLOURS from '../../conts/colours';
export function MeMessage({title}) {
  return (
    <View style={styles.meMessageContainer}>
      <Text style={styles.meMessage}> {title}</Text>
    </View>
  );
}
export function OtherUserMessage({title}) {
  return (
    <View style={styles.otherUserMessageContainer}>
      <Text style={styles.otherUserMessage}> {title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  meMessageContainer: {
    alignSelf: 'flex-end',
    backgroundColor: COLOURS.blueMessage,
    padding: 10,
    margin: '2%',
    width: '38%',
    marginTop: '1%',
    // marginBottom: '-20%',
    borderRadius: 8,
  },
  meMessage: {
    color: COLOURS.lightGrey,
    fontWeight: 'bold',
    fontSize: 12,
  },
  otherUserMessageContainer: {
    alignSelf: 'flex-start',
    padding: 10,
    margin: '2%',
    borderRadius: 8,
    marginTop: '1%',
    width: '38%',
    // marginBottom: '-20%',
    backgroundColor: COLOURS.white,
  },
  otherUserMessage: {
    color: COLOURS.black,
    fontWeight: 'bold',
    fontSize: 12,
  },
});
