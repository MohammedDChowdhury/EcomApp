/* eslint-disable prettier/prettier */
import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import COLOURS from '../../conts/colours';

export function LargeImage() {
  return (
    <View>
      <Image
        style={styles.largeImg}
        source={require('E:/React-Native/EcomApp/assets/pro-art-studiobook.png')}
      />
    </View>
  );
}
export function SmallImage() {
  return (
    <View style={styles.smallContainer}>
      <Image
        style={styles.smallImg}
        source={require('E:React-NativeEcomAppassetspro-art-studiobook-side.png')}
      />
      <Image
        style={styles.smallImg}
        source={require('E:React-NativeEcomAppassetspro-art-studiobook-side.png')}
      />
      <Image
        style={styles.smallImg}
        source={require('E:/React-Native/EcomApp/assets/pro-art-studiobook.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  smallContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  largeImg: {
    width: 270,
    height: 270,
    marginBottom: '0%',
    marginTop: '0%',

    alignSelf: 'center',

    // marginTop
    // paddingBottom: 10,
  },
  smallImg: {
    width: 58,
    height: 48,

    padding: 25,
    marginLeft: '3%',
    backgroundColor: COLOURS.lightGreyHsl,
    borderRadius: 8,
    // marginTop
    // paddingBottom: 10,
  },
});
