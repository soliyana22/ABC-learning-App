//import { StatusBar } from 'expo-status-bar';
import {ImageBackground,TextInput,StyleSheet, Text, View,Image} from 'react-native';
import { Button } from 'react-native'
import { Component } from 'react';
import { ScrollView } from 'react-native-web';
export default class Customcad extends Component {
 
 render()  { return (

<View style={this.props.constyle}>
<h1 style={this.props.orgstyle}>{this.props.orgtitle}</h1>
<Image source={this.props.url} style={this.props.imagestyle}></Image><br></br><br></br>
<TextInput style={this.props.inputstyle} placeholder={this.props.fname} ></TextInput>
<TextInput style={this.props.inputstyle} placeholder={this.props.lname} ></TextInput>
<Text> <TextInput style={this.props.inputstyle1} placeholder={this.props.password} ></TextInput><button style={this.props.forgetbtn}>Forget?</button>
</Text>
<Text><Text >No Acount ? </Text><button style={this.props.btn}>Sign Up</button>                                              <button onClick={alert('')} style={this.props.btn}>Log in </button></Text>

</View>
  );}
}
