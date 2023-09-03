import { Dimensions, StyleSheet } from 'react-native';
import { BorderRadius, MarginsAndPaddings, h, w } from 'values/Dimensions';
import COLORS from 'values/colors';
const { height, width } = Dimensions.get('screen')

export const styles = StyleSheet.create({
  container: {
    width,
    height,
    // padding: MarginsAndPaddings.xl,
    backgroundColor: COLORS.white,
  },
});
