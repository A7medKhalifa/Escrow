import { StyleSheet } from 'react-native';
import { h } from 'values/Dimensions';
import COLORS from 'values/colors';
export const styles = StyleSheet.create({
  
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    paddingHorizontal: 25,
    paddingVertical: 50,
    borderRadius: 20,
  },
  label: {
    color: COLORS.black,
    fontSize: 15,
    marginHorizontal: 20,
    marginTop: 15,
  },
});
