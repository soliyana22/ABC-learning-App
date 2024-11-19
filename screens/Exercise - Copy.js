import React from 'react'
import{View,Text,StyleSheet} from 'react-native';
export default function Exercise(){
     return(
      <View style={styles.container}>
        <Text>first exercise</Text>
        {/* <Button>click me</Button> */}
      </View>

     )
     const styles=StyleSheet.create({
         container:{
             flex:1,
             backgroundColor:Yellow
         }
    //      myText:{
    //          color:black,
    //          fontSize:12
    //      }
    //  })
})
}