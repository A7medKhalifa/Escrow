import { Platform, StyleSheet } from 'react-native';
import { h, w } from 'values/Dimensions';
import COLORS from 'values/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 28,
    paddingTop: 40,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    alignItems: 'center'
  },
  Title: {
    fontSize: 18,
    color: COLORS.DDarkBlue,
    fontWeight: '700'
  },
  Icon: {
    position: 'absolute',
    top: -58,
    opacity: 1
  },
  description: {
    fontSize: 16,
    color: COLORS.DDarkBlue,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 20
  },
  button: {
    backgroundColor: COLORS.light,
    paddingHorizontal: 35,
    paddingVertical: 7.5,
    borderRadius: 20,
    marginTop: 15
  },
  buttonTitle: {
    color: COLORS.black,
    fontWeight: '700',
    fontSize: 13
  }

});
