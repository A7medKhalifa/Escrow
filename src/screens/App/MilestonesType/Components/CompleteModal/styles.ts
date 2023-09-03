import { Platform, StyleSheet } from 'react-native';
import { h, w } from 'values/Dimensions';
import COLORS from 'values/colors';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 28,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    height: '30%'
  },
  Title: {
    fontSize: 15,
    color: COLORS.move,
    fontWeight: '500',
    marginLeft:28
  },
  KeyboardAwareScrollView: {
    height: '100%'
  },
  MainView: {
    flex: 1,
    marginTop: 40
  },
  button: {
    marginTop: h * 0.02
  },
  TextContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  grayText: {
    fontSize: 14,
    color: COLORS.gray,
  },
  WalletBalanceText: {
    color: COLORS.move,
    fontSize: 16,
    textAlign: 'left',
    marginBottom: h * 0.01
  },
  SupplierCard: {
    backgroundColor: COLORS.white,
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 13,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '85%',
    marginRight:5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    alignSelf:'center',
    marginTop:25
  },
  S_Image: {
    height: h * 0.045,
    width: h * 0.045,
    borderRadius: h * 0.1,
    marginTop: 15
  },

});
