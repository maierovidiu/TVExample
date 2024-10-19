import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 66,
    maxWidth: 190,
  },
  buttonDefault: {},
  buttonFocused: {
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 20},
    shadowOpacity: 0.25,
    shadowRadius: 12,
  },
  buttonSelected: {
    minHeight: 66,
    borderRadius: 48,
  },
  text: {
    fontFamily: 'Helvetica',
    fontSize: 30,
    fontWeight: '500',
  },
  textDefault: {},
  textFocused: {},
  textSelected: {},
});

export default styles;
