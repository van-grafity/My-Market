import React, { Component } from 'react';
import { View, Text } from 'react-native';
// navigation
import { createStackNavigator, createAppContainer } from 'react-navigation'
// view
import Welcome from './view/Welcome'
import Login from './view/Login'
import Register from './view/Register'
import ForgotPassword from './view/ForgotPassword'
import Home from './view/Home'
import Detail from './view/Detail'
import Verification from './view/Verification'
import Dashboard from './view/Dashboard'
import Places from './view/Places'

const WelcomeStack = createStackNavigator({
    Welcome: { screen: Welcome }
}, {
    headerMode: 'none'
})

const LoginStack = createStackNavigator({
    Login: { screen: Login },
    Register: { screen: Register },
    Verification: { screen: Verification },
    ForgotPassword: { screen: ForgotPassword },
    Home: { screen: Home },
    Detail: { screen: Detail },
    Dashboard: {screen: Dashboard},
    Places: {screen: Places}
}, {
    headerMode: 'none'
})

const InitialStack = createStackNavigator({
    WelcomeStack: { screen: WelcomeStack },
    LoginStack: { screen: LoginStack }
}, {
    initialRouteName: 'WelcomeStack',
    headerMode: 'none'
})

export default createAppContainer(InitialStack)