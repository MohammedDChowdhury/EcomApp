/* eslint-disable prettier/prettier */

import React from 'react';
import {StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import COLOURS from '../../conts/colours';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

// import {chatbubble-ellipses-outline} from '@mdi/js';
export function SmallButton({title, onPress = () => {}}) {
  return (
    <TouchableOpacity
      style={styles.small}
      onPress={onPress}
      activeOpacity={0.7}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
export function TurnOnButton({title, onPress = () => {}}) {
  return (
    <TouchableOpacity
      style={styles.turnOn}
      onPress={onPress}
      activeOpacity={0.7}>
      <Text style={styles.TurnOnText}>
        {title} <Icon name={'bell-outline'} style={styles.turnOnIcon} />
      </Text>
    </TouchableOpacity>
  );
}
export function ChatButton({title, onPress = () => {}}) {
  return (
    <TouchableOpacity style={styles.chat} onPress={onPress} activeOpacity={0.7}>
      <Text style={styles.chatText}>
        {title}
        <Icon name={'chat-processing-outline'} style={styles.chatIcon} />
      </Text>
    </TouchableOpacity>
  );
}
export function AskSellerButton({title, onPress = () => {}}) {
  return (
    <TouchableOpacity
      style={styles.askSeller}
      onPress={onPress}
      activeOpacity={0.7}>
      <Text style={styles.chatText}>
        {title}
        <Icon name={'chat-processing-outline'} style={styles.chatIcon} />
      </Text>
    </TouchableOpacity>
  );
}
export function LinkButton({title1, title2, onPress = () => {}}) {
  return (
    <TouchableOpacity
      style={styles.linkButton}
      onPress={onPress}
      activeOpacity={0.7}>
      <Image
        style={styles.logo}
        source={require('E:/React-Native/EcomApp/assets/asus-logo-img.png')}
      />
      <Text style={styles.textContainer}>
        <Text style={styles.linkText}>{title1} </Text>
        <Text style={styles.smallText}>{title2}</Text>
      </Text>

      <Icon name={'arrow-right'} style={styles.arrowIcon3} />
    </TouchableOpacity>
  );
}
export function MoreButton({onPress = () => {}}) {
  return (
    <TouchableOpacity
      style={styles.moreButton}
      onPress={onPress}
      activeOpacity={0.7}>
      <Icon name={'arrow-down-thin'} style={styles.downIcon} />
    </TouchableOpacity>
  );
}
export function AddToCartButton({title, onPress = () => {}}) {
  return (
    <TouchableOpacity
      style={styles.addToCart}
      onPress={onPress}
      activeOpacity={0.7}>
      <Text style={styles.TurnOnText}>{title}</Text>
    </TouchableOpacity>
  );
}
export function NavButton({screenName}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.small}
      onPress={() => navigation.navigate(screenName)}
      activeOpacity={0.7}>
      <Icon name={'arrow-right'} style={styles.arrowIcon} />
    </TouchableOpacity>
  );
}
export function NavButton2({screenName}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.small}
      onPress={() => navigation.navigate(screenName)}
      activeOpacity={0.7}>
      <Icon name={'arrow-left'} style={styles.arrowIcon2} />
    </TouchableOpacity>
  );
}

export function BigButton({title, onPress = () => {}}) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.7}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {padding: '20 40'},
  big: {
    height: 55,
    width: '100%',
    backgroundColor: COLOURS.darkBlue,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    borderRadius: 50,
  },
  small: {
    justifyContent: 'flex-start',
  },
  arrowIcon: {
    opacity: 10,
    padding: 2,
    width: '70%',
    borderColor: COLOURS.black,
    backgroundColor: COLOURS.lightGreyHsl,
    borderRadius: 5,
    marginRight: 13,
    fontSize: 20,
    color: COLOURS.pink,
  },
  arrowIcon2: {
    opacity: 10,
    padding: 2,
    width: '90%',
    marginTop: 15,
    borderColor: COLOURS.black,
    marginLeft: 15,
    borderRadius: 5,

    fontSize: 25,
    color: COLOURS.black,
  },
  arrowIcon3: {
    opacity: 10,
    padding: 2,
    marginLeft: '25%',
    marginRight: '5%',
    marginTop: '4%',
    borderColor: COLOURS.black,
    backgroundColor: COLOURS.white,
    borderRadius: 5,
    height: 28,
    fontSize: 20,
    color: COLOURS.pink,
  },
  downIcon: {
    opacity: 10,
    padding: 2,
    alignSelf: 'center',
    borderColor: COLOURS.black,
    backgroundColor: COLOURS.white,
    borderRadius: 5,
    height: 28,
    fontSize: 30,
    color: COLOURS.grey,
    marginTop: 3,
  },
  turnOn: {
    height: 29.5,
    width: '47.5%',
    backgroundColor: COLOURS.darkBlue,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 10,
    padding: 1,
    borderColor: COLOURS.darkBlue,
    borderRadius: 5,
    marginLeft: 10,
    marginTop: 20,
  },
  chat: {
    height: 29,
    width: '45%',
    backgroundColor: COLOURS.lightGreyHsl,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 10,
    padding: 1,
    borderColor: COLOURS.grey,
    borderRadius: 5,
    marginLeft: 10,
    marginTop: 20,
  },
  askSeller: {
    height: 29,
    width: '25%',
    backgroundColor: COLOURS.lightGreyHsl,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 10,
    padding: 1,
    borderColor: COLOURS.grey,
    borderRadius: 5,
    marginRight: 15,
  },
  linkButton: {
    flexDirection: 'row',
    height: 60,

    flexWrap: 'wrap',
    width: '75%',
    backgroundColor: COLOURS.lightGreyHsl,
    marginTop: 40,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 10,

    borderColor: COLOURS.grey,
    borderRadius: 10,
  },
  moreButton: {},
  text: {
    color: COLOURS.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
  linkText: {
    color: COLOURS.black,
    fontWeight: 'bold',
    fontSize: 14,
    opacity: 0.8,
  },
  smallText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COLOURS.grey,

    // fontFamily: 'calibri',
  },
  TurnOnText: {
    color: COLOURS.white,
    fontWeight: 'bold',
    fontSize: 13,
    opacity: 0.8,
  },
  chatText: {
    color: COLOURS.darkBlue,
    fontWeight: 'bold',
    fontSize: 13,
    opacity: 0.8,
  },
  chatIcon: {
    margin: 1,
    height: 50,
    width: 50,

    fontSize: 18,
  },
  turnOnIcon: {
    margin: 1,
    height: 50,
    width: 50,

    fontSize: 15,
  },
  logo: {
    width: '19.5%',
    height: 52,
    borderRadius: 10,
  },
  addToCart: {
    height: '32%',
    width: '47.5%',
    backgroundColor: COLOURS.darkBlue,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 10,
    padding: 1,
    borderColor: COLOURS.darkBlue,
    borderRadius: 10,

    marginTop: 20,
  },
  textContainer: {
    flexDirection: 'column',

    marginLeft: 7,

    flex: 1,
  },
});
