/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import COLOURS from '../../conts/colours';
import Circle from './Circle';

const Filters = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.setProdIsActive(current1 => !current1)}>
        <Text
          style={{
            height: 25,
            fontSize: 15,
            fontWeight: 'bold',
            color: props.prodIsActive ? COLOURS.black : COLOURS.grey,
          }}>
          Products
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.setNewIsActive(current2 => !current2)}>
        <Text
          style={{
            height: 25,
            fontSize: 15,
            marginLeft: 20,
            fontWeight: 'bold',
            color: props.newIsActive ? COLOURS.black : COLOURS.grey,
          }}>
          Newest
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.setPopIsActive(current3 => !current3)}>
        <Text
          style={{
            height: 25,
            fontSize: 15,
            marginLeft: 20,
            fontWeight: 'bold',
            color: props.popIsActive ? COLOURS.black : COLOURS.grey,
          }}>
          Popular
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.setCategIsActive(current4 => !current4)}>
        <Text
          style={{
            height: 25,
            fontSize: 15,
            marginLeft: 20,
            fontWeight: 'bold',
            color: props.categIsActive ? COLOURS.black : COLOURS.grey,
          }}>
          Category
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignContent: 'center',

    justifyContent: 'space-around',
    paddingTop: 20,

    marginBottom: 6,
    // backgroundColor: COLOURS.red,
    // paddingStart: 0,
    // paddingRight: 0,
  },
  // circle: {
  //   height: 40,
  //   width: 40,
  //   borderRadius: 30,
  //   overflow: 'hidden',
  // },
  // text1: {

  //   height: 25,
  //   fontSize: 15,
  //   // width: '60%',
  //   color: COLOURS.black,

  //   // marginTop: -40,
  //   // marginRight: -10,
  //   // fontWeight: `${bold}`
  //   // marginLeft: -100,
  //   // alignSelf: 'flex-start',
  // },

  // text2: {
  //   height: 25,
  //   fontSize: 15,
  //   // width: '60%',
  //   color: COLOURS.grey,
  //   marginLeft: 20,
  //   // marginTop: -40,
  //   // marginRight: -10,
  //   fontWeight: 'bold',
  //   // marginLeft: -100,
  //   // alignSelf: 'flex-start',
  // },
  // text3: {
  //   height: 25,
  //   fontSize: 15,
  //   // width: '60%',
  //   color: COLOURS.grey,
  //   marginLeft: 20,
  //   // marginTop: -40,
  //   // marginRight: -10,
  //   fontWeight: 'bold',
  //   // marginLeft: -100,
  //   // alignSelf: 'flex-start',
  // },
  // text4: {
  //   height: 25,
  //   fontSize: 15,
  //   // width: '60%',
  //   color: COLOURS.grey,
  //   marginLeft: 20,
  //   // marginTop: -40,
  //   // marginRight: -10,
  //   fontWeight: 'bold',
  //   // marginLeft: -100,
  //   // alignSelf: 'flex-start',
  // },
});

export default Filters;
