import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';

export const styles = StyleSheet.create({
  ModalContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    paddingTop: 84,
  },
  Container: {
    paddingHorizontal: 5,
    width: '50%',
    paddingVertical: 15,
    backgroundColor: COLORS.lightGrey,
    borderRadius: 15
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
  },
  Divider: {
    height: 1,
    backgroundColor: COLORS.alfaBlack,
    marginVertical: 10
  },
  title: {
    fontSize: 12,
    color: COLORS.black,
    marginLeft: 5
  },
  NumCircle: {
    height: 15,
    width: 15,
    backgroundColor: COLORS.sky,
    borderRadius: 20,
    position: 'absolute',
    top: -7,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Num: {
    fontSize: 11,
    color: COLORS.black
  }
});
