/* eslint-disable prettier/prettier */
import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import COLOURS from '../../conts/colours';
import {ChatButton} from './Buttons';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('E:/React-Native/EcomApp/assets/asus-logo-img.png')}
      />
      <View>
        <Text style={styles.textTopSeller}>Top Seller 🔥</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // width: '65%',

    // marginLeft: 'auto',
    // marginRight: 'auto',
    justifyContent: 'center',
    backgroundColor: COLOURS.red,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
    marginBottom: 10,
    marginTop: 130,

    marginLeft: 50,

    // marginTop
    // paddingBottom: 10,
  },
  textTopSeller: {
    height: 25,
    fontSize: 12.5,
    width: '30%',
    backgroundColor: COLOURS.yellow,
    marginVertical: 20,
    paddingTop: 3,
    paddingLeft: 3,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 10,
    color: COLOURS.orange,
    borderColor: COLOURS.grey,
    borderRadius: 5,
    marginLeft: 40,
    marginTop: 20,
    marginBottom: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Header;
