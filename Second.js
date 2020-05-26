import React, { Component } from 'react';
import { Text, View ,StyleSheet,TextInput, Button } from 'react-native';

import {enableScreens} from 'react-native-screens';
enableScreens()

export default class Second extends React.Component {

  state={
    firstname:'',
    secondname:'',
    DOB:'',
    Quote:''
  }
   render() {

    const data ={firstname: this.state.firstname,
      secondname: this.state.secondname,
      DOB: this.state.DOB,
      Quote: this.state.Quote}

     return (
       <View style={styles.parent}>
         
         <View style={styles.child}>
         <Text style={[styles.child,{flex:0,fontSize:25,textTransform:'uppercase',fontWeight:'bold'}]}>Birthday Card Creator</Text>
         <TextInput
            style={styles.input}
            keyboardType='default'
            placeholder='First Name'
            autoCapitalize='none'
            onChangeText={firstname => this.setState ({ firstname})}
            value={this.state.firstname}
         ></TextInput>

         <TextInput
            style={styles.input}
            keyboardType='default'
            placeholder='Last Name'
            autoCapitalize='none'
            onChangeText={secondname => this.setState ({ secondname})}
            value={this.state.lastname}
         ></TextInput>

          <TextInput
            style={styles.input}
            keyboardType='numeric'
            placeholder='Year'
            autoCapitalize='none'
            onChangeText={DOB => this.setState ({ DOB})}
            value={this.state.DOB}
         ></TextInput>

          <TextInput
            style={styles.input}
            keyboardType='default'
            placeholder='Quote'
            autoCapitalize='none'
            onChangeText={Quote => this.setState ({ Quote})}
            value={this.state.Quote}
         ></TextInput>

         <Button
            title = 'submit'
            onPress={() => this.props.navigation.navigate('Card',{ data })}>              
         </Button>


         </View>

       </View>
      );
    }
  }

 
  const styles = StyleSheet.create({

    parent:{
      flex:1,
      flexDirection:'column',
      backgroundColor:'white',
      padding:10,
      alignItems:'center',
      justifyContent:'center'
    },

    child:{
      backgroundColor:'white',
      alignItems:'stretch',
      justifyContent:'center'
    },

    input:{
      borderColor:'grey',
      borderWidth:2,
      height:40,
      fontSize:15,
      color:'blue',
      borderRadius:8,
      paddingLeft:15,
      margin:10
    }
  })
