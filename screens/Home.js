import React from "react";
import {View, Text, StyleSheet, ImageBackground, Button} from "react-native";
import { TouchableOpacity } from "react-native";
 

const image = {uri:'https://is4-ssl.mzstatic.com/image/thumb/Purple123/v4/ad/20/47/ad204742-e556-6a24-4a2d-0e9265abf713/source/512x512bb.jpg?w=200 '};
export default function Home({navigation,route}) {
    //const { msg } = route.params;
    return(
    <View style={styles.container}>
          
        <ImageBackground source={image} resizeMoTde="cover" style={styles.image}>
             
            

       <View style={styles.btnContainer}>
                <TouchableOpacity   style={styles.btn1}
                                      onPress={()=>navigation.navigate('AbcLearning')}>
                             {/* <Text style={styles.btnTitle}>Amharic</Text> */}
                </TouchableOpacity>
         </View>
     </ImageBackground> 
  </View>
    )}                 
    const styles=StyleSheet.create({
        image:{
            flex: 1,
        justifyContent: "center"
        },
        btn1:{
       
            backgroundColor:'#52ffff',
            color:'white',
            padding:20,
            margin:5,
            borderRadius:10,
            flex:1,
            flexDirection:'row',
            alignItems:"center",
            justifyContent:'center',
    
        },
        container:{
            flex:1,
        }


    })