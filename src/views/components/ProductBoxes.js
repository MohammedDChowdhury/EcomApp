/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import COLOURS from '../../conts/colours';

const ProductBoxes = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Image
          style={styles.bigImg}
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          }}
        />
        {/*laptop img*/}ProArt Studiobook
      </View>
      <View style={styles.box2}>
        {' '}
        <Image
          style={styles.bigImg}
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          }}
        />
        Zenbook Duo
      </View>
      <View style={styles.box3}>
        {' '}
        <Image
          style={styles.bigImg}
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          }}
        />
        Zenbook 13 OLED
      </View>
      <View style={styles.box4}>
        {' '}
        <Image
          style={styles.bigImg}
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          }}
        />
        Zenbook Pro Duo
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%',
    flexWrap: 'wrap',
    alignContent: 'center',
    paddingTop: 40,
    backgroundColor: COLOURS.white,
    // backgroundColor: '#ddd'
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
  box1: {backgroundColor: COLOURS.grey, paddingRight: 10},
  box2: {backgroundColor: COLOURS.grey, paddingRight: 10},
  box3: {backgroundColor: COLOURS.grey, paddingRight: 10},
  box4: {backgroundColor: COLOURS.grey, paddingRight: 10},
});

export default ProductBoxes;
