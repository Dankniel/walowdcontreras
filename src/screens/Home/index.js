import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaview,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import CircleIndicator from '../../Components/CircleIndicator/CircleIndicator';
import GradientBackground from '../../Components/GradientBackground/GradientBackground';
import BreathContainer from '../../Components/BreathContainer/BreathContainer';
import PlayButton from '../../Components/PlayButton/PlayButton';
import TimeOptionButton from '../../Components/TimeOptionButton/TimeOptionButton';

const Home = () => {
  return (
    <GradientBackground>
      <SafeAreaView
        style={{
          flex: 1, //backgrolor: 'red',
        }}>
        <View
          style={{
            flex: 1, //backgrolor: 'red',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <BreathContainer />
        </View>
        <View>
          <PlayButton />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <TimeOptionButton selected={true} text={'1 min'} />
            <TimeOptionButton selected={false} text={'2 min'} />
            <TimeOptionButton selected={false} text={'3 min'} />
          </View>
        </View>
      </SafeAreaView>
    </GradientBackground>
  );
};

export default Home;
