/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import COLOURS from '../../conts/colours';
export function Circle() {
  return (
    <View
      style={{
        width: 10,
        height: 10,
        backgroundColor: COLOURS.black,

        borderRadius: 70,
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        color: 'black',
        marginLeft: 40,
        marginTop: -2,
        marginRight: 10,
      }}></View>
  );
}
export function Circle2() {
  return (
    <View
      style={{
        width: 10,
        height: 10,
        backgroundColor: COLOURS.black,
        borderRadius: 70,
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        color: 'black',
        marginLeft: 150,
        marginTop: -10,
      }}></View>
  );
}
export function Circle3() {
  return (
    <View
      style={{
        width: 10,
        height: 10,
        backgroundColor: COLOURS.black,
        borderRadius: 70,
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        color: 'black',
        marginLeft: 254,
        marginTop: -10,
        marginRight: 0,
      }}></View>
  );
}
export function Circle4() {
  return (
    <View
      style={{
        width: 10,
        height: 10,
        backgroundColor: COLOURS.black,
        borderRadius: 70,
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        color: 'black',
        marginLeft: 365,
        marginTop: -10,
      }}></View>
  );
}
// import {chatbubble-ellipses-outline} from '@mdi/js';

const styles = StyleSheet.create({
  container: {
    // marginTop: '20%',
    // marginRight: '-20%',
  },
});
