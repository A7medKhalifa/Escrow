import {
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import InputView from 'components/molecules/Input';
import { Formik } from 'formik';
import { OTP_initial_values } from 'src/formik/initial_values';
import { OTPScheme } from 'src/formik/schema';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Button from 'components/molecules/Button';
import { h } from 'values/Dimensions';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useAppDispatch } from 'redux/store';
import thunks from 'redux/auth/thunks';
import { useLoadingSelector } from 'redux/selectors';
import Auth, { selectDoneVerified } from 'redux/auth';
import { useSelector } from 'react-redux';

const FormSection = ({
}: {
  }) => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const DoneVerified = useSelector(selectDoneVerified)
  const loading = useLoadingSelector(thunks.doVerifyCode)
  const { email }: any = useRoute().params;

  useEffect(() => {
    dispatch(Auth.changedoneForget(false))
  }, [navigation])

  useEffect(() => {
    DoneVerified && navigation.navigate('ResetPassword', { email })
  }, [DoneVerified])
  return (
    <Formik
      initialValues={OTP_initial_values}
      validationSchema={OTPScheme}
      onSubmit={values => {
        dispatch(thunks.doVerifyCode({
          email: email,
          code: values.OTP
        }))
      }}>
      {props => (
        <KeyboardAwareScrollView style={{ height: h }}>
          <View style={{ flex: 1 }}>
            <InputView
              {...props}
              placeholder="OTP"
              values={props.values}
              name="OTP"
              keyboardType='decimal-pad'
              maxLength={4}
            />

            <Button
              isLoading={loading}
              style={{ marginTop: h * 0.2 }}
              type="primary"
              label="Submit"
              onPress={() => {
                props.handleSubmit();
              }}
            />
          </View>
        </KeyboardAwareScrollView>
      )}
    </Formik>
  );
};

export default FormSection;
