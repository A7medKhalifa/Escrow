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
    backgroundColor: 'white',
    padding: w * 0.05,
    width: '100%',
    position: 'relative',
  },
  smallText: {
    fontSize: 14,
    color: COLORS.black,
    textAlign:'center',
    width: '70%',
    fontWeight:'400'
  },
  firstText: {
    fontWeight: '700',
    fontSize: 22,
    marginTop: 10,
    marginBottom: 10,
    color: COLORS.DDarkBlue,
  },
  secondText: {
    fontWeight: '700',
    fontSize: 15,
    marginBottom: 10,
    color: COLORS.DDarkBlue,
  },
  ok: {
    backgroundColor: '#e7ebfd',
    padding: 10,
    width: w * 0.4,
    borderRadius: 20,
    marginTop: 20,
    alignItems: 'center',
  },
});
