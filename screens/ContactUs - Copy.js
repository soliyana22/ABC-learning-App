import {TextInput,StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native'
import { Component } from 'react';
// import { ScrollView } from 'react-native-web';
export default class ContactUs extends Component {
    render()  {
        let alertMsg=()=>{
            alert("submitted successfully");
         }
        return (
        
    <View style={this.props.containerStyle}>
    <h1 style={this.props.headerStyle}>{this.props.headerTitle}</h1>
    
    <TextInput style={this.props.inputstyle} placeholder={this.props.Name} ></TextInput>
    <TextInput style={this.props.inputstyle} placeholder={this.props.Email} ></TextInput>
    <Text> <TextInput style={this.props.inputstyle1} placeholder={this.props.phone} ></TextInput>
    </Text>
                      <Button
         title="Submit"
         onPress={alertMsg} style={this.props.btn}/>
                                                                                                
    
    </View>
    )}
}