/* eslint-disable prettier/prettier */
import {View, StyleSheet, Image, Text} from 'react-native';

import React, {useState} from 'react';

import {
  AddToCartButton,
  AskSellerButton,
  LinkButton,
  MoreButton,
  NavButton2,
} from '../components/Buttons';
import COLOURS from '../../conts/colours';
import Titles from '../components/Titles';
import DescFilter from '../components/DescFilter';
import {
  CircleOverview,
  CircleReview,
  CircleSpecification,
} from '../components/Circle';

const Product = () => {
  const [overviewIsActive, setOverviewIsActive] = useState(false); // sets colour
  const [specificationIsActive, setSpecificationIsActive] = useState(false); // sets colour
  const [reviewIsActive, setReviewIsActive] = useState(false); // sets colour

  return (
    <View style={styles.container}>
      <View style={styles.topBtns}>
        <NavButton2 screenName="Home" />
        <AskSellerButton title={'Ask Seller  '} />
      </View>
      <Titles title={'ProArt Studiobook'} title2={'Type: Pro 17 W700'} />
      <View style={styles.imgLayout}>
        <View>
          <Image
            style={styles.largeImg}
            source={require('E:/React-Native/EcomApp/assets/pro-art-studiobook.png')}
          />
          <View style={styles.smallContainer}>
            <Image
              style={styles.smallImg}
              source={require('E:/React-Native/EcomApp/assets/pro-art-studiobook.png')}
            />
            <Image
              style={styles.smallImg}
              source={require('E:/React-Native/EcomApp/assets/pro-art-studiobook.png')}
            />
            <Image
              style={styles.smallImg}
              source={require('E:/React-Native/EcomApp/assets/pro-art-studiobook.png')}
            />
          </View>
        </View>
        <View>
          <LinkButton title1={'Asus Official Store'} title2={'view store'} />
        </View>
        <View>
          <DescFilter
            overviewIsActive={overviewIsActive}
            setOverviewIsActive={setOverviewIsActive}
            specificationIsActive={specificationIsActive}
            setSpecificationIsActive={setSpecificationIsActive}
            reviewIsActive={reviewIsActive}
            setReviewIsActive={setReviewIsActive}
          />
          {overviewIsActive ? <CircleOverview /> : ''}
          {specificationIsActive ? <CircleSpecification /> : ''}
          {reviewIsActive ? <CircleReview /> : ''}
        </View>

        <Text style={styles.text}>
          The ProArt StudioBook Pro 17 is one of the world's thinnest laptops
          featuring NVIDIA Quadro grap...
        </Text>
        <MoreButton />
        <View style={styles.priceAndCart}>
          <View style={styles.priceContainer}>
            <Text style={styles.textPriceTitle}>Price</Text>
            <Text style={styles.price}>$2338,1 </Text>
          </View>
          <AddToCartButton title={'Add to Cart'} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {backgroundColor: COLOURS.white, justifyContent: 'center'},
  topBtns: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  smallContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: -20,
  },
  largeImg: {
    width: 270,
    height: 270,
    marginBottom: '0%',
    marginTop: '0%',
    borderColor: COLOURS.red,
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

  text: {
    fontSize: 14.5,
    fontWeight: 'bold',
    color: COLOURS.grey,
    marginLeft: '7%',
    marginTop: 15,
  },
  textPriceTitle: {
    fontSize: 14.5,
    fontWeight: 'bold',
    color: COLOURS.grey,
    marginLeft: '7%',
    marginTop: 20,
  },
  price: {
    height: 25,
    fontSize: 20,
    width: '100%',
    color: COLOURS.black,
    marginLeft: '7%',
    fontWeight: 'bold',
  },
  priceAndCart: {
    flexDirection: 'row',
    width: '100%',

    justifyContent: 'space-around',
  },
});

export default Product;
