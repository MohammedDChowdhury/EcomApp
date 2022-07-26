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
        <Text> ProArt Studiobook </Text>
      </View>
      <View style={styles.box2}>
        <Image
          style={styles.bigImg}
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          }}
        />
        <Text> Zenbook Duo</Text>
      </View>
      <View style={styles.box3}>
        <Image
          style={styles.bigImg}
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          }}
        />
        <Text> Zenbook 13 OLED </Text>
      </View>
      <View style={styles.box4}>
        <Image
          style={styles.bigImg}
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          }}
        />
        <Text> Zenbook Pro Duo</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: '20%',
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
  box1: {
    backgroundColor: COLOURS.grey,
    flexBasis: '35%',
    marginBottom: 10,
    fontSize: '2.3vh',
  },
  box2: {
    backgroundColor: COLOURS.blue,
    flexBasis: '35%',
    marginBottom: 10,
    fontSize: '2.3vh',
  },
  box3: {
    backgroundColor: COLOURS.red,
    flexBasis: '35%',
    marginBottom: 10,
    fontSize: '2.3vh',
  },
  box4: {
    backgroundColor: COLOURS.yellow,
    flexBasis: '35%',
    marginBottom: 10,
    fontSize: '2.3vh',
  },
});

export default ProductBoxes;
