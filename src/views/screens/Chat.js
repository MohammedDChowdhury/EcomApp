/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import ChatHeader from '../components/ChatHeader';
import COLOURS from '../../conts/colours';
import {ProductButton, SendMessageButton} from '../components/Buttons';
import Message from '../components/Message';
import Input from '../components/Input';
const Chat = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <ChatHeader
          screenName="Product"
          title={'Asus Official Store'}
          active={'Active 5 hours ago'}
        />
      </View>

      <Text style={styles.dateText}>Today</Text>

      <ProductButton
        title1={'ProArt Studiobook 17'}
        title2={'Type: Pro 17 W700'}
      />
      <Message />
      <Input inputText={'Type something...'} />
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
    backgroundColor: COLOURS.lightGreyHsl,
  },
  headerContainer: {
    width: '100%',
    height: '15%',
    backgroundColor: COLOURS.white,
  },
  dateText: {
    marginTop: 8,
    alignSelf: 'center',
    backgroundColor: COLOURS.white,
    borderRadius: 8,
    fontWeight: 'bold',
    fontSize: 12.5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 4,
    paddingTop: 4,
  },
});
export default Chat;
