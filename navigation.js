import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigation, createStackNavigator} from 'react-navigation-stack';
import Second from './Second';
import App from './App';

const StackNav = createStackNavigator({
  Second: Second,
  Card: App
});

const MyNavigator = createAppContainer(StackNav);

export default class Navigation extends Component {
  render(){
    return(<MyNavigator/>)
  }
}