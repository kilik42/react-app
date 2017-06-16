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
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

export default class Component2 extends Component {


onPress(){
  console.log('area pressed');
}
onPress2(){
  console.log('area 2 pressed');
}
  render() {
    let name = this.state.name ? this.state.name : 'No name';
    return (
      <View>
      <View style={{styles.myView}} >

        <Text style ={{styles.myText}}>Hello Brad</Text>
      </View>
        <View style={styles.container}>

          <TouchableHighlight
            style={styles.v1}
             onPress={this.onPress}
             underLayColor="blue"
             >

            <View >

              <Text> View 1</Text>
            </View>



          </TouchableHighlight>



          <TouchableOpacity
            style={styles.v2}
            onPress ={this.onPress2}
            >
              <View >

                <Text> View 2</Text>
              </View>

          </TouchableOpacity>




            <View style={styles.v3}>

              <Text style={styles.vText}> View 3</Text>
            </View>

        </View>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    myView:{
      backgroundColor: 'blue';

    },
    myText: {
      color: 'white';
    },
    container:{
      flexDirection: 'row',
      height: 100
    },

    v1:{
      flex:1,
      backgroundColor:'red',
      padding:10
    },
    v2:{
      flex:1,
      backgroundColor:'green',
      padding:10
    },
    v3:{
      flex:1,
      backgroundColor:'black',
      padding:10,
      color: 'white'
    },
    vText:{
      color: 'white'
    }


});

AppRegistry.registerComponent('Component2', () => Component2);
