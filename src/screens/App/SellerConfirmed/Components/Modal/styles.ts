import { Platform, StyleSheet } from 'react-native';
import { w } from 'values/Dimensions';
import COLORS from 'values/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    // maxHeight: '60%',
  },
  LinearGradient: {
    height: 80,
    width: '100%',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Successfully: {
    color: COLORS.white,
    fontSize: 22
  },
  Row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    marginTop: 20
  },
  Text: {
    fontSize: 15,
    color: COLORS.move,
    fontWeight: '700'
  },
  Text2: {
    fontSize: 22,
    color: COLORS.gray,
    fontWeight: '700'
  },
  Card: {
    width: '100%',
    backgroundColor: COLORS.white,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 14,
    marginTop: 10,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.20,
    // shadowRadius: 1.41,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 2,
    alignSelf: 'center'
  },
  TextContainer: {
    marginLeft: 10,
    width:'82.5%',
  },
  Head1: {
    fontSize: 13,
    color: COLORS.move
  },
  Head2:
  {
    marginTop: 4,
    fontSize: 13,
    color: COLORS.gray
  },
});
