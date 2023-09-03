import { Platform, StyleSheet } from 'react-native';
import COLORS from 'values/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 20,
    // maxHeight:'65%'
  },
  AddText: {
    color: COLORS.DDarkBlue,
    fontSize: 16,
    fontWeight: '600',
    padding: 20,
    textAlign: 'left'
  },
  Modal:{
    paddingLeft: 10,
    zIndex: 1,
    position: 'absolute',
    borderRadius: 10,
    right: 32,
    top: 247,
    borderColor: COLORS.primary,
    borderWidth: 1,
    backgroundColor: '#fff',
    width: '23%',
    paddingVertical: 7
  },
  CurrancyText: {
    fontSize: 12,
    color: COLORS.black,
    marginLeft: 13
  },
  CurrancyContainer: {
    width: '23%',
    height: 30,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop:-10
  },
  Head:{
    fontSize: 14,
    fontWeight: '600',
    paddingLeft:20,
    textAlign: 'left'
  },
  Discription:{
    fontSize: 13,
    fontWeight: '400',
    paddingHorizontal:20,
    marginTop:10,
    textAlign: 'left'
  },
  fileButton:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 15
  },
  fileText:{
    color: COLORS.black,
    fontSize: 12,
    marginLeft: 5,
    textDecorationLine: 'underline'
  }


});
