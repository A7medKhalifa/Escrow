import { Platform, StyleSheet } from 'react-native';
import { h, w } from 'values/Dimensions';
import COLORS from 'values/colors';

export const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  btnStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  subContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 8,
    marginBottom: 6,
    flex: 1,
    borderRadius: 10,
  },
  svgStyle: {
    width: 20,
    height: 20,
  },
  descStyle: {
    overflow: 'hidden',
  },
  describe: {
    marginTop: 4,
    fontSize: 12,
    color: COLORS.gray
  },
  title: {
    color: COLORS.move,
    fontSize: 16,
    textAlign: 'left',
    marginBottom: h * 0.01
  },
  Head1: {
    fontSize: 13,
    color: COLORS.move
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
  TextContainer: {
    marginLeft: 10
  },
  Salary: {
    fontSize: 16,
    color: COLORS.move,
    fontWeight: '800'
  },
  price: {
    fontWeight: '600',
    color: COLORS.DDarkBlue,
    fontSize: 34,
    textAlign: 'left',
    marginBottom: h * 0.01
  },
  bodyContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingBottom: 20,
    width: '100%'
  },
  Card: {
    width: '100%',
    backgroundColor: COLORS.white,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 14,
    marginTop: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 2,
  },
  S_Image: {
    height: h * 0.05,
    width: h * 0.05,
    borderRadius: h * 0.1,
  },
  Sec_Image: {
    height: h * 0.045,
    width: h * 0.045,
    borderRadius: h * 0.1,
    marginTop: 15
  },
  Image: {
    height: h * 0.04,
    width: h * 0.04,
    borderRadius: h * 0.1,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.alfaBlack,
    width: '100%',
    marginVertical: 15
  },
  smallHeader: {
    fontSize: 15,
    color: COLORS.gray,
    marginLeft: 5
  },
  RowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  ProgressCircleBorder: {
    width: 27,
    height: 27,
    borderRadius: 20,
    borderColor: COLORS.green,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  ProgressCircle: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: COLORS.green
  },
  TextContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  SupplierCard: {
    backgroundColor: COLORS.white,
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 13,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '87%',
    marginRight: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  WalletBalanceText: {
    color: COLORS.move,
    fontSize: 16,
    textAlign: 'left',
    marginBottom: h * 0.01
  },
  grayText: {
    fontSize: 14,
    color: COLORS.gray,
  },
});
