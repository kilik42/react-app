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
  View,
  TextInput,
  Switch
} from 'react-native';
import Component1 from './app/components/Component1/Component1';



export default class Component3 extends Component {
  constructor(){
    super();
    this.state = {
      textValue: 'hello',
      switchValue: false
    }

  }
  onChangeText(value){
    this.setState({
      textValue:value
    });
  }
  onSubmitEditing(){
    console.log('input submitted');
  }
  onSwitchChange(value){
    this.setState({
      switchValue:value
    })
  }



  render() {
    return (
      <View >

      <TextInput
        placeholder= "Enter Text"
        value = {this.state.textValue}
        onChangeText = {(value)=> this.onChangeText(value)}
        onSubmitEditing={this.onSubmit}
      />
      <Text >{this.state.textValue}</Text>

      <Switch
        value={this.state.switchValue}
        onValueChange={(value) =>this.onSwitchChange}
      />
      </View>
    );
  }
}



AppRegistry.registerComponent('Component3', () => Component3);

// 59:34
