/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Component1 from './app/components/Component1/Component1';


export default class myapp extends Component {
  render() {
    return (
      <View >
        <Component2 />
      </View>
    );
  }
}



AppRegistry.registerComponent('myapp', () => myapp);
