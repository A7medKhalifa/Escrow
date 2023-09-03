import { StyleSheet } from 'react-native';
import { h, w } from 'values/Dimensions';
import COLORS from 'values/colors';
export const styles = StyleSheet.create({

  container: {
    justifyContent: 'center',
    paddingTop: h * 0.07,
  },
  sec_container:{
    width: '90%',
    backgroundColor: COLORS.white,
    paddingBottom: 10,
    alignSelf: 'center',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomEndRadius:10,
    borderBottomStartRadius:10
  },
  SmallContainer: {
    width: '100%',
    backgroundColor: COLORS.white,
    padding: 17.5
  },
  LinearGradient: {
    height: 130,
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
    fontWeight:'500',
    marginBottom: h * 0.01
  },
  TextContainer2:{
    width: '60%',
    paddingVertical:2 ,
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
    fontSize: 12,
    color: COLORS.gray,
    marginTop: 7
  },
  Row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:17,
  }
});
