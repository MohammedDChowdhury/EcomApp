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
        <Text style={styles.textTitle}>Asus Official Store</Text>
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
    width: 68,
    height: 58,
    marginBottom: '1%',
    marginTop: '40%',

    marginLeft: '42%',

    // marginTop
    // paddingBottom: 10,
  },
  textTopSeller: {
    height: 23,
    fontSize: 12.5,
    width: '22%',
    backgroundColor: COLOURS.yellowHsl,
    // marginVertical: 20,
    paddingTop: 3,
    paddingLeft: 3,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 10,
    color: COLOURS.orange,
    borderColor: COLOURS.grey,
    borderRadius: 5,
    marginLeft: '39%',
    marginTop: '4%',
    marginBottom: -10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textTitle: {
    height: 25,
    fontSize: 17.5,
    width: '60%',
    color: COLOURS.black,
    marginTop: 20,
    marginLeft: '20%',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Header;
