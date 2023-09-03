import { Platform, StyleSheet } from 'react-native';
import { h } from 'values/Dimensions';
import COLORS from 'values/colors';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    height: Platform.OS === 'android' ? h * 0.1 : h * 0.12,
    paddingTop: Platform.OS === 'android' ? 0 : h * 0.04,
  },
  title: {
    fontSize: 20,
    lineHeight: 25,
    color: COLORS.black,
    fontWeight: '400',
    textAlign: 'center',
  },
});
