import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from 'screens/Bank/Dashboard';
import AquaticsApplicationScreen from 'screens/Bank/AquaticsApplication';
import NotificationsScreen from 'screens/Bank/Notifications';
import ReceiptScreen from 'screens/Bank/Receipt';
import AquaticsApplicationFundsScreen from 'screens/Bank/AquaticsApplicationFunds';
import RecipesFilterScreen from 'screens/Bank/RecipesFilter';
import OwnerDetailsScreen from 'screens/Bank/OwnerDetails';
import BeneficialDetailsScreen from 'screens/Bank/BeneficialDetails';
import HomeScreen from 'screens/Bank/Home';
import DepositFundScreen from 'screens/Bank/DepositFund';
import Escrowscreen from 'screens/Bank/Escrow';
import UploadDocumentScreen from 'screens/Bank/UploadDocument';
import MilestonesTypeScreen from 'screens/Bank/MilestonesType';

export type TBankStack = {
  Home: undefined;
  Dashboard: undefined;
  Receipt: undefined;
  AquaticsApplication: undefined;
  AquaticsApplicationFunds: undefined;
  Notifications: undefined;
  RecipesFilter: undefined;
  OwnerDetails: undefined;
  BeneficialDetails: undefined;
  DepositFund: undefined;
  Escrow: undefined;
  DownloadDocuments: undefined;
  MilestonesType: undefined;
};
const Stack = createNativeStackNavigator<TBankStack>();
const BankStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Dashboard">
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        name="Receipt"
        component={ReceiptScreen}
      />
      <Stack.Screen
        name="AquaticsApplication"
        component={AquaticsApplicationScreen}
      />
      <Stack.Screen
        name="AquaticsApplicationFunds"
        component={AquaticsApplicationFundsScreen}
      />
      <Stack.Screen
        name="RecipesFilter"
        component={RecipesFilterScreen}
      />
      <Stack.Screen
        name="OwnerDetails"
        component={OwnerDetailsScreen}
      />
      <Stack.Screen
        name="BeneficialDetails"
        component={BeneficialDetailsScreen}
      />
      <Stack.Screen
        name="Notifications"
        component={NotificationsScreen}
      />
      <Stack.Screen
        name="DepositFund"
        component={DepositFundScreen}
      />
      <Stack.Screen
        name="Escrow"
        component={Escrowscreen}
      />
      <Stack.Screen
        name="DownloadDocuments"
        component={UploadDocumentScreen}
      />
      <Stack.Screen
        name="MilestonesType"
        component={MilestonesTypeScreen}
      />

    </Stack.Navigator>
  );
};

export default BankStack;
