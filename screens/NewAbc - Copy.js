import React ,{useState} from 'react'
import{Button,View,Image,ImageBackground,TouchableOpacity } from 'react-native'




export default function NewAbc(){

const white = require('./letterA.jpg')
const black = require('./letterB.jpg')
const shirts = {white,black }

const Shirts = () =>{
    const [selected, setSelected] = useState(shirts.white)
};
   return(
       <View style={styles.wrap}>
           <img src={selected} alt="the image is not displayed"/>
           <TouchableOpacity onPress={() => setSelected(shirts.black)} styles={styles.selected.wrap}> 
           <Image source={black} style={{width:100,height:100}}/>
           </TouchableOpacity>
           </View>
  
   )
}