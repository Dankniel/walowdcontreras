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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    position: 'absolute',
    width: 100,
    height: 200, // this is the diameter of circle
  },
  dot: {
    //width: '100%',
    //height: 20,
    backgroundColor: 'red',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});
