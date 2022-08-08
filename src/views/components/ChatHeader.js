/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import COLOURS from '../../conts/colours';
import {NavButton2} from './Buttons';
const ChatHeader = ({title, active}) => {
  return (
    <View style={styles.container}>
      <View style={styles.navButtonAdjustment}>
        <NavButton2 screenName="Product" />
      </View>

      <Image
        style={styles.logo}
        source={require('E:/React-Native/EcomApp/assets/asusCircleIcon.png')}
      />

      <View style={styles.textAdjustment}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.active}>{active}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    flex: 1,

    backgroundColor: COLOURS.white,
  },
  navButtonAdjustment: {
    marginTop: '11%',

    height: '50%',
    width: '12%',
    marginLeft: '4%',
    marginRight: '10%',
  },
  textAdjustment: {
    marginTop: '13%',

    height: '50%',
    width: '40%',
    marginLeft: '1%',
    marginRight: '20%',
  },
  title: {
    height: 25,
    fontSize: 14.5,
    width: '100%',
    color: COLOURS.black,

    fontWeight: 'bold',
  },
  active: {
    fontWeight: 'bold',
    color: COLOURS.grey,
    fontSize: 13,
  },
  logo: {
    width: '20%',
    height: '60%',
    marginLeft: '-13%',
    marginTop: '9%',
  },
});
export default ChatHeader;
