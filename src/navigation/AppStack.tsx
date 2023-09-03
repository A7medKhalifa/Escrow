import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from 'screens/App/Dashboard';
import RecentDisputesScreen from 'screens/App/RecentDisputes';
import SupplierDetailsScreen from 'screens/App/SupplierDetails';
import EscrowDetailsScreen from 'screens/App/EscrowDetails';
import WalletScreen from 'screens/App/Wallet';
import CreateEscrowScreen from 'screens/App/CreateEscrow'
import MilestonesScreen from 'screens/App/Milestones';
import MilestonesTypeScreen from 'screens/App/MilestonesType';
import NotificationsScreen from 'screens/App/Notifications';
import ExpendituresScreen from 'screens/App/Expenditures';
import InviteSupplierScreen from 'screens/App/InviteSupplier';
import DepositFundScreen from 'screens/App/DepositFund';
import ReceiptScreen from 'screens/App/Receipt';
import Escrowscreen from 'screens/App/Escrow';
import UploadDocumentScreen from 'screens/App/UploadDocument';
import SellerConfirmedScreen from 'screens/App/SellerConfirmed';

export type TAppStack = {
  Dashboard: undefined;
  Wallet: undefined;
  RecentDisputes: undefined;
  Escrow: undefined;
  SupplierDetails: undefined;
  CreateEscrow: undefined;
  CreatePackage: undefined;
  Milestones: undefined;
  MilestonesType: undefined;
  Notifications: undefined
  Expenditures: undefined;
  InviteSupplier: undefined;
  DepositFund: undefined;
  Receipt: undefined;
  UploadDocument: undefined;
  SellerConfirmed: undefined;
};

const Stack = createNativeStackNavigator<TAppStack>();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Dashboard">

      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
      />
      <Stack.Screen
        name="Wallet"
        component={WalletScreen}
      />
      <Stack.Screen
        name="RecentDisputes"
        component={RecentDisputesScreen}
      />
      <Stack.Screen
        name="Escrow"
        component={Escrowscreen}
      />
      <Stack.Screen
        name="Expenditures"
        component={ExpendituresScreen}
      />
      <Stack.Screen
        name="SupplierDetails"
        component={SupplierDetailsScreen}
      />
      <Stack.Screen
        name="CreateEscrow"
        component={EscrowDetailsScreen}
      />
      <Stack.Screen
        name="CreatePackage"
        component={CreateEscrowScreen}
      />
      <Stack.Screen
        name="Milestones"
        component={MilestonesScreen}
      />
      <Stack.Screen
        name="MilestonesType"
        component={MilestonesTypeScreen}
      />
      <Stack.Screen
        name="Notifications"
        component={NotificationsScreen}
      />
      <Stack.Screen
        name="InviteSupplier"
        component={InviteSupplierScreen}
      />
      <Stack.Screen
        name="DepositFund"
        component={DepositFundScreen}
      />
      <Stack.Screen
        name="Receipt"
        component={ReceiptScreen}
      />
      <Stack.Screen
        name="UploadDocument"
        component={UploadDocumentScreen}
      />
      <Stack.Screen
        name="SellerConfirmed"
        component={SellerConfirmedScreen}
      />

    </Stack.Navigator>
  );
};

export default AppStack;
