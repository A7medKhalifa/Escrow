import { StyleSheet } from 'react-native';
import { h, w } from 'values/Dimensions';
import COLORS from 'values/colors';
export const styles = StyleSheet.create({
  Head: {
    textAlign: 'left',
    paddingLeft: 22,
    color: COLORS.black
  },
  container: {
    justifyContent: 'center',
    paddingTop: h * 0.02,
  },
  Image: {
    height: h * 0.06,
    width: h * 0.06,
    borderRadius: h * 0.1,
    marginTop: 15
  },
  smallHeaderText: {
    color: COLORS.DDarkBlue,
    fontSize: 12,
    textAlign: 'left',
    // marginTop: h * 0.01
  },
  S_Image: {
    height: h * 0.045,
    width: h * 0.045,
    borderRadius: h * 0.1,
    marginTop: 15
  },
  Card: {
    width: '90%',
    backgroundColor: COLORS.white,
    padding: 18,
    borderRadius: 14,
    marginTop: 16,
    alignSelf: 'center',
  },
  smallText: {
    fontSize: 12,
    color: COLORS.gray,
    marginTop: 7
  },
  grayText: {
    fontSize: 14,
    color: COLORS.gray,
  },
  CardHeader: {
    fontSize: 16,
    alignSelf: 'center',
    color: COLORS.move
  },
  WalletBalanceText: {
    color: COLORS.move,
    fontSize: 16,
    textAlign: 'left',
    marginBottom: h * 0.01
  },
  RowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  salaryText: {
    color: COLORS.DDarkBlue,
    fontSize: 34,
    textAlign: 'left'
  },
  price: {
    fontWeight: '600',
    color: COLORS.DDarkBlue,
    fontSize: 34,
    textAlign: 'left',
  },
  SupplierCard: {
    backgroundColor: COLORS.white,
    borderRadius: 14,
    paddingVertical: 8,
    paddingHorizontal: 13,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
    marginRight:5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    marginBottom:10,
  },
  ProgressCircleBorder:{
    width: 27,
    height: 27,
    borderRadius: 20,
    borderColor: COLORS.green,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  ProgressCircle:{
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: COLORS.green
  },
  TextContainer:{
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: '67%',
    marginLeft: 10,
  },

});
