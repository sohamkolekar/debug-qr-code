import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Transaction from './screens/BookTransactionScreen';
import Search from './screens/SearchScreen'

export default function App() {
  return (
    <AppContainer/>
  );
}

const TabNavigator=createBottomTabNavigator({
  Transaction:{screen:Transaction},
  Search:{screen:Search}
})

const AppContainer=createAppContainer(TabNavigator)