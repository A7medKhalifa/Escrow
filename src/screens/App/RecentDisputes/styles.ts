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
    paddingTop: h * 0.04,
    // alignItems: 'center'
  },
  S_Image: {
    height: h * 0.05,
    width: h * 0.05,
    borderRadius: h * 0.1,
  },
  Card: {
    width: '90%',
    backgroundColor: COLORS.white,
    padding: 18,
    borderRadius: 14,
    marginTop: 16,
    alignSelf: 'center',
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
    alignSelf: 'center',
    marginLeft: 10,
  },
  smallText: {
    fontSize: 12,
    color: COLORS.gray
  },
  DateText: {
    fontSize: 12,
    color: COLORS.gray,
    marginTop: 10
  },
  SmallCircle:{
    height: 27,
    width: 27,
    borderRadius: 20,
    backgroundColor: COLORS.BW,
    alignItems: 'center',
    justifyContent: 'center'
  },
  absoluteSmallCircle:{
    height: 27,
    width: 27,
    borderRadius: 20,
    backgroundColor: COLORS.BW,
    position: 'absolute',
    bottom: -5,
    right: -5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  PackageContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  PackageText:{
    color: COLORS.DDarkBlue,
    marginLeft: 10
  },
  RowCenter:{
    flexDirection: 'row',
    alignItems: 'center',
  }

});
