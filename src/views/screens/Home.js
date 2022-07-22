/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {SmallButton} from '../components/Buttons';
import Filters from '../components/Filters';
import ProductBoxes from '../components/ProductBoxes';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <SmallButton>Turn on{/* icon*/}</SmallButton>
      <SmallButton>Chat {/* icon*/}</SmallButton>
      <Filters />
      <ProductBoxes />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    flex: 1,
    paddingTop: 40,
    // backgroundColor: '#ddd'
  },
});

export default Home;
