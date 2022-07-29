/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
// import {SmallButton, BigButton} from './src/views/components/Buttons';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from './src/views/screens/Home';
import Product from './src/views/screens/Product';
import Chat from './src/views/screens/Chat';
import ProductBoxes from './src/views/components/ProductBoxes';
// const Stack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    // <View styles={styles.container}>
    //   <Home />
    // </View>
    <NavigationContainer>
      <>
        <Stack.Navigator
          initialRouteName={Home}
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />

          <Stack.Screen name="Product" component={Product} />
          <Stack.Screen name="Chat" component={Chat} />
        </Stack.Navigator>
      </>
    </NavigationContainer>
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
