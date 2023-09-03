import { StyleSheet } from 'react-native';
import { h, w } from 'values/Dimensions';
import COLORS from 'values/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: MarginsAndPaddings.xl,
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
  face: {
    flexDirection: 'row',
    marginBottom:15,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#008FFF',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: w * 0.6,
    marginHorizontal: 20,
    backgroundColor:'#f2f8ff'
  },
  faceText: {
    fontWeight: '500',
    color: COLORS.blue,
    marginLeft:10
  },
});
