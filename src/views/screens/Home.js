/* eslint-disable prettier/prettier */
import {View, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import {ChatButton, TurnOnButton} from '../components/Buttons';
import Filters from '../components/Filters';
import ProductBoxes from '../components/ProductBoxes';
import COLOURS from '../../conts/colours';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Circle, Circle2, Circle3, Circle4} from '../components/Circle';

// import {mdiChatProcessing} from '@mdi/js';

const Home = () => {
  const [prodIsActive, setProdIsActive] = useState(false); // sets colour
  const [newIsActive, setNewIsActive] = useState(false); // sets colour
  const [popIsActive, setPopIsActive] = useState(false); // sets colour
  const [categIsActive, setCategIsActive] = useState(false); // sets colour

  return (
    <View style={styles.container}>
      <View style={styles.headerAdjustment}>
        <Header />
      </View>
      <View style={styles.buttonsAdjustment}>
        <TurnOnButton title={'Turn on'} />

        <ChatButton title={'Chat '} />
      </View>

      <Filters
        prodIsActive={prodIsActive}
        setProdIsActive={setProdIsActive}
        newIsActive={newIsActive}
        setNewIsActive={setNewIsActive}
        popIsActive={popIsActive}
        setPopIsActive={setPopIsActive}
        categIsActive={categIsActive}
        setCategIsActive={setCategIsActive}
      />
      {prodIsActive ? <Circle /> : ''}
      {newIsActive ? <Circle2 /> : ''}
      {popIsActive ? <Circle3 /> : ''}
      {categIsActive ? <Circle4 /> : ''}

      <ProductBoxes />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignContent: 'center',
    flex: 1,
    alignSelf: 'center',
    // justifyContent: 'center'
    backgroundColor: COLOURS.grey,

    // color: COLOURS.red,
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
