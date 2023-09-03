import { Animated as RNAnimated, View, StatusBar } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import COLORS from 'values/colors';
import Svg from 'atoms/Svg';
import { styles } from './styles';
import { h, w } from 'values/Dimensions';
import FormSection from './Components/Form/Form';
import Animated, { FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';
import Header from './Components/Head/Header';
import { useAppDispatch } from 'redux/store';
import Auth from 'redux/auth';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation()
  const [finished, setIsFinished] = useState(false);
  const [register, setRegister] = useState(false);
  const [logo, setlogo] = useState('logoWhite');
  const dispatch = useAppDispatch()
  // Animation
  const moveLogo = useRef(new RNAnimated.ValueXY({ x: 0, y: 0 })).current;

  useEffect(() => {
    const RenderFunction = navigation.addListener('focus', () => {
      dispatch(Auth.doneIndividualSignup(false))
      dispatch(Auth.doneCompanySignup(false))
    })
    setTimeout(() => {
      RNAnimated.timing(moveLogo, {
        toValue: {
          x: w / 2,
          y: -h / 3,
        },
        useNativeDriver: true,
      }).start(finished => {
        setIsFinished(true);
        setlogo('logo')
      });
    }, 2000);
    return RenderFunction
  }, [navigation]);
  return (
    <View
      style={{
        height: h * 1,
        justifyContent: 'flex-start',
        backgroundColor: finished
          ? COLORS.white
          : register
            ? COLORS.white
            : COLORS.primary,
      }}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="dark-content" />
      {finished && <Header setRegister={setRegister} register={register} />}
      <RNAnimated.View
        style={[
          styles.logoContainer,
          { transform: [{ translateY: moveLogo.y }] },
        ]}>
        <Animated.View entering={FadeInDown.duration(2000)}>
          <Svg name={logo} size={210} />
        </Animated.View>
      </RNAnimated.View>
      {finished && (
        <Animated.View
          entering={FadeIn.duration(1000)}
          exiting={FadeOut.duration(1000)}
          style={{ flex: 0.7, marginTop: -h * 0.7 }}>
          <FormSection
            register={register}
            setRegister={setRegister}
            setFinished={setIsFinished}
          />
        </Animated.View>
      )}
    </View>
  );
};

export default Login;
