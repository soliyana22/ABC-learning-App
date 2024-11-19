import React from 'react'
import{Button,Text,ScrollView,TouchableOpacity,View,StyleSheet,Image,ImageBackground} from 'react-native'


export default function ABC(){
    // const [taskList,setTaskList]=useState([
    //     "send an email",
    // "read an article"]);
    //  let addTaskList=()=>{
    //      let newTask=["closing door",...taskList]
    //      setTaskList(newTask);
    //  }
    // let deleteTask=(index)=>{
    //      let newTask=[...taskList]
    //      newTask.splice(index,1);
    //      setTaskList(newTask);
    // state={
    // switchvalue:Onpress={
    // }
    // }
   const white = require('./letterA1.jpg')
     const black = require('./letterB.jpg')
     const shirts = { white, black }
    
     const Shirts = () =>{
         const [selected, setSelected] = useState(shirts.white)
    
     }
 return(

    <>
    <img src={selected} alt='shirt' />
    <button onClick={() => setSelected(shirts.black)}> Click</button>
</>
   
// <View>
//    //
//     <ImageBackground style={ styles.imgBackground } 
//                      resizeMode='cover' 
//                      source={require('./back.jpg')}>
                        
//     <ScrollView>{
//         <View style={styles.view1}>
           
//           <TouchableOpacity onPress={<Image source={require('./A.jpg')}/> }    >
//            <Image
//            source={require('./letterA1.jpg')} style={styles.myImage}
//     />
          
//         </TouchableOpacity>
//         <TouchableOpacity  >
//            <Image
//            source={require('./letterB.jpg')} style={styles.myImage}
           
           
//     />
    
          
//         </TouchableOpacity>
//         <TouchableOpacity >
//            <Image
//            source={require('./letterC.jpg')} style={styles.myImage}
//     />
          
//         </TouchableOpacity>
//         <TouchableOpacity >
//            <Image
//            source={require('./letterD.jpg')} style={styles.myImage}
//     />
          
//         </TouchableOpacity>
//         <TouchableOpacity >
//            <Image
//            source={require('./letterE.jpg')} style={styles.myImage}
//     />
          
//         </TouchableOpacity>
//         <TouchableOpacity >
//            <Image
//            source={require('./letterF.jpg')} style={styles.myImage}
//     />
          
//         </TouchableOpacity>
//     <TouchableOpacity >
//            <Image
//            source={require('./letterG.jpg')} style={styles.myImage}
//     />
          
//         </TouchableOpacity>



//     </View>
    
 
//  }
// </ScrollView>

//         </ImageBackground> 
      
       
//         </View>
 );}
const styles=StyleSheet.create({
    myImage:{
        width:150,
        height:150,
        alignSelf:'left',
        borderRadius:75,
        borderColor:'white',
        borderWidth:3
    },
    myImage1:{
        width:'100%',
        height:'100%',
        alignSelf:'center',
       
        borderColor:'white',
        borderWidth:3
     
   },
   imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1 
}, 
  view1:{
    flexDirection:'column'
  }

}
) 
 