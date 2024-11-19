import React, {useState} from 'react';
import{Text,View,Button} from 'react-native'
export default function Trial(){

  const [date, setDate] = useState(new Date())
  const [name, setName] = useState("Kofi");

  return(
      <View>
            <Text> Hello {date.name} , it is {date.toLocaleTimeString()} </Text>
            <Text>Date: {date.toLocaleDateString()}</Text>
            <Button onClick={setDate(new Date())}></Button>
      </View>
  )
}