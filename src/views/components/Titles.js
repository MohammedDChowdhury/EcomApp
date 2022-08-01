/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import COLOURS from '../../conts/colours';

const Titles = ({title, title2}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title2}>{title2}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {justifyContent: 'center'},
  title: {
    height: 25,
    fontSize: 20,
    width: '60%',
    color: COLOURS.black,
    marginLeft: 9,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title2: {
    fontSize: 13,
    fontWeight: 'bold',
    color: COLOURS.grey,
    marginLeft: 47,
    marginTop: 6,
  },
});

export default Titles;
