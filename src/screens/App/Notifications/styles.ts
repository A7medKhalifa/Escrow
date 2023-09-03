import { StyleSheet } from 'react-native';
import { h, w } from 'values/Dimensions';
import COLORS from 'values/colors';
export const styles = StyleSheet.create({

  container: {
    justifyContent: 'center',
    paddingTop: h * 0.04,
    alignItems: 'center'
  },
  S_Image: {
    height: h * 0.06,
    width: h * 0.06,
    borderRadius: h * 0.1,
  },
  Card: {
    width: '90%',
    backgroundColor: COLORS.white,
    padding: 18,
    borderRadius: 14,
    marginTop: 16,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  WalletBalanceText: {
    color: COLORS.DDarkBlue,
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'left',
  },
  DateText: {
    color: COLORS.gray,
    fontSize: 12,
    textAlign: 'left',
  },
  smallText2: {
    fontSize: 14,
    color: COLORS.gray,
    marginBottom: 3,
    fontWeight: '400',
    marginRight: 7
  },
  Row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  Row2: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
