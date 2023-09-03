import { View, StatusBar } from 'react-native';
import React from 'react';
import COLORS from 'values/colors';
import Svg from 'atoms/Svg';
import { h, w } from 'values/Dimensions';
import FormSection from './Components/Form/Form';
import Header from './Components/Head/Header';

const ForgotPassword = () => {

  return (
    <View
      style={{
        height: h * 1,
        justifyContent: 'flex-start',
        backgroundColor: COLORS.white
      }}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="dark-content" />
      <Header />
      <Svg style={{ alignSelf: 'center', marginVertical: 70 }} name="logo" size={210} />
      <FormSection />
    </View>
  );
};

export default ForgotPassword;
