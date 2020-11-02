
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottonTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import SearchScreen from './screens/SearchScreen';
import TransactionScreen from './screens/TransactionScreen';

export default class App extends React.Component{
  render(){
    return(
    <AppContainer/>

    )

  }

}

const tabNavigator=createBottonTabNavigator({
  Transaction:{screen:TransactionScreen},
  Search:{screen:SearchScreen}
})
 const AppContainer=createAppContainer(tabNavigator);