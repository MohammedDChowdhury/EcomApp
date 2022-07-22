/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import COLOURS from '../../conts/colours';

const Filters = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Products</Text>
      <Text style={styles.text2}>Newest</Text>
      <Text style={styles.text2}>Popular</Text>
      <Text style={styles.text2}>Category</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
    paddingTop: 40,
    // backgroundColor: '#ddd'
  },
  text1: {backgroundColor: COLOURS.black, paddingHorizontal: 10},
  text2: {backgroundColor: COLOURS.darkBlue, paddingHorizontal: 10},
});

export default Filters;
