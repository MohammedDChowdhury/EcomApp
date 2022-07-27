/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import COLOURS from '../../conts/colours';
import Circle from './Circle';

const Filters = props => {
  // // const [isBold, setIsBold] = useState('normal');
  // const [productIsActive, setProductIsActive] = useState(false); // sets colour
  // const [newestIsActive, setNewestIsActive] = useState(false); // sets colour
  // const [popularIsActive, setPopularIsActive] = useState(false); // sets colour
  // const [categoryIsActive, setCategoryIsActive] = useState(false); // sets colour

  // const productsOnPress = () => {
  //   // setProductIsActive(current => !current);
  //   props.setProdIsActive(current1 => !current1);
  // };
  // const newestOnPress = () => {
  //   // setNewestIsActive(current2 => !current2);
  //   props.setNewIsActive(current2 => !current2);
  //   // setProductIsActive()
  // };
  // const popularOnPress = () => {
  //   // setPopularIsActive(current3 => !current3);
  //   props.setProdIsActive(current3 => !current3);
  // };
  // const categoryOnPress = () => {
  //   // setCategoryIsActive(current4 => !current4);
  //   props.setProdIsActive(current4 => !current4);
  // };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.setProdIsActive(current1 => !current1)}>
        <Text
          style={{
            height: 25,
            fontSize: 15,
            fontWeight: 'bold',
            color: props.prodIsActive ? COLOURS.grey : COLOURS.black,
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
            color: props.newIsActive ? COLOURS.grey : COLOURS.black,
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
            color: props.popIsActive ? COLOURS.grey : COLOURS.black,
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
            color: props.categIsActive ? COLOURS.grey : COLOURS.black,
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
    flex: 1,
    justifyContent: 'space-around',
    paddingTop: 20,
    paddingBottom: 30,
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
