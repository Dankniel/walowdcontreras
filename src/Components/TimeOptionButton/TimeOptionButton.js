import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import {styles} from './styles.js';
const TimeOptionButton = ({text, selected, onPress, ...props}) => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <>
      <TouchableOpacity
        style={[
          styles.buttonContainer,
          {
            backgroundColor: selected ? '#9F91F7' : '#0F1020',
            opacity: selected ? 1 : 0.4,
          },
        ]}
        onPress={onPress}
        disabled={selected}>
        <Image
          style={styles.clockIcon}
          source={require('../../assets/png/alarm-clock-1.png')}
        />
        <Text style={styles.buttonText}> {text}</Text>
      </TouchableOpacity>
    </>
  );
};

export default TimeOptionButton;
