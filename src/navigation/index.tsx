

import React, { useEffect, useMemo } from 'react';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import NeedsInternetConnection from 'components/organisms/NeedsInternetConnection';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAppDispatch } from '../redux/store';
import { StatusBar } from 'react-native';
import COLORS from 'values/colors';
import { selectIsDarkMode } from 'redux/DarkMode';
import BankStack from './BankStack';
import { selectType, selectAuth } from 'redux/auth';

type TRootStack = {
  auth: undefined;
  app: undefined;
  Bank: undefined;
};
const RootStack = createNativeStackNavigator<TRootStack>();

const NavigationHandler = () => {
  const dispatch = useAppDispatch();
  const isDarkMode = useSelector(selectIsDarkMode);
  const Type = useSelector(selectType);
  const logged = useSelector(selectAuth);

  const renderSwitch = useMemo(() => {
    return (
      <RootStack.Navigator initialRouteName={'auth'}>
        {!logged && <RootStack.Screen
          component={AuthStack}
          name="auth"
          options={{ headerShown: false }}
        />
        }
        {
          Type == 1 ?
            <RootStack.Screen
              options={{ headerShown: false }}
              component={AppStack}
              name="app"
            />
            :
            <RootStack.Screen
              component={BankStack}
              name="Bank"
              options={{ headerShown: false }}
            />
        }


      </RootStack.Navigator>
    );

  }, [Type]);

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? COLORS.darkMode : COLORS.white}
      />
      <SafeAreaProvider>
        <NavigationContainer>
          <NeedsInternetConnection>{renderSwitch}</NeedsInternetConnection>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
};

export default NavigationHandler;
