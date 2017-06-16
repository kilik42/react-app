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

export default class Component1 extends Component {
  constructor(){
    super();
    this.state ={
      name: 'Brad',
      showName: true,
    

    }
  }
  render() {
    let name = this.state.name ? this.state.name : 'No name';
    return (
      <View >
        <Text> {this.props.message} </Text>
        <Text>{name}</Text>
      </View>
    );
  }
}



AppRegistry.registerComponent('Component1', () => Component1);
