import React, { Component } from 'react';
import { Text, View ,StyleSheet ,StatusBar,Image } from 'react-native';


export default class App extends React.Component {
   render() {

    const item = this.props.navigation.getParam('data')
     return (
       <View style={styles.parent}>
         <StatusBar barStyle='light-content' backgroundColor = 'green'/>

         <View style={[styles.child,{backgroundColor:'pink',flex:2}]}>
     <Text style={styles.headingtext}> Hello {item.firstname} {item.secondname} !</Text>
         </View>
         <View style={styles.child1}>
         <Text style={[styles.bodytext,{justifyContent:'center'}]}>H A P P Y   B I R T H D A Y  </Text>
           <Image style={{height:250, width:250}}
               source={require('./App/Source/cake.jpg')}/>
         <Text style={[styles.bodytext,{justifyContent:'center'}]}> {item.Quote} </Text>  
         </View>
         <View style={styles.child2}>
           <Text style={[styles.bodytext,{color: 'white',fontStyle:'italic',justifyContent:'center'}]}>“Hope your special day brings you all that your heart desires! Here’s wishing you a day full of pleasant surprises!       Happy birthday!” </Text>
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
    alignItems:'stretch',
    justifyContent:'center'
  },

  child:{
    flex:2,
    flexDirection:'row',
    backgroundColor:'powderblue',
    alignItems:'center',
    justifyContent:'center',
    padding:40,
    alignItems:'center'
  },

  child1:{
    flex:13,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    padding:10,
    alignItems:'center'
  },

  child2:{
    flex:-1,
    backgroundColor:'brown',
    alignItems:'center',
    justifyContent:'center',
    padding:10,
    
    fontStyle:'italic',
    alignItems:'center'
  },

  headingtext:{
    fontSize: 40,
    color : 'white',
    fontWeight:"bold",
    fontStyle:'normal',
    textTransform:'uppercase'
  },

  bodytext: {
    fontSize:25,
    color: 'black',
    fontWeight:'normal',
    padding:40,
    fontStyle: 'normal',
    alignItems:'center',
    justifyContent:'center'
    
  }
})  
