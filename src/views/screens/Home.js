/* eslint-disable prettier/prettier */
import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {ChatButton, TurnOnButton} from '../components/Buttons';
import Filters from '../components/Filters';
import ProductBoxes from '../components/ProductBoxes';
import COLOURS from '../../conts/colours';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import {mdiChatProcessing} from '@mdi/js';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerAdjustment}>
        <Header />
      </View>
      <View style={styles.buttonsAdjustment}>
        <TurnOnButton title={'Turn on'} />

        <ChatButton title={'Chat '} />
      </View>
      <Icon name={'chat-processing'} style={styles.icon} />
      <Filters />
      <ProductBoxes />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    flex: 1,
    marginLeft: '30%',
    backgroundColor: COLOURS.grey,
    // backgroundColor: '#ddd'
  },
  buttonsAdjustment: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 140,

    marginBottom: '30%',
    marginRight: 125,
  },
  icon: {
    margin: 1,
    height: 50,
    width: 50,
    color: 'green',
    fontSize: 30,
  },
  // textTopSeller: {
  //   color: COLOURS.black,
  //   fontWeight: 'bold',
  //   fontSize: 14,
  //   backgroundColor: COLOURS.orange,
  // },

  // headerAdjustment: {
  //   margin: 10,
  // },
});

export default Home;
