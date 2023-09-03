import {
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import InputView from 'components/molecules/Input';
import { Formik } from 'formik';
import { forgotPassword_initial_values } from 'src/formik/initial_values';
import { forgotPasswordScheme } from 'src/formik/schema';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Button from 'components/molecules/Button';
import { h } from 'values/Dimensions';
import Animated, { FadeOut } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/core';
import { useAppDispatch } from 'redux/store';
import thunks from 'redux/auth/thunks';
import { useLoadingSelector } from 'redux/selectors';
import { useSelector } from 'react-redux';
import Auth, { selectDoneForget } from 'redux/auth';

const FormSection = ({

}: {

  }) => {
  const { navigate } = useNavigation<any>();
  const dispatch = useAppDispatch();
  const loading = useLoadingSelector(thunks.doForgetPassword)
  const DoneForget = useSelector(selectDoneForget)
  const [email, setEmail] = useState('')

  useEffect(() => {
    DoneForget && navigate('OTP', { email })
  }, [DoneForget])
  useEffect(() => {
    dispatch(Auth.changeDoneVerified(false))
  }, [])
  return (
    <Formik
      initialValues={forgotPassword_initial_values}
      validationSchema={forgotPasswordScheme}
      onSubmit={values => {
        dispatch(thunks.doForgetPassword({
          email: values.email,
        }))
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
            </Animated.View>

            <Animated.View exiting={FadeOut.duration(1000)}>
              <Button
                isLoading={loading}
                style={{ marginTop: h * 0.2 }}
                type="primary"
                label="Submit"
                onPress={() => {
                  setEmail(props.values.email)
                  props.handleSubmit();
                }}
              />
            </Animated.View>
          </View>
        </KeyboardAwareScrollView>
      )}
    </Formik>
  );
};

export default FormSection;
