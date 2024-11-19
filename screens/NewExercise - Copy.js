import React from 'react'
import{View,StyleSheet,Text}from 'react-native'

export default function NewExercise(){
    return(
        <View style={styles.container}>
            <Text style={styles.textCont}>Welcome to my mobile</Text>
          <TextInput placeholder="enter image size"></TextInput>
          
          
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black'
    },
textCont:{
   flex:1,
   height:70,
   JustifyContent:'center',
   backgroundColor:'red'
}
})
