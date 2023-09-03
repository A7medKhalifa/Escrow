import {
  View,
  Text,
  TouchableOpacity,
  Animated as RNAnimated,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import InputView from 'components/molecules/Input';
import { Formik } from 'formik';
import { login_initial_values } from 'src/formik/initial_values';
import { loginSchema } from 'src/formik/schema';
import { styles } from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Button from 'components/molecules/Button';
import { h, w } from 'values/Dimensions';
import Animated, { FadeOut } from 'react-native-reanimated';
import Svg from 'atoms/Svg';
import COLORS from 'values/colors';
import { useNavigation } from '@react-navigation/core';
import { useAppDispatch } from 'redux/store';
import thunks from 'redux/auth/thunks';
import { useLoadingSelector } from 'redux/selectors';

const FormSection = ({
  setRegister,
  setFinished,
  register,
}: {
  setRegister?: any;
  setFinished?: any;
  register?: any;
}) => {
  const navigation = useNavigation<any>();
  // Animation
  const moveLogo = useRef(new RNAnimated.ValueXY({ x: 0, y: 0 })).current;
  const [item, setItem] = useState(0);
  const [bank, setbank] = useState(false);
  const dispatch = useAppDispatch()
  const loading = useLoadingSelector(thunks.doSignIn)
  // alert(loading)
  
  return (
    <Formik
      initialValues={login_initial_values}
      validationSchema={loginSchema}
      onSubmit={(values) => {
        dispatch(thunks.doSignIn({
          email: values.email,
          password: values.password,
          device_token: 'eee'
        }))
        // bank ? navigation.navigate('Bank') : navigation.navigate('app')
      }}>
      {props => (
        <KeyboardAwareScrollView style={{ height: h }}>
          <View style={{ flex: 1 }}>

            <Animated.View exiting={FadeOut.duration(1000)}>
              <InputView
                {...props}
                placeholder="Email"
                values={props.values}
                name="email"
              />
              <InputView
                {...props}
                placeholder="Password"
                values={props.values}
                name="password"
                secureTextEntry
              />
              <Text onPress={() => { navigation.navigate('forgotPassword') }} style={styles.forgot}>Reset Password?</Text>
            </Animated.View>

            <Animated.View exiting={FadeOut.duration(1000)}>
              <Button
                style={{ marginTop: h * 0.16 }}
                type="primary"
                label="Sign in"
                isLoading={loading}
                onPress={() => {
                  props.handleSubmit();
                  // setbank(false)
                  // navigation.navigate('app')
                }}
              />
              <Button
                style={{ marginTop: 5 }}
                type="primary"
                label="Bank Sign in"
                onPress={() => {
                  setbank(true)
                  // navigation.navigate('Bank')
                  // props.handleSubmit();
                }}
              />
              {/* <TouchableOpacity
                onPress={() => {
                  RNAnimated.timing(moveLogo, {
                    toValue: {
                      x: 0,
                      y: h / 6.6,
                    },
                    useNativeDriver: true,
                  }).start(finished => { });
                  setTimeout(() => {
                    setRegister(true);
                  }, 500);
                }}> */}
              <Text onPress={() => navigation.navigate('createAccount')} style={styles.create}>Create Account</Text>
              {/* </TouchableOpacity>*/}
            </Animated.View>

          </View>
        </KeyboardAwareScrollView>
      )}
    </Formik>
  );
};

export default FormSection;
