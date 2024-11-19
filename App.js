 
console.log("dsfsdfs")
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View,Image} from 'react-native';
// import { Button} from 'react-native';
// import Customcad from './screens/ContactUs';


// export default function App() {

// return (
//  <>
// <Customcad title="Contact page"


// containerStyle={{backgroundColor:'#B0E0E6',flex:1,alignItems:'center',justifyContent:'center',color:'black'}}
// inputstyle={{width:400,height:50,borderWidth:2,marginBottom:10,borderColor:'white',color:'black'}}
// inputstyle1={{width:400,height:50,borderWidth:2,marginBottom:10,borderColor:'white',color:'black',keyboardType:numeric}}

// btn={{backgroundColor:'blue',color:'white',width:70,height:27}}
// Name="Enter your name"
// Email="Enter your email"
// phone="Enter your phone number"
// headerTitle="Contact Us"
// headerStyle={{color:'black'}}
// Submit={alert('submitted successfully')}
// />
// </>
//   );
// }
  
 
      
// import React from'react'
// import {Text} from 'react-native'
// import Task from './screens/Task'
// export default function app(){
// return(
// <Task/>
// )}

import React from 'react';
import {Text} from 'react-native'
import { Redirect } from 'react-router-dom';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from 'react-navigation/native-stack';
// import Home from './screens/Home';

import AbcLearning from './screens/AbcLearning';
import SplashScreen from './screens/SplashScreen';
 export default function app(){
   //const Stack=createNativeStackNavigator();
    return(
      // <NavigationContainer>
      // <Stack.Navigator initialRouteName='Home'>
      // <Stack.Screen 
      //     name="Home"
      //     component={Home}
      //    options={{ title: ' Home Kids Learning App' }}
      //    />
      //   <Stack.Screen name="AbcLearning" component={AbcLearning}/>
      
      
       <SplashScreen/>
      //  </Stack.Navigator>
      //  </NavigationContainer>
     );

 }
 



 {/* import {import React from 'react';
  import {Text} from 'react-native'
  import Trial from './screens/Trial';
   export default function app(){ StatusBar } from 'expo-status-bar'; */}
// import React from 'react';
// import { StyleSheet, View } from 'react-native';
// import AbcsList from '../tsi abc_app/components/AbcsList';
// import Header from '../tsi abc_app/components/Header';
// import AbcItem from '../tsi abc_app/components/AbcItem';
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Header />
//       <AbcItem />
//       <AbcsList />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });



 //import { StatusBar } from 'expo-status-bar';
 //import { StyleSheet, View } from 'react-native';
 //import ListItem from'./Component/ListItem';
//  import TopView from './TopView';
//  export default function App() {
//    return (
//        <View style={styles.mainCont}>
//                  <TopView/>
//      </View>
//    )
//  }

// const styles = StyleSheet.create({
//    mainCont: {
//     flex: 1, 
//       }
//     })
// import React from 'react';
// import {Text} from 'react-native'
// import New from '../screens/New';
// export default function app(){
//     return(
//       <New/>
//     )

// }
//import "./style.css";
//import React, { useState } from 'react';
// import white from '/public/images/A.jpg'
// import black from '/public/images/letterC.jpg'
// import grey from '/public/images/letterD.jpg'


// const App = () =>{
//     const [selected, setSelected] = useState(grey)

//    return(
//        <>
//            <img src={/images/${selected}} alt='shirt' /> 
//            <img src='/public/images/A.jpg' width='100px' height='100px' alt='shirt' />
//             <button onClick={() => setSelected(white)}> White</button>
//            <button onClick={() => setSelected(black)}> Black</button> 

//             <button onClick={() => setSelected(shirts.white)}> Click</button> 
//        </>
//    )
// }
// export default App;