import { StyleSheet } from 'react-native';
import { h, w } from 'values/Dimensions';
import COLORS from 'values/colors';
export const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  container: {
    justifyContent: 'center',
    paddingTop: h * 0.02,
    paddingHorizontal: 25
  },
  Head: {
    color: COLORS.DDarkBlue,
    fontSize: 16,
    fontWeight: '700'
  },
  Image: {
    height: h * 0.08,
    width: h * 0.08,
    borderRadius: h * 0.1
  },
  S_Image: {
    height: 40,
    width: 40,
    borderRadius: h * 0.1,
  },
  EscrowbchainSmallContainer: {
    width: '40%',
    alignItems: 'center',
    paddingVertical: 15,
    justifyContent: 'space-between',
  },
  EditButton: {
    marginLeft: w * 0.225,
  },
  Name: {
    fontSize: 20,
    lineHeight: 25,
    color: COLORS.DDarkBlue,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: h * 0.006
  },
  InvitationsContainer: {
    height: h * .035,
    width: w * .35,
    backgroundColor: COLORS.LRed,
    borderRadius: 14,
    marginTop: h * 0.009,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: h * 0.03
  },
  InvitationsText: {
    color: COLORS.white,
    fontSize: 14
  },
  Card: {
    width: '90%',
    backgroundColor: COLORS.white,
    paddingVertical: 18,
    borderRadius: 14,
    marginTop: 16,
    alignSelf: 'center',
  },
  WalletBalanceText: {
    color: COLORS.move,
    fontSize: 16,
    textAlign: 'left',
    marginTop: h * 0.02,
  },
  BigText: {
    fontSize: 32,
    color: COLORS.DDarkBlue,
    fontWeight: '400'
  },
  methodContainer:{
    width: '100%',
    height:50,
    padding: 15,
    borderRadius:10,
    backgroundColor: COLORS.light,
    flexDirection:'row',
    alignItems:'center',
    marginTop:12.5
  },
  smallHeaderText: {
    color: COLORS.DDarkBlue,
    fontSize: 12,
    textAlign: 'left',
  },
  TextContainer: {
    // justifyContent: 'space-between',
    alignSelf: 'center',
    width: '67%',
    marginLeft: 10,
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
  smallText: {
    fontSize: 12,
    color: COLORS.gray,
    marginTop: 7,
    textAlign: 'left',
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.alfaBlack,
    width: '100%',
    marginVertical: 15
  },
  SupplierCard: {
    backgroundColor: COLORS.white,
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 13,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginTop: 5,
    alignSelf: 'center'
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.20,
    // shadowRadius: 1.41,
    // elevation: 2,
  }
});
