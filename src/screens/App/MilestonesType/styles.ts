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
  S_Image: {
    height: h * 0.045,
    width: h * 0.045,
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
  smallText: {
    fontSize: 12,
    color: COLORS.gray,
    marginTop: 7
  },
  grayText: {
    fontSize: 15,
    color: COLORS.gray,
    fontWeight: '400',
    marginTop: 4,
  },
  UploadButton: {
    height: 40,
    width: 180,
    backgroundColor: COLORS.sky,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
    alignSelf: 'center',
    flexDirection: 'row'
  },
  UploadText: {
    color: COLORS.black,
    fontWeight: '500',
    marginLeft: 7,
    fontSize: 14,
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
  SupplierCard: {
    backgroundColor: COLORS.white,
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 13,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '85%',
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
  TextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  ButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  CompleteButton: {
    padding: 7.5,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.sky
  },
  CompleteButtonText: {
    color: COLORS.move,
    fontSize: 12,
    fontWeight: '800'
  },
  DeleteButton: {
    padding: 7.5,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.Dred,
    marginLeft: 10
  },
  DeleteButtonText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '800'
  },

});
