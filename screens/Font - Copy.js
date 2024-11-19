import React from 'react'
import{Text,Button,View,StyleSheet,TextInput,Image} from 'react-native'
export default function Font(props){
   
    
    


  return(
      <View style={styles.container}>
          <Text>Font family converter</Text>
        <TextInput placeholder="Enter any text"style= {{color:props.color}} />
        {/* <Image source={require('./caller.jpg')} style={{}}/> */}
            <View style={{marginRight:20}}>
         <Button title="click me"></Button>
           </View>
      </View>
  );}
const styles=StyleSheet.create({
    container:{
        flex:1
        
    
    },
    Button1:{
    height:10,
    width:10,
    backgroundcolor:'red'

    },
    // big:{
    //    height:50,
    //    width:50
    myImage:{
        width:150,
        height:150,
        alignSelf:'left',
        borderRadius:75,
        borderColor:'white',
        borderWidth:3,
    }
})

