import { StyleSheet } from 'react-native';
import { h, w } from 'values/Dimensions';
import COLORS from 'values/colors';
export const styles = StyleSheet.create({

  container: {
    justifyContent: 'center',
    paddingTop: h * 0.07,
  },
  Modal: {
    paddingLeft: 10,
    zIndex: 1,
    position: 'absolute',
    borderRadius: 10,
    left: 18,
    top: 388,
    borderColor: COLORS.primary,
    borderWidth: 1,
    backgroundColor: '#fff',
    width: '23%',
    paddingVertical: 7
  },
  Modal1: {
    paddingLeft: 10,
    zIndex: 1,
    position: 'absolute',
    borderRadius: 10,
    left: 18,
    top: 599.5,
    borderColor: COLORS.primary,
    borderWidth: 1,
    backgroundColor: '#fff',
    width: '23%',
    paddingVertical: 7
  },
  sec_container: {
    width: '90%',
    backgroundColor: COLORS.white,
    paddingBottom: 10,
    alignSelf: 'center',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10
  },
  SmallContainer: {
    width: '100%',
    backgroundColor: COLORS.white,
    padding: 17.5
  },
  LinearGradient: {
    height: 90,
    width: '100%',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Successfully: {
    color: COLORS.white,
    fontSize: 24
  },
  Icon: {
    position: 'absolute',
    top: -58,
    alignSelf: 'center'
  },
  Image: {
    height: 50,
    width: 50,
    borderRadius: 50
  },
  WalletBalanceText: {
    color: COLORS.move,
    fontSize: 15,
    textAlign: 'left',
    fontWeight: '700',

  },
  Text: {
    color: COLORS.gray,
    fontWeight: '600',
    fontSize: 20,
    marginBottom: h * 0.006,
    marginTop: h * 0.006,
  },
  DetailsText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: '400',
    color: COLORS.move
  },
  PaysText: {
    marginTop: 20,
    fontSize: 14,
    fontWeight: '700'
  },
  Image2: {
    height: 47,
    width: 47,
    borderRadius: 30,
    marginRight: 8
  },
  TextContainer2: {
    width: '60%',
    paddingVertical: 2,
    justifyContent: 'center',
  },
  smallHeaderText: {
    color: COLORS.DDarkBlue,
    fontSize: 13,
    textAlign: 'right',
  },
  SalaryText: {
    color: COLORS.DDarkBlue,
    fontSize: 24,
    fontWeight: 'bold'
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
    marginRight: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    marginTop: 20,
  },
  S_Image: {
    height: h * 0.045,
    width: h * 0.045,
    borderRadius: h * 0.1,
    marginTop: 15
  },
  TextContainer: {
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: '67%',
    marginLeft: 10,
  },
  smallText: {
    fontSize: 13,
    fontWeight: '400',
    color: COLORS.gray,
  },
  Row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 17,
  },
  Row2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  Contain: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    marginTop: 15
  },
  Contain2: {
    justifyContent: 'space-between',
    height: '90%',
    width: '82%',
  },
  CurrancyText: {
    fontSize: 12,
    color: COLORS.black,
    marginLeft: 13,
    fontWeight: '600'
  },
  CurrancyContainer: {
    width: '23%',
    height: 30,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  lowOpacityContsiner: {
    paddingLeft: 17.5,
    paddingRight: 25,
    maxWidth: '60%',
    paddingVertical: 20,
    backgroundColor: '#e3e7ff',
    justifyContent: 'center',
    marginLeft: -17.5,
    borderTopEndRadius: 15,
    borderBottomEndRadius: 15,
  },
  MilestoneDetails: {
    padding: 7,
    paddingHorizontal: 13,
    borderRadius: 10,
    backgroundColor: '#e3e7ff'
  },
  small: {
    fontSize: 13,
    fontWeight: '400',
    color: COLORS.gray,
  }
});
