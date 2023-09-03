import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, { useState } from 'react';
import { Input, InputProps } from 'react-native-elements';
import COLORS from 'values/colors';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language/index';
import { selectIsDarkMode } from 'redux/DarkMode';
import CountryPicker from 'react-native-country-picker-modal';
import Svg from 'atoms/Svg';

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
  setMobileCode:any
};

const MobileInputView = ({
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
  setMobileCode,
  ...props
}: InputProps & TInput) => {
  const lang = useSelector(selectLanguage);
  const isDarkMode = useSelector(selectIsDarkMode);
  const [
    { country_code, country_cc2, }, setData] = useState<any>({
      country_cc2: 'EG',
      country_code: '20',
    });
  const [show, setShow] = useState(false);

  return (
    <View style={{
      flexDirection: 'row',
      width: '100%',
      paddingHorizontal: 18,
      justifyContent: 'space-between'
    }}>
      <TouchableOpacity
        activeOpacity={.9} onPress={() => setShow(true)}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '15%',
        }}>
        <Svg name='Arrow2' style={{ marginRight: 5 }} />
        <CountryPicker
          withFilter
          withFlagButton={false}
          withCallingCodeButton
          theme={{
            onBackgroundTextColor: '#000',
            fontSize: 15,
          }}
          countryCode={country_cc2}
          onSelect={country => {
            setData((prev: any) => ({ ...prev, country_cc2: country.cca2, country_code: country.callingCode[0] }));
            setMobileCode(country)
          }}
          withCallingCode
          onClose={() => setShow(false)}
          onOpen={() => setShow(true)}
          visible={show}

        />
      </TouchableOpacity>
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
    </View>

  );
};

export default MobileInputView;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  textInputStyle: {
    width: '88%',
    lineHeight: 2,
    // alignSelf: 'center',
    borderBottomWidth: 1.4,
    fontSize: 12,
    height: 35
  },
});
