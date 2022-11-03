import React, {useRef, useEffect, useContext, useState} from 'react';
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
import ExhaleIndicator from '../ExhaleIndicator/ExhaleIndicator';
import Svg, {Circle, Path} from 'react-native-svg';
import CircularProgress from '../CircularProgress/CircularProgress';
import {PlayingContext} from '../../screens/Home/index';

const BreathContainer = ({selectedTime, ...props}) => {
  const [isPlaying, setIsPlaying] = useContext(PlayingContext);
  const [isExhaling, setIsExhaling] = useState(false);
  const [breatheValues, setBreatheValues] = useState(1.5);
  /*var inputRange = [0, 1];
  var outputRange = ['0deg', '360deg'];
  CircularAnim = Animated.interpolate({inputRange, outputRange});
  outputRange = ['0deg', '-360deg'];
  rotateOpposit = Animated.interpolate({inputRange, outputRange});*/

  const breatheAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    if (isPlaying) {
      // breatheAnim.setValue(0);
      Animated.timing(breatheAnim, {
        delay: 500,
        toValue: isExhaling ? -1 : 1,
        duration: isExhaling ? 5000 : 4000,
        useNativeDriver: false,
      }).start(({finished}) => {
        /* completion callback */
        if (isExhaling) {
          setIsExhaling(false);
        }

        //playingHandler();
      });

      setTimeout(() => {
        setIsExhaling(true);
        // setBreatheValues(0.5);
      }, 4300);
    } else {
      breatheAnim.setValue(0);
    }
  }, [isPlaying, isExhaling]);

  const handleExhaling = () => {
    console.log('handleExhaling ssssssssssss');
    setIsExhaling(!isExhaling);
  };

  const translation = useRef(new Animated.Value(0)).current;
  const exhalePoint = useRef(new Animated.Value(0.5)).current;
  const progress = useRef(new Animated.Value(0)).current;

  return (
    <>
      <View style={[styles.outerCircleContainer, styles.circleSkeleton]} />
      <View style={[styles.middleCircleContainer, styles.circleSkeleton]} />
      <View style={[styles.innerCircleContainer, styles.circleSkeleton]} />

      {isPlaying ? (
        <Animated.Image
          source={require('../../assets/png/wallow.png')}
          //resizeMode="strecth"
          style={{
            resizeMode: 'contain',
            position: 'absolute',
            //  height: Dimensions.get('screen').height * 0.08,
            //  width: Dimensions.get('screen').height * 0.08,
            transform: [
              {
                scaleX: breatheAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, breatheValues],
                }),
              },
              {
                scaleY: breatheAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, breatheValues],
                }),
              },
            ],
          }}
        />
      ) : (
        <Testsvg
          width={Dimensions.get('screen').height * 0.08}
          height={Dimensions.get('screen').height * 0.08}
          fill={isPlaying ? 'white' : '#0f1020'}
          style={{opacity: isPlaying ? 1 : 0.8}}></Testsvg>
      )}

      <CircularProgress
        iterations={(selectedTime.indexOf(selectedTime.find(t => t)) + 1) * 6}
        //handleExhaling={status => handleExhaling(status)}
      />
    </>
  );
};

/*

      <Testsvg
        width={Dimensions.get('screen').height * 0.08}
        height={Dimensions.get('screen').height * 0.08}
        fill={isPlaying ? 'white' : '#0f1020'}
        style={{opacity: isPlaying ? 1 : 0.8}}></Testsvg>
*/
//const transform = [{rotate: this.rotate}];
//const transform1 = [{rotate: this.rotateOpposit}];

/*
      <Animated.View
        style={{
          position: 'absolute',
          height: Dimensions.get('screen').height * 0.296,
          width: Dimensions.get('screen').height * 0.296,
          backgroundColor: 'green',
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
          ]}></Animated.View>
        <View
          style={[
            {
              //position: 'absolute',
              transform: [
                {rotateZ: '-30deg'},
                {translateY: 215},
                {translateX: 80},
              ],
              //right: 0,
              // top: '50%',
            },
          ]}></View>
      </Animated.View>
*/

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
