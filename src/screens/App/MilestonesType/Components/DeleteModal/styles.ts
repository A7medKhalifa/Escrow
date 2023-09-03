import { Platform, StyleSheet } from 'react-native';
import { h, w } from 'values/Dimensions';
import COLORS from 'values/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 28,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    alignItems: 'center'
  },
  Title: {
    fontSize: 18,
    color: COLORS.DDarkBlue,
    fontWeight: '700'
  },
  description: {
    fontSize: 16,
    color: COLORS.DDarkBlue,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 20
  },
  buttonContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },
  buttonKeepIt: {
    backgroundColor: COLORS.move,
    paddingHorizontal: 35,
    paddingVertical: 7.5,
    borderRadius: 20,
  },
  buttonDelete: {
    backgroundColor: COLORS.Dred,
    paddingHorizontal: 35,
    paddingVertical: 7.5,
    borderRadius: 20,
    marginLeft:10
  },
  buttonTitle: {
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 13
  }

});
