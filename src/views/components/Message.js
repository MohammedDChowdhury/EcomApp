/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {MeMessage, OtherUserMessage} from './MessageStyles';
import COLOURS from '../../conts/colours';

const Message = () => {
  return (
    <View style={styles.container}>
      <MeMessage
        title={
          'Hi mimin, is this laptop still have a stock? I wanna buy it 100 pcs'
        }
      />
      <OtherUserMessage title={"Yes, it's still ready 200 pieces"} />
      <MeMessage title={'Oh ya I see, so I buy 200 then. Thanks min:*'} />
      <MeMessage title={'Gimme bonus, ok?'} />

      <OtherUserMessage title={'Ok syg:*'} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: '2%',
    justifyContent: 'space-around',

    width: '100%',
    height: '55%',
  },
});

export default Message;
