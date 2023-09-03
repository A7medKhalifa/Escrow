import { StyleSheet } from 'react-native';
import { h } from 'values/Dimensions';
import COLORS from 'values/colors';

export const styles = StyleSheet.create({
  forgot: {
    color: '#a9add0',
    fontSize: 13,
    fontWeight: '700',
    marginHorizontal: 20,
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  create: {
    color: '#8a95ff',
    fontSize: 15,
    fontWeight: '700',
    marginHorizontal: 20,
    marginTop: 10,
    textAlign: 'center',
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginTop: h * 0.07,
    paddingHorizontal: 25,
    paddingVertical: 50,
    borderRadius: 20,
  },
  label: {
    color: COLORS.black,
    fontSize: 15,
    fontWeight: '700',
    marginHorizontal: 20,
    marginTop: 10,
  },
});
