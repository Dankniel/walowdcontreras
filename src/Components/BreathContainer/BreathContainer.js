import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {styles} from './styles';
import {SvgUri} from 'react-native-svg';
import Testsvg from '../../assets/svg/vector.svg';
const BreathContainer = () => {
  return (
    <>
      <View style={[styles.outerCircleContainer, styles.circleSkeleton]} />
      <View style={[styles.middleCircleContainer, styles.circleSkeleton]} />
      <View style={[styles.innerCircleContainer, styles.circleSkeleton]} />
      <Testsvg width={93} height={83} fill={'#0f1020'} style={{opacity: 0.8}} />
    </>
  );
};

export default BreathContainer;
