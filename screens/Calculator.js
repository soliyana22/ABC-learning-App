
import {TextInput,Text, View,StyleSheet,Button} from 'react-native';
import React, { useState } from 'react';
 export default function Calculator(){
  
    const [Temprature,Settemprature]=useState('');
    //const [Birr,Setbirr]=useState('');
    const [Result,Setresult]=useState('');
const fah=()=>{
   var b= Temprature*1.8+32
  
   Setresult(b);
   
}
const cel=()=>{
    var d=5/9*Temprature-17.777778
    Setresult(d);
}
return(
    <View style={{backgroundColor:'black',flex:1}}>
<View style={{flexDirection:'row',margin:100}}>
<View style={{marginRight:20}}>
    <Button
    title=' to fahreneit'
    onPress={fah}
    />
</View>
  <View style={{marginRight:20}}>
      <TextInput
      placeholder='Enter the Temprature here'
    style={{backgroundColor:'black',color:'white', padding:9}}
    onChangeText={Settemprature} />
  {/* <TextInput
      placeholder='Enter the amount of Birr'
    style={{backgroundColor:'white', padding:9}} /> */}
  </View>
<View>
    <Button
    title=' to celsius'
    onPress={cel}
/>

</View>
</View>
<View style={{marginLeft:250,marginTop:-70}}>
    <Text style={{fontWeight:'bold',color:'white'}}>result:{Result}</Text>
</View>
</View>


);

}