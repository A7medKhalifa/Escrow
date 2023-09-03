import { Platform, StyleSheet } from 'react-native';
import { h, w } from 'values/Dimensions';
import COLORS from 'values/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 20,
    maxHeight: '29%',
    justifyContent:'center'
  },
  AddText: {
    color: COLORS.DDarkBlue,
    fontSize: 18,
    fontWeight: '700',
    paddingTop: 20,
    textAlign: 'center',
  },
  Discription: {
    fontSize: 13,
    fontWeight: '400',
    marginTop: 20,
    textAlign: 'center',
    color: COLORS.black,
    alignSelf:'center',
    width:'80%'
  },
  ok: {
    backgroundColor: COLORS.primary,
    padding: 10,
    width: w * 0.4,
    borderRadius: 20,
    marginTop: 30,
    alignItems: 'center',
    alignSelf: 'center'
  },
  ClockContainer:{
    height: 80,
    width: 80,
    backgroundColor: COLORS.move,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    marginBottom: -h * .037,
    alignSelf: 'center'
  }

});
