import { Platform, StyleSheet } from 'react-native';
import { h, w } from 'values/Dimensions';
import COLORS from 'values/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 28,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    height: '50%'
  },
  Title: {
    fontSize: 15,
    color: COLORS.move,
    fontWeight: '500',
  },
  KeyboardAwareScrollView: {
    height: '100%'
  },
  MainView: {
    flex: 1,
    marginTop: 40
  },
  button: {
    marginTop: h * 0.02
  }


});
