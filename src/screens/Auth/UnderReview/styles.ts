import { StyleSheet } from 'react-native';
import { MarginsAndPaddings, w } from 'values/Dimensions';
import COLORS from 'values/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: MarginsAndPaddings.ml,
    backgroundColor: COLORS.white,
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 20,
    shadowColor: '#ddd',
    backgroundColor: COLORS.white,
    padding: w * 0.05,
    width: '100%',
    position: 'relative',
  },
  circle: {
    backgroundColor: '#00FFBD',
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#eee',
    position: 'absolute',
    top: -50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  circle1: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#0C7D9E',
    marginHorizontal: 1,
  },
  circle2: {
    width: 15,
    height: 15,
    borderRadius: 15,
    backgroundColor: '#0C7D9E',
    marginHorizontal: 1,
  },
  circle3: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: '#0C7D9E',
    marginHorizontal: 1,
  },
  firstText: {
    fontWeight: '700',
    fontSize: w * 0.05,
    marginTop: 70,
    marginBottom: 10,
    color: '#0C7D9E',
  },
  secondText: {
    color: COLORS.black,
    fontSize: 14,
    fontWeight: '400'
  },
  ok: {
    backgroundColor: '#e7ebfe',
    padding: 10,
    width: w * 0.3,
    borderRadius: 20,
    marginTop: 20,
    alignItems: 'center',
  },
});
