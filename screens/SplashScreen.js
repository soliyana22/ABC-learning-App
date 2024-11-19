import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, ImageBackground } from "react-native";
import AbcLearning from "./AbcLearning";
const SplashScreen = () => {
    const [show, setShow] = useState(false);
    useEffect(
        () => {
          let timer1 = setTimeout(() => setShow(true), 5000);
    
          // this will clear Timeout
          // when component unmount like in willComponentUnmount
          // and show will not change to true
          return () => {
            clearTimeout(timer1);
          };
        },
        // useEffect will run only one time with empty []
        // if you pass a value to array,
        // like this - [data]
        // than clearTimeout will run every time
        // this value changes (useEffect re-run)
        []
      );
    return show ?(<AbcLearning/>):(
        <>
            <Image source={require('./splashscreen.jpg')} style={{ width: '100%', height: '100%' }} />
            {/* {setTimeout(<AbcLearning />,5000)} */}
        </>
    )
}
export default SplashScreen;
