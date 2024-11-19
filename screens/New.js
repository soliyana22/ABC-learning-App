import {TextInput, Text, View} from 'react-native';
import { Component } from 'react';
export default function New(){
return(
  <View>
     <Text>Hello i am...</Text>
     <TextInput style={{
        height:40,
        borderColor:white,
        borderWidth:1
     }}
        defaultValue="name me"
     />
  
  
  </View>


)


}
