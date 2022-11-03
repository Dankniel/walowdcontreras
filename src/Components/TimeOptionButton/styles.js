import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 11,
    padding: 10,
  },
  clockIcon: {
    width: Dimensions.get('screen').width * 0.05,
    height: Dimensions.get('screen').width * 0.05,
    alignSelf: 'center',
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: Dimensions.get('screen').width * 0.04,
    color: '#FFFFFF',
    lineHeight: 28,
  },
});
