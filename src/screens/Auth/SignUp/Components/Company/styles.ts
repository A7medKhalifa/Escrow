import { StyleSheet } from 'react-native';
import { h, w } from 'values/Dimensions';
import COLORS from 'values/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 20,
    color: COLORS.black,
    marginLeft: 20,
    marginTop: 25,
  },
  content: {
    flex: 1,
    marginBottom: 10,
  },
  gradient: {
    borderRadius: 15,
  },
  containerStyle: {
    borderWidth: 0,
    borderBottomWidth: 2,
    borderBottomColor: '#008FFF',
    height: h * 0.06,
  },
  label_style: {
    color: '#C4C3C3',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 14,
  },
  button:{
    paddingVertical: 15,
    width: '57.5%',
    backgroundColor: COLORS.move,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 20
  },
  buttonText: {
    fontSize: 16,
    color: COLORS.white,
    fontWeight: '600',
  },
  CheckContainer: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 20,
    width: w * 0.8,
    marginHorizontal: 20,
  },
  Text: {
    fontWeight: '400',
    marginLeft: 10,
    fontSize: 13,
    color:COLORS.black,
  },
  Terms: {
    color: COLORS.blue,
    textDecorationLine: 'underline'
  }
});
