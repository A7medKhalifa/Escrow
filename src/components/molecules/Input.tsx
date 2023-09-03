import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { Input, InputProps } from 'react-native-elements';
import COLORS from 'values/colors';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language/index';
import { selectIsDarkMode } from 'redux/DarkMode';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

type TInput = {
  loading?: boolean;
  touched?: any;
  errors?: any;
  name: string;
  handleChange: any;
  handleBlur?: any;
  title?: string;
  values?: any;
  containerStyling?: any;
  inputContainerStyling?: ViewStyle;
  titleStyling?: any;
  stylee?: ViewStyle;
  labelStyle?: TextStyle;
  containerStyle?: ViewStyle;
};

const InputView = ({
  loading,
  values,
  touched,
  errors,
  handleChange,
  containerStyle,
  handleBlur,
  name,
  title,
  placeholder,
  containerStyling,
  inputContainerStyling,
  titleStyling,
  labelStyle,
  stylee,
  ...props
}: InputProps & TInput) => {
  const lang = useSelector(selectLanguage);
  const isDarkMode = useSelector(selectIsDarkMode);
  return (
    <View style={[styles.container, containerStyling]}>
      <Input
        {...props}
        placeholder={placeholder}
        autoComplete={'off'}
        disabled={loading ? true : false}
        placeholderTextColor="#b4b7d5"
        value={values[name]}
        maxLength={50}
        errorStyle={{
          color: COLORS.errorRed,
          textAlign: lang === 'ar' ? 'right' : 'left',
          marginTop: Platform.OS === 'android' ? (lang === 'ar' ? -7 : 0) : 5,
          marginLeft: 10
        }}
        containerStyle={[
          containerStyle,
          {
            borderBottomColor: errors[name] && touched[name] ? COLORS.red : '#F2F2F2',
          },
        ]}
        errorMessage={touched[name] ? errors[name] : ''}
        inputStyle={{
          color: isDarkMode ? COLORS.white : '#000',
          fontSize: 15,
          opacity: 0.7,
          textAlign: lang === 'ar' ? 'right' : 'left',
          alignItems: 'center',
        }}
        inputContainerStyle={
          inputContainerStyling
            ? {
              ...inputContainerStyling,
              borderBottomColor:
                errors[name] && touched[name] ? COLORS.red : COLORS.primary,
              borderBottomWidth: 0,
            }
            : {
              ...styles.textInputStyle,

              borderBottomColor:
                errors[name] && touched[name] ? COLORS.red : COLORS.primary,
            }
        }
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        labelStyle={[
          labelStyle,
          { textAlign: lang === 'ar' ? 'right' : 'left', },
        ]}
      />
    </View>
  );
};

export default InputView;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  textInputStyle: {
    width: '95%',
    lineHeight: 2,
    alignSelf: 'center',
    borderBottomWidth: 1.4,
    fontSize: 12,
    height: 35
  },
});
