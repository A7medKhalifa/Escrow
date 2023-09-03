import { StyleSheet } from 'react-native';
import { h, w } from 'values/Dimensions';
import COLORS from 'values/colors';
export const styles = StyleSheet.create({

  container: {
    justifyContent: 'center',
    paddingTop: h * 0.02,
    paddingHorizontal: 25
    // alignItems: 'center'
  },
  Card: {
    width: '90%',
    backgroundColor: COLORS.white,
    padding: 18,
    borderRadius: 14,
    marginTop: 16,
  },
  Circle:{
    height: 70,
    width: 70,
    borderRadius: 75,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  Text:{
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.black,
    marginTop: 40,
  },
  Header:{
    fontSize: 13,
    marginTop: 30,
    fontWeight: '400',
    color: COLORS.black
  },
  UploadButton: {
    height: 38,
    width: 150,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 12,
    flexDirection: 'row'
  },
  UploadText: {
    color: COLORS.white,
    fontWeight: '600',
    fontSize: 14,
  },
  SubmitButton: {
    marginTop: 40,
    width: '100%',
    alignSelf: 'center'
  }

});
