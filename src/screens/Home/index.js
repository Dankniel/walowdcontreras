import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaview} from 'react-native';
import CircleIndicator from '../../Components/CircleIndicator/CircleIndicator';
import GradientBackground from '../../Components/GradientBackground/GradientBackground';
import BreathContainer from '../../Components/BreathContainer/BreathContainer';

const Home = () => {
  return (
    <GradientBackground>
      <View
        style={{
          flex: 1, //backgrolor: 'red',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <BreathContainer />
      </View>
    </GradientBackground>
  );
};

export default Home;
