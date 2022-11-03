import React from 'react';
import {View, StyleSheet} from 'react-native';
import {styles} from './styles';
const CircleIndicator = () => {
  return (
    <>
      <View style={[styles.circleStyle, {height: 24, width: 24}]} />
      <View style={[styles.circleStyle, {height: 20, width: 20}]} />
      <View style={[styles.circleStyle, {height: 10, width: 10, opacity: 1}]} />
    </>
  );
};

export default CircleIndicator;
