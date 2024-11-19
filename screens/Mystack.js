
import React, { Component } from 'react';
 
import { StyleSheet, View, Image, Button,TouchableOpacity } from 'react-native';

 
export default class Mystack extends Component{
 
  constructor(props){
 
    super(props);
 
    this.state={
 
      imageURL : 'https://www.holidayeducationist.com/wp-content/uploads/2020/12/a-for-words-vocabulary-kids.png',
      image1 : 'https://www.holidayeducationist.com/wp-content/uploads/2020/12/a-for-words-vocabulary-kids.png'
 
    }
    
   




  }

  Load_New_Image1=()=>{
 
    this.setState({
 
      imageURL : 'https://thumbs.dreamstime.com/z/alphabet-letter-pictures-cute-colorful-set-illustrations-words-printable-sheet-50724033.jpg',
     image1 : 'https://i.pinimg.com/736x/da/57/11/da5711e2869d4d059ba50c734747af5a.jpg'
    })
  }


 
  Load_New_Image=()=>{
 
    this.setState({
 
      imageURL : 'https://thumbs.dreamstime.com/z/alphabet-letter-pictures-cute-colorful-set-illustrations-words-printable-sheet-50724033.jpg',
     image1 : 'https://i.pinimg.com/736x/25/77/4c/25774c6d034e37bc7987a261e8a90084.jpg'
    })
  }
    
    render() {
 
      return (
    
          
        <View>
          <View>
           <TouchableOpacity
             onPress={this.state.image1} >
              <Image 
              source = {{ uri: this.state.imageURL }}
 
              style = {styles.myImage}/>
             
              </TouchableOpacity>
              <TouchableOpacity
             onPress={this.Load_New_Image1} >
              <Image 
              source = {{ uri: this.state.image1 }}
 
              style = {styles.myImage}/>
             
              </TouchableOpacity> 
           </View> 
      </View>
             
            
          
          
      
                
        
              
      );
    }
   }
    
   const styles = StyleSheet.create({
    
   MainContainer :{
 
   justifyContent: 'center',
   alignItems: 'center',
   flex:1,

   margin: 10
    
   },
 
   myImage:{
    width:150,
    height:150,
    alignSelf:'left',
    borderRadius:75,
    borderColor:'white',
    borderWidth:3
 
   }
    
   });