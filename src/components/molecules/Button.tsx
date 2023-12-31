import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import React from 'react';
import { BorderRadius, h, MarginsAndPaddings, w } from 'values/Dimensions';
import COLORS from 'values/colors';
import Fonts from 'values/fonts';
import Svg, { TName } from '../atoms/Svg';
import { useSelector } from 'react-redux';
import { selectIsDarkMode } from 'redux/DarkMode';
import LinearGradient from 'react-native-linear-gradient';

type TType =
  | 'primary'
  | 'secondry'
  | 'ticket_type'
  | 'book'
  | 'map'
  | 'cancel'
  | 'primaryModel'|'proceed';

type TButton = {
  isLoading?: boolean;
  type: TType;
  label: string;
  svg?: TName;
  size?: number;
  txtStyle?: TextStyle;
};

const Button = ({
  isLoading,
  type,
  svg,
  size,
  txtStyle,
  label,
  ...props
}: TouchableOpacityProps & TButton) => {
  const isDarkMode = useSelector(selectIsDarkMode);
  return (
    <TouchableOpacity {...props}>
      <LinearGradient
        style={styles(isDarkMode)[type] || styles(isDarkMode).primary}
        colors={['#5b6ed9', '#79b0f8']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}>
        {isLoading ? (
          <ActivityIndicator color={COLORS.white} />
        ) : (
          <>
            {svg ? (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Svg name={svg} size={size} style={{ marginHorizontal: 5 }} />
                <Text
                  style={
                    [styles(isDarkMode)[`txt_${type}`], txtStyle] || [
                      styles(isDarkMode).txt_primary,
                      txtStyle,
                    ]
                  }>
                  {label}
                </Text>
              </View>
            ) : (
              <Text
                style={
                  [styles(isDarkMode)[`txt_${type}`], txtStyle] || [
                    styles(isDarkMode).txt_primary,
                    txtStyle,
                  ]
                }>
                {label}
              </Text>
            )}
          </>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;

const styles = (isDarkMode: boolean) =>
  StyleSheet.create({
    primary: {
      padding: MarginsAndPaddings.xxl + 2,
      // backgroundColor: isDarkMode ? '#1d1f28' : COLORS.primary,
      paddingHorizontal: MarginsAndPaddings.xxl,
      marginTop: 0,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 16,
      marginBottom:
        Platform.OS === 'ios' ? MarginsAndPaddings.ml : MarginsAndPaddings.m,
      height: h * 0.075,
      fontSize: 16,
      marginHorizontal: 20,
    },
    primaryModel: {
      backgroundColor: isDarkMode ? '#2b2c3a' : COLORS.primary,
      paddingHorizontal: MarginsAndPaddings.xxl,
      marginTop: 0,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: BorderRadius.s,
      marginBottom:
        Platform.OS === 'ios' ? MarginsAndPaddings.ml : MarginsAndPaddings.m,
      height: h * 0.05,
      fontSize: 16,
    },
    cancel: {
      backgroundColor: isDarkMode ? '#181a26' : '#E2E2E2',
      paddingHorizontal: MarginsAndPaddings.xxl,
      marginTop: 0,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: BorderRadius.s,
      marginBottom:
        Platform.OS === 'ios' ? MarginsAndPaddings.ml : MarginsAndPaddings.m,
      height: h * 0.05,
      fontSize: 16,
    },
    book: {
      padding: MarginsAndPaddings.xxl,
      backgroundColor: isDarkMode ? '#1d1c27' : COLORS.darkBlue,
      paddingHorizontal: 50,
      marginTop: 0,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: BorderRadius.s,
      marginBottom:
        Platform.OS === 'ios' ? MarginsAndPaddings.ml : MarginsAndPaddings.m,
      height: h * 0.06,
      fontSize: 16,
    },
    map: {
      backgroundColor: isDarkMode ? COLORS.darkMode : COLORS.white,
      paddingHorizontal: MarginsAndPaddings.xxl,
      marginTop: 0,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 22,
      fontSize: 16,
      paddingVertical: 10,
    },
    secondry: {
      backgroundColor: COLORS.white,
      paddingHorizontal: MarginsAndPaddings.ml + 15,
      padding: MarginsAndPaddings.l,
      borderRadius: 20,
      elevation: 10,
      shadowColor: '#888',
      shadowOpacity: Platform.OS === 'ios' ? 1 : 0,
    },
    proceed:{
      padding: MarginsAndPaddings.xxl + 2,
      // backgroundColor: isDarkMode ? '#1d1f28' : COLORS.primary,
      paddingHorizontal: MarginsAndPaddings.xxl,
      marginTop: 0,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: BorderRadius.s,
      // marginBottom:
      //   Platform.OS === 'ios' ? MarginsAndPaddings.ml : MarginsAndPaddings.m,
      height: h * 0.08,
      fontSize: 16,
      
    },
    ticket_type: {
      backgroundColor: '#F8F8F8',
      padding: MarginsAndPaddings.ml - 3,
      borderRadius: 15,
      margin: MarginsAndPaddings.xxl,
      marginTop: MarginsAndPaddings.ml,
    },
    txt_primary: {
      color: COLORS.white,
      fontWeight:'700',
      // fontFamily: Fonts.RobotoBold,
      // fontFamily: Fonts.RobotoBold,
      fontSize: 16,
      lineHeight: 21,
    },
    txt_proceed: {
      color: COLORS.white,
      // fontFamily: Fonts.RobotoBold,
      // fontFamily: Fonts.RobotoBold,
      fontSize: 16,
      lineHeight: 21,
    },
    txt_primaryModel: {
      color: COLORS.white,
      // fontFamily: Fonts.RobotoBold,
      // fontFamily: Fonts.RobotoBold,
      fontSize: 16,
      lineHeight: 21,
    },
    txt_map: {
      color: isDarkMode ? COLORS.white : COLORS.black,
      fontSize: 16,
      lineHeight: 21,
    },
    txt_secondry: {
      color: COLORS.primary,
      fontWeight: '700',
    },
    txt_ticket_type: { color: COLORS.primary, fontWeight: '700', fontSize: 17 },
    txt_book: {},
    txt_cancel: {
      color: isDarkMode ? COLORS.white : COLORS.black,
      // fontFamily: Fonts.RobotoBold,
      fontSize: 16,
      lineHeight: 21,
    },
  });
