import { Platform, StyleSheet } from 'react-native';
import { w } from 'values/Dimensions';
import COLORS from 'values/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 20,
    maxHeight: '27%',
  },
  AddText: {
    color: COLORS.DDarkBlue,
    fontSize: 18,
    fontWeight: '700',
    paddingTop: 20,
    textAlign: 'center',
    alignSelf:'center',
    maxWidth:'70%'
  },
  Discription: {
    fontSize: 13,
    fontWeight: '400',
    marginTop: 20,
    textAlign: 'center',
    alignSelf:'center',
    maxWidth:'90%',
    color: COLORS.black
  },
  ok: {
    backgroundColor: '#e7ebfd',
    padding: 10,
    width: w * 0.4,
    borderRadius: 20,
    marginTop: 20,
    alignItems: 'center',
    alignSelf: 'center'
  },

});
