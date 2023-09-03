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
  GeneratePassword: {
    fontSize: 14,
    marginLeft: 20,
    color: COLORS.gray,
    marginVertical: 5,
  },
  PasswordContainer: {
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.primary,
    alignSelf: 'center',
    justifyContent: 'center',
    height: 38,
  },
  bottomText: {
    textAlign: 'center',
    fontSize: 15,
    color: COLORS.black,
    marginVertical: 10,
    fontWeight: '400',
    marginHorizontal: 20
  }

});
