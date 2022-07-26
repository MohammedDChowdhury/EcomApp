/* eslint-disable prettier/prettier */
import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {ChatButton, TurnOnButton} from '../components/Buttons';
import Filters from '../components/Filters';
import ProductBoxes from '../components/ProductBoxes';
import COLOURS from '../../conts/colours';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from 'react-native/Libraries/NewAppScreen';

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

      <Filters />
      {/* {productIsActive ? (
        ''
      ) : (
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
      )} */}

      <ProductBoxes />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    flex: 1,
    alignSelf: 'center',
    // justifyContent: 'center'
    backgroundColor: COLOURS.grey,
    // backgroundColor: '#ddd'
  },
  buttonsAdjustment: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '45.5%',
    marginLeft: '30%',
    marginBottom: '15%',
    marginRight: 125,
  },
  // filterAdjustment: {
  // flexDirection: 'row',
  // justifyContent: 'center',
  // marginTop: '2%',
  // backgroundColor: COLOURS.red,
  // flex: 1,
  // marginBottom: '30%',
  // marginRight: 125,
  // },
  // icon: {
  //   margin: 1,
  //   height: 50,
  //   width: 50,
  //   color: 'green',
  //   fontSize: 30,
  // },
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
