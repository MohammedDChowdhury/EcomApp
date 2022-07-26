/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import COLOURS from '../../conts/colours';
const Circle = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 10,
          height: 10,
          backgroundColor: COLOURS.black,
          alignItems: 'flex-end',
          borderRadius: 70,
          borderWidth: 1,
          borderColor: 'black',
          borderStyle: 'solid',
          color: 'black',
        }}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: '20%',

    marginRight: '-20%',
  },
});

export default Circle;
