import React, {useEffect, useRef, useState, useContext} from 'react';
import {
  Easing,
  TextInput,
  Animated,
  Text,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Svg, {G, Circle, Rect} from 'react-native-svg';
import CircleIndicator from '../CircleIndicator/CircleIndicator';
import ExhaleIndicator from '../ExhaleIndicator/ExhaleIndicator';
import {PlayingContext} from '../../screens/Home/index';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const CircularProgress = ({
  percentage = 100,
  radius = Dimensions.get('screen').height * 0.155,
  strokeWidth = 8,
  duration = 10000,
  color = '#0F1020',
  delay = 0,
  textColor,
  max = 100,
  handleExhaling,
  iterations = 6,
}) => {
  const [hideExhale, setHideExhale] = useState(false);
  const [currentLoop, setCurrentLoop] = useState(0);
  const [isPlaying, setIsPlaying] = useContext(PlayingContext);
  //const [isExhaling, setIsExhaling] = useContext(PlayingContext);
  // console.log(contxt);

  const animated = useRef(new Animated.Value(0)).current;
  const translation = useRef(new Animated.Value(0)).current;
  const circleRef = useRef();
  const inputRef = useRef();
  const circumference = 2 * Math.PI * radius;
  const halfCircle = radius + strokeWidth;

  const animation = toValue => {
    return Animated.timing(animated, {
      delay: 0,
      toValue,
      duration,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start(({finished}) => {
      /* completion callback */
      console.log('finish callback');
      //playingHandler();
    });
  };

  useEffect(() => {
    if (currentLoop >= iterations) {
      console.log('aqui');
      setIsPlaying(false);
      setCurrentLoop(0);
      setHideExhale(true);
    }
  }, [currentLoop]);

  useEffect(() => {
    console.log('currentLoop ', currentLoop, isPlaying);
    if (isPlaying && currentLoop < iterations) {
      setTimeout(() => {
        setHideExhale(true);
        // setIsExhaling(true);
      }, 4300);
      // setIsExhaling(false);
      Animated.timing(translation, {
        toValue: 1,
        delay: 0,
        duration: 10000,
        useNativeDriver: false,
        easing: Easing.linear,
      }).start(({finished}) => {
        /* completion callback */
        console.log('finish callback');
        translation.setValue(0);
        animated.setValue(0);
        setHideExhale(false);
        setCurrentLoop(currentLoop + 1);
        //playingHandler();
      });
      animation(percentage);
      animated.addListener(
        v => {
          const maxPerc = (100 * v.value) / max;
          const strokeDashoffset =
            circumference - (circumference * maxPerc) / 100;
          if (inputRef?.current) {
            inputRef.current.setNativeProps({
              text: `${Math.round(v.value)}`,
            });
          }
          if (circleRef?.current) {
            circleRef.current.setNativeProps({
              strokeDashoffset,
            });
          }
        },
        [max, percentage],
      );
    } else {
      translation.stopAnimation();
      animated.stopAnimation();
      translation.setValue(0);
      animated.setValue(0);

      setHideExhale(false);
    }
  }, [isPlaying, currentLoop]);

  return (
    <>
      <View
        style={{
          width: radius * 2,
          height: radius * 2,
          position: 'absolute',
          opacity: 0.4,
        }}>
        <Svg
          height={radius * 2}
          width={radius * 2}
          viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
          <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
            <Circle
              ref={circleRef}
              cx="50%"
              cy="50%"
              r={radius}
              fill="transparent"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDashoffset={circumference}
              strokeDasharray={circumference}
            />
            <Circle
              cx="50%"
              cy="50%"
              r={radius}
              fill="transparent"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinejoin="round"
              strokeOpacity=".1"
            />
          </G>
        </Svg>
      </View>
      <Animated.View
        style={{
          position: 'absolute',
          height: Dimensions.get('screen').height * 0.296,
          width: Dimensions.get('screen').height * 0.296,
          // backgroundColor: 'orange',
          borderWidth: 3,
          borderColor: 'transparent',
          opacity: 0.5,
          //padding: -10,
          //  borderRadius: 200,
          borderRadius: 200,
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
            {
              position: 'relative',
              alignItems: 'center',
              justifyContent: 'center',
            },
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
      {!hideExhale && isPlaying && (
        <View
          style={{
            position: 'absolute',
            backgroundColor: 'red',
            transform: [
              {translateX: Dimensions.get('screen').height * 0.05},
              {translateY: Dimensions.get('screen').height * 0.115},
              {rotate: '-20deg'},
            ],
          }}>
          <ExhaleIndicator />
        </View>
      )}
    </>
  );
};
export default CircularProgress;
