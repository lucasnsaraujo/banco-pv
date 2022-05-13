import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Dashboard from './screens/Dashboard'
import TransactionHistory from './screens/TransactionHistory'
import ProfileScreen from './screens/ProfileScreen'
import LanguageSelection from './screens/LanguageSelection'
import DepositScreen from './screens/DepositScreen'
import DonationScreen from './screens/DonationScreen'
import SendMoneyScreen from './screens/SendMoneyScreen'
import HelpScreen from './screens/HelpScreen'
import LoginScreen from './screens/LoginScreen'
import CreateAccount from './screens/CreateAccount'

import { StatusBar } from 'react-native';

import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

import Toast from 'react-native-toast-message';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator  } from '@react-navigation/native-stack'

import {LanguageProvider} from './context/Language';


export default function App() {
  const Stack = createNativeStackNavigator();
  StatusBar.setBarStyle('light-content', true);

  let [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_700Bold });

  if (!fontsLoaded) { 
    return <View><Text>Fontes não carregadas</Text></View>;
  }
    return (
      <LanguageProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen 
              name="Login" 
              component={LoginScreen} 
              options={{ headerShown: false }}
              />
            <Stack.Screen 
              name="Register" 
              component={CreateAccount} 
              options={{ headerShown: false }} 
              />
            <Stack.Screen 
              name="Dashboard" 
              component={Dashboard} 
              options={{ headerShown: false, gestureEnabled: false }} 
              />
            <Stack.Screen 
              name="Deposit" 
              component={DepositScreen} 
              options={{ headerShown: false }} 
              />
            <Stack.Screen 
              name="Donation" 
              component={DonationScreen} 
              options={{ headerShown: false }} 
              />
            <Stack.Screen 
              name="Help" 
              component={HelpScreen} 
              options={{ headerShown: false }} 
              />
            <Stack.Screen 
              name="Settings" 
              component={LanguageSelection} 
              options={{ headerShown: false }} 
              />
            <Stack.Screen 
              name="Profile" 
              component={ProfileScreen} 
              options={{ headerShown: false }} 
              />
            <Stack.Screen 
              name="Transfer" 
              component={SendMoneyScreen} 
              options={{ headerShown: false }} 
              />
            <Stack.Screen 
              name="Transactions" 
              component={TransactionHistory} 
              options={{ headerShown: false }} 
              />

          </Stack.Navigator>
        </NavigationContainer>
      </LanguageProvider>
  )
}

