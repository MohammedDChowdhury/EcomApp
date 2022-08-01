/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {AskSellerButton, NavButton2} from '../components/Buttons';
import COLOURS from '../../conts/colours';
import Titles from '../components/Titles';

const Product = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBtns}>
        <NavButton2 screenName="Home" />
        <AskSellerButton title={'Ask Seller  '} />
      </View>
      <Titles title={'ProArt Studiobook'} title2={'Type: Pro 17 W700'} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {backgroundColor: COLOURS.white, justifyContent: 'center'},
  topBtns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Product;
