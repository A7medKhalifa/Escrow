import { Platform, StyleSheet } from 'react-native';
import { h, w } from 'values/Dimensions';
import COLORS from 'values/colors';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: COLORS.primary,
    height: Platform.OS === 'android' ? h * 0.1 : h * 0.12,
    paddingTop: Platform.OS === 'android' ? 0 : h * 0.04,
    flexDirection: 'row',
    alignItems: 'center',

  },
  title: {
    fontSize: 20,
    lineHeight: 25,
    color: COLORS.black,
    fontWeight: '400',
    textAlign: 'center',
    // marginRight: -w * 0.19,
  },
  NotificationNumber: {
    height: 19,
    width: 19,
    backgroundColor: COLORS.sky,
    borderRadius: 20,
    position: 'absolute',
    top: -7,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Number: {
    fontSize: 12,
    color: COLORS.black
  }
});
