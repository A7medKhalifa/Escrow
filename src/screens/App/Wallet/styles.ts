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
  describe: {
    marginTop: 4,
    fontSize: 12,
    color: COLORS.gray
  },
  Salary: {
    fontSize: 16,
    color: COLORS.move,
    fontWeight: '800'
  },
  Head1: {
    fontSize: 12,
    color: COLORS.DDarkBlue
  },
  Head2:
  {
    marginTop: 4,
    fontSize: 12,
    color: COLORS.DDarkBlue
  },
  Date: {
    marginTop: 4,
    fontSize: 12,
    color: COLORS.gray
  },
  TextContainer2: {
    marginLeft: 10,
    width: '60%',
  },
  container: {
    justifyContent: 'center',
    paddingTop: h * 0.04,
    alignItems: 'center'
  },
  Image: {
    height: h * 0.08,
    width: h * 0.08,
    borderRadius: h * 0.1
  },
  S_Image: {
    height: h * 0.05,
    width: h * 0.05,
    borderRadius: h * 0.1,
  },
  EscrowbchainSmallContainer: {
    width: '40%',
    alignItems: 'center',
    paddingVertical: 15
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
    paddingHorizontal: 10,
    borderRadius: 14,
    marginTop: 16,
  },
  WalletBalanceText: {
    color: COLORS.move,
    fontSize: 16,
    textAlign: 'left',
    marginBottom: h * 0.01
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
    marginTop: 7
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
    width: '90%',
    alignItems: 'center',
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    width: '100%',
  },
  ViewAll: {
    textDecorationLine: 'underline',
    fontSize: 14,
    textAlign: 'right',
    color:COLORS.move
  }
});
