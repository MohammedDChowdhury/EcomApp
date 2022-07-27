/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import COLOURS from '../../conts/colours';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const ProductBoxes = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Image
          style={styles.logo}
          source={require('E:/React-Native/EcomApp/assets/asus-logo-img.png')}
        />
        <View style={styles.smallBox}>
          <Text style={styles.text}> ProArt Studiobook </Text>
          <Text style={styles.smallText}> Asus</Text>
          <Text style={styles.largeText}> $2338,1 </Text>
        </View>
      </View>
      <View style={styles.box2}>
        <Image
          style={styles.logo}
          source={require('E:/React-Native/EcomApp/assets/asus-logo-img.png')}
        />
        <View style={styles.smallBox}>
          <Text style={styles.text}> Zenbook Duo</Text>
        </View>
      </View>
      <View style={styles.box3}>
        <Image
          style={styles.logo}
          source={require('E:/React-Native/EcomApp/assets/asus-logo-img.png')}
        />
        <View style={styles.smallBox}>
          <Text style={styles.text}> Zenbook 13 OLED </Text>
        </View>
      </View>
      <View style={styles.box4}>
        <Image
          style={styles.logo}
          source={require('E:/React-Native/EcomApp/assets/asus-logo-img.png')}
        />
        <View style={styles.smallBox}>
          <Text style={styles.text}> Zenbook Pro Duo</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: '49%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
    flexWrap: 'wrap',
    width: '100%',
    alignContent: 'center',
    paddingTop: 40,

    // backgroundColor: '#ddd'
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
    marginTop: 8,
    marginLeft: 3,

    // fontFamily: 'calibri',
  },
  image: {
    width: 10,
    height: 10,
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
  },

  box3: {
    backgroundColor: COLOURS.lightGreyHsl,
    width: '38%',
    height: 200,
    alignItems: 'center',
    borderRadius: 8,
  },
  box4: {
    backgroundColor: COLOURS.lightGreyHsl,
    width: '38%',
    height: 200,
    alignItems: 'center',
    borderRadius: 8,
  },
  smallBox: {
    marginTop: 10,
    backgroundColor: COLOURS.white,
    width: '92%',
    borderColor: COLOURS.red,
    borderRadius: 8,
    flex: 1,
    // height: 'default',
    marginBottom: 6,

    // marginLeft: 9,
  },
});

export default ProductBoxes;
