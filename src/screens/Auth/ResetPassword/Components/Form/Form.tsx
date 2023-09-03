import {
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import InputView from 'components/molecules/Input';
import { Formik } from 'formik';
import { resetPassword_initial_values } from 'src/formik/initial_values';
import { resetPasswordScheme } from 'src/formik/schema';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Button from 'components/molecules/Button';
import { h } from 'values/Dimensions';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useAppDispatch } from 'redux/store';
import thunks from 'redux/auth/thunks';
import { useLoadingSelector } from 'redux/selectors';
import { useSelector } from 'react-redux';
import Auth from 'redux/auth';

const FormSection = ({

}: {

  }) => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const loading = useLoadingSelector(thunks.changePassword)
  const { email }: any = useRoute().params;

  useEffect(() => {
    dispatch(Auth.changeDoneVerified(false))
  }, [navigation])

  return (
    <Formik
      initialValues={resetPassword_initial_values}
      validationSchema={resetPasswordScheme}
      onSubmit={values => {
        dispatch(thunks.changePassword({
          email: email,
          password: values.password,
          password_confirmation: values.confirmPassword
        }))
      }}>
      {props => (
        <KeyboardAwareScrollView style={{ height: h }}>
          <View style={{ flex: 1 }}>
            <InputView
              {...props}
              placeholder="New password"
              values={props.values}
              name="password"
              secureTextEntry
            />
            <InputView
              {...props}
              placeholder="Confirm new password"
              values={props.values}
              name="confirmPassword"
              secureTextEntry
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
