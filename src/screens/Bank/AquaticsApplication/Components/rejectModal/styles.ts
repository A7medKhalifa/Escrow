import { Platform, StyleSheet } from 'react-native';
import { w } from 'values/Dimensions';
import COLORS from 'values/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 20,
    // maxHeight: '27%',
  },
  AddText: {
    color: COLORS.DDarkBlue,
    fontSize: 22,
    fontWeight: '700',
    // paddingTop: 20,
    textAlign: 'center',
  },
  Discription: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 20,
    textAlign: 'center',
    color: COLORS.black,
    alignSelf:'center',
    width:'80%'
  },
  ok: {
    backgroundColor: COLORS.move,
    padding: 10,
    width: w * 0.3,
    borderRadius: 20,
    marginTop: 30,
    alignItems: 'center',
    alignSelf: 'center'
  },

});
