/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import COLOURS from '../../conts/colours';

import {NavButton} from './Buttons';

const ProductBoxes = () => {
  const onPress = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Image
          style={styles.logo}
          source={require('E:/React-Native/EcomApp/assets/pro-art-studiobook.png')}
        />
        <View style={styles.smallBox}>
          <Text style={styles.text}> ProArt Studiobook </Text>
          <Text style={styles.smallText}> Asus</Text>
          <View style={styles.smallContainer}>
            <Text style={styles.largeText}> $2338,1 </Text>

            <NavButton screenName="Product" />
          </View>
        </View>
      </View>

      <View style={styles.box2}>
        <Image
          style={styles.logo}
          source={require('E:/React-Native/EcomApp/assets/zenbook-duo.png')}
        />
        <View style={styles.smallBox}>
          <Text style={styles.text}> Zenbook Duo</Text>
          <Text style={styles.smallText}> Asus</Text>
          <View style={styles.smallContainer}>
            <Text style={styles.largeText}> $1272,2 </Text>
            <NavButton screenName="Product" />
          </View>
        </View>
      </View>
      <View style={styles.box3}>
        <Image
          style={styles.logo}
          source={require('E:/React-Native/EcomApp/assets/zenbook-13-oled.png')}
        />
        <View style={styles.smallBox}>
          <Text style={styles.text}> Zenbook 13 OLED </Text>
          <Text style={styles.smallText}> Asus</Text>
          <View style={styles.smallContainer}>
            <Text style={styles.largeText}> $3096,97 </Text>
            <NavButton screenName="Product" />
          </View>
        </View>
      </View>
      <View style={styles.box4}>
        <Image
          style={styles.logo}
          source={require('E:/React-Native/EcomApp/assets/zenbook-pro-duo.png')}
        />
        <View style={styles.smallBox}>
          <Text style={styles.text}> Zenbook Pro Duo</Text>
          <Text style={styles.smallText}> Asus</Text>
          <View style={styles.smallContainer}>
            <Text style={styles.largeText}> $3096,97 </Text>
            <NavButton screenName="Product" />
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
    flexWrap: 'wrap',
    width: '100%',
    alignContent: 'center',
    paddingTop: 40,
    marginBottom: '17%',

    // backgroundColor: '#ddd'
  },
  smallContainer: {
    flexDirection: 'row',
    overflow: 'hidden',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 13,
    fontWeight: 'bold',
    color: COLOURS.black,
    marginLeft: 3,
    marginTop: 6,

    // fontFamily: 'calibri',
  },
  smallText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COLOURS.grey,
    marginLeft: 3,

    // fontFamily: 'calibri',
  },
  largeText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: COLOURS.black,
    marginTop: 6.5,
    marginLeft: 3,
    marginRight: 0,

    // fontFamily: 'calibri',
  },
  largeText2: {
    fontSize: 13,
    fontWeight: 'bold',
    color: COLOURS.black,
    marginTop: 4,
    marginLeft: 3,

    // fontFamily: 'calibri',
  },
  image: {
    width: 10,
    height: 10,
    // marginTop: 3,
  },
  tinyImg: {
    width: 50,
    height: 50,
  },
  bigImg: {
    width: 30,
    height: 30,
  },
  box1: {
    backgroundColor: COLOURS.lightGreyHsl,
    // flexBasis: '35%',
    // marginBottom: 10,
    // fontSize: '2.3vh',
    width: '38%',
    height: 210,
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: '5%',
    marginLeft: 15,
  },
  box2: {
    backgroundColor: COLOURS.lightGreyHsl,
    // flexBasis: '35%',
    // marginBottom: 10,
    // fontSize: '2.3vh',
    width: '38%',
    height: 210,
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: '5%',
    marginRight: 15,
  },

  box3: {
    backgroundColor: COLOURS.lightGreyHsl,
    width: '38%',
    height: 210,
    alignItems: 'center',
    borderRadius: 8,
    marginLeft: 15,
  },
  box4: {
    backgroundColor: COLOURS.lightGreyHsl,
    width: '38%',
    height: 210,
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 15,
  },
  smallBox: {
    marginTop: 9,
    backgroundColor: COLOURS.white,
    width: '92%',
    borderColor: COLOURS.red,
    borderRadius: 8,
    flex: 1,
    // height: 'default',
    marginBottom: 7,

    // marginLeft: 9,
  },

  logo: {
    width: 130,
    height: 90,

    marginTop: '15%',
    marginBottom: '5%',
    marginRight: '40%',
    marginLeft: '42%',

    // marginTop
    // paddingBottom: 10,
  },
});

export default ProductBoxes;
