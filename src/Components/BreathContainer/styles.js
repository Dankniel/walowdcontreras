import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  circleSkeleton: {
    borderRadius: 200,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  outerCircleContainer: {
    // backgroundColor: '#FFFFFF',
    height: Dimensions.get('screen').height * 0.3,
    width: Dimensions.get('screen').height * 0.3,
    borderWidth: 7,
    borderColor: '#FFFFFF',
    opacity: 0.4,
  },
  middleCircleContainer: {
    backgroundColor: '#7B66FF',
    height: Dimensions.get('screen').height * 0.25,
    width: Dimensions.get('screen').height * 0.25,
    opacity: 0.4,
    // borderWidth: 15,
  },
  innerCircleContainer: {
    backgroundColor: '#7B66FF',
    height: Dimensions.get('screen').height * 0.22,
    width: Dimensions.get('screen').height * 0.22,
    opacity: 0.8,
  },
});
