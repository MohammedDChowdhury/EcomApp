/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
// import {SmallButton, BigButton} from './src/views/components/Buttons';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from './src/views/screens/Home';
// const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View styles={styles.container}>
      <Text>App</Text>
      <Home />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: 52,
    // paddingHorizontal: 24,
  },
  // sectionTitle: {
  //   fontSize: 24,
  //   fontWeight: '600',
  // },
  // sectionDescription: {
  //   marginTop: 8,
  //   fontSize: 18,
  //   fontWeight: '400',
  // },
  // highlight: {
  //   fontWeight: '700',
  // },
});

export default App;
