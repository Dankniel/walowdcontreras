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
  const [selectedTime, setSelectedTime] = useState([false, false, false]);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSelectTime = optionIndex => {
    setSelectedTime(
      selectedTime.map((t, index) => (index === optionIndex ? true : false)),
    );
  };

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
          <BreathContainer isPlaying={isPlaying} />
        </View>
        <View>
          <PlayButton
            isPlaying={isPlaying}
            onPress={() => setIsPlaying(!isPlaying)}
            disabled={selectedTime.every(t => t === false)}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <TimeOptionButton
              selected={selectedTime[0]}
              text={'1 min'}
              onPress={optionIndex => handleSelectTime(optionIndex)}
              index={0}
            />
            <TimeOptionButton
              selected={selectedTime[1]}
              text={'2 min'}
              onPress={optionIndex => handleSelectTime(optionIndex)}
              index={1}
            />
            <TimeOptionButton
              selected={selectedTime[2]}
              text={'3 min'}
              onPress={optionIndex => handleSelectTime(optionIndex)}
              index={2}
            />
          </View>
        </View>
      </SafeAreaView>
    </GradientBackground>
  );
};

export default Home;
