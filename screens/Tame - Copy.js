
import {TextInput,Text, View,StyleSheet,Button} from 'react-native';
import React, { useState } from 'react';
 export default function Converter(){
  
    const [Money,Setmoney]=useState('');
    //const [Birr,Setbirr]=useState('');
    const [Result,Setresult]=useState('');
const Br=()=>{
   var b= Money*51.40
  
   Setresult(b);
   
}
const Dr=()=>{
    var d= Money/51.40
    Setresult(d);
}
return(
    <View style={{}}>
<View style={{flexDirection:'row',margin:100}}>
<View style={{marginRight:20}}>
    <Button
    title='convert to birr'
    onPress={Br}
    />
</View>
  <View style={{marginRight:20}}>
      <TextInput
      placeholder='Enter the amount here'
    style={{backgroundColor:'white', padding:9}}
    onChangeText={Setmoney} />
  {/* <TextInput
      placeholder='Enter the amount of Birr'
    style={{backgroundColor:'white', padding:9}} /> */}
  </View>
<View>
    <Button
    title='convert to dollar'
    onPress={Dr}
/>

</View>
</View>
<View style={{marginLeft:250,marginTop:-70}}>
    <Text style={{fontWeight:'bold'}}>result: {Result}</Text>
</View>
</View>


);

}