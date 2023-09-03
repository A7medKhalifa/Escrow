import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from 'screens/Auth/Login';
import SignUp from 'screens/Auth/SignUp';
import UnderReview from 'screens/Auth/UnderReview';
import FaceRecognition from 'screens/Auth/FaceRecognition';
import ForgotPassword from 'screens/Auth/ForgotPassword';
import CreateAccount from 'screens/Auth/CreateAccount';
import RegistrationAccepted from 'screens/Auth/RegistrationAccepted';
import OTP from 'screens/Auth/OTP';
import ResetPassword from 'screens/Auth/ResetPassword';

export type TAuthStack = {
  login: undefined;
  signUp: undefined;
  underReview: undefined;
  RegistrationAccepted: undefined;
  faceRecognition: undefined;
  forgotPassword: undefined;
  createAccount: undefined;
  OTP: undefined;
  ResetPassword: undefined;
};

const Stack = createNativeStackNavigator<TAuthStack>();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="login">
      <Stack.Screen
        name="login"
        component={Login}
      />
      <Stack.Screen
        name="createAccount"
        component={CreateAccount}
      />
      <Stack.Screen
        name="signUp"
        component={SignUp}
      />
      <Stack.Screen
        name="underReview"
        component={UnderReview}
      />
      <Stack.Screen
        name="RegistrationAccepted"
        component={RegistrationAccepted}
      />

      <Stack.Screen
        name="faceRecognition"
        component={FaceRecognition}
      />
      <Stack.Screen
        name="forgotPassword"
        component={ForgotPassword}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
      />
      <Stack.Screen
        name="OTP"
        component={OTP}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
