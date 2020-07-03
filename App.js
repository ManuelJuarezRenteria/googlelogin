import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './Screens/DashboardScreen';
import LoadingScreen from './screens/LoadingScreen';
firebase.initializeApp(firebaseConfig);
export default class App extends React.Component {
  render(){
    return <AppNavigator />
    }
    }                        
const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen:LoadingScreen,
  LoginScreen:LoginScreen,
  DashboardScreen:DashboardScreen
  })
  const AppNavigator = createAppContainer
(AppSwitchNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  form: {
    flex: 1
  }
});