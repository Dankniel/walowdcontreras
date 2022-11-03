import React, {useRef, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Animated,
  Easing,
  translation,
  Text,
} from 'react-native';
import {styles} from './styles';
import {SvgUri} from 'react-native-svg';
import Testsvg from '../../assets/svg/vector.svg';
import CircleIndicator from '../CircleIndicator/CircleIndicator';
const BreathContainer = () => {
  const CircularAnim = useRef(new Animated.Value(0)).current;
  var inputRange = [0, 1];
  var outputRange = ['0deg', '360deg'];

  /*var inputRange = [0, 1];
  var outputRange = ['0deg', '360deg'];
  CircularAnim = Animated.interpolate({inputRange, outputRange});
  outputRange = ['0deg', '-360deg'];
  rotateOpposit = Animated.interpolate({inputRange, outputRange});*/

  const translation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    /*Animated.loop(
      Animated.timing(translation, {
        toValue: 1,
        duration: 12000,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ).start();*/
  }, []);

  /*const transform = [
    {rotate: translation.interpolate({inputRange, outputRange})},
  ];*/

  return (
    <>
      <View style={[styles.outerCircleContainer, styles.circleSkeleton]} />
      <View style={[styles.middleCircleContainer, styles.circleSkeleton]} />
      <View style={[styles.innerCircleContainer, styles.circleSkeleton]} />
      <Testsvg
        width={Dimensions.get('screen').height * 0.08}
        height={Dimensions.get('screen').height * 0.08}
        fill={'#0f1020'}
        style={{opacity: 0.8}}
        // rotation={5}
        //transform="translate(200, 200)"
      />
      <Animated.View
        style={{
          position: 'absolute',
          height: Dimensions.get('screen').height * 0.296,
          width: Dimensions.get('screen').height * 0.296,
          //backgroundColor: 'orange',
          borderWidth: 3,
          borderColor: 'transparent',
          opacity: 0.5,
          //padding: -10,
          borderRadius: 200,
          // borderRadius: 200,
          transform: [
            {translateX: translation},
            {
              rotate: translation.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg'],
              }),
            },
          ],
        }}>
        <Animated.View
          style={[
            styles.dot,
            {
              transform: [
                {translateX: translation},
                {
                  rotate: translation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '-360deg'],
                  }),
                },
              ],
            },
          ]}>
          <CircleIndicator />
        </Animated.View>
      </Animated.View>
    </>
  );
};

//const transform = [{rotate: this.rotate}];
//const transform1 = [{rotate: this.rotateOpposit}];
export default BreathContainer;

/*

      <View
        style={{
          // position: 'absolute',
          backgroundColor: 'red',
          height: 200,
          top: 0,
          marginBottom: 50,
        }}>
        <CircleIndicator />
      </View>
*/
