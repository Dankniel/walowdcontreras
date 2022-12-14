import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import {styles} from './styles.js';
const PlayButton = ({isPlaying, onPress, disabled, ...props}) => {
  return (
    <>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={onPress}
        disabled={disabled}>
        <Image
          style={styles.logo}
          source={
            isPlaying
              ? require('../../assets/png/Pause.png')
              : require('../../assets/png/Play.png')
          }
        />
      </TouchableOpacity>
    </>
  );
};

export default PlayButton;
