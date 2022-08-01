/* eslint-disable prettier/prettier */
import {View, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import {ChatButton, TurnOnButton, NavButton} from '../components/Buttons';
import Filters from '../components/Filters';
import ProductBoxes from '../components/ProductBoxes';
import COLOURS from '../../conts/colours';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Circle, Circle2, Circle3, Circle4} from '../components/Circle';

// import {mdiChatProcessing} from '@mdi/js';

const Home = ({Navigation}) => {
  const [prodIsActive, setProdIsActive] = useState(false); // sets colour
  const [newIsActive, setNewIsActive] = useState(false); // sets colour
  const [popIsActive, setPopIsActive] = useState(false); // sets colour
  const [categIsActive, setCategIsActive] = useState(false); // sets colour

  return (
    <View style={styles.container}>
      <View style={styles.headerAdjustment}>
        <Header title1={'Top Seller 🔥'} title2={'Asus Official Store'} />
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
    backgroundColor: COLOURS.white,
    // justifyContent: 'center'

    // color: COLOURS.red,
    // backgroundColor: '#ddd'
  },
  buttonsAdjustment: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '0%',
    marginLeft: '30%',

    marginRight: 125,
  },
  // navButtonAdjustment: {
  //   width: 10,
  // },

  headerAdjustment: {
    marginTop: 0,
  },
});

export default Home;
