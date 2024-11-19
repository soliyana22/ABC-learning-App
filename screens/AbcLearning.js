import React,{useState} from "react";
import  {View,Text,TouchableOpacity,Image,ImageBackground} from  "react-native";



function AbcLearning(){
const [a,setA]=useState(1);
function Image1()
{
    if(a==1)
    return(
    
       <Image source={require('./A2.jpg')} style={{width:'100%',height:'100%'}}/>
    )
    if(a==2)
    return(
    
        <Image source={require('./B2.jpg')} style={{width:'100%',height:'100%'}}/>
    )
    if(a==3)
    return(
    
        <Image source={require('./Cword.jpg')} style={{width:'100%',height:'100%'}}/>
    )
    if(a==4)
    return(
    
        <Image source={require('./Dword.jpg')} style={{width:'100%',height:'100%'}}/>
    )
    if(a==5)
    return(
    
        <Image source={require('./E2.jpg')} style= {{width:'100%',height:'100%'}}/>
    )
    if(a==6)
    return(
    
        <Image source={require('./Fword.jpg')} style= {{width:'100%',height:'100%'}}/>
    )
    if(a==7)
    return(
    
        <Image source={require('./G5.jpg')} style= {{width:'100%',height:'100%'}}/>
    )
    if(a==8)
    return(
    
        <Image source={require('./Hword.jpg')}style= {{width:'100%',height:'100%'}}/>
    )
    if(a==9)
    return(
    
        <Image source={require('./Iword.jpg')}style= {{width:'100%',height:'100%'}}/>
    )
    if(a==10)
    return(
    
        <Image source={require('./J2.jpg')} style= {{width:'100%',height:'100%'}}/>
    )
    if(a==11)
    return(
    
        <Image source={require('./Kword.jpg')} style= {{width:'100%',height:'100%'}}/>
    )
    if(a==12)
    return(
    
        <Image source={require('./Lword.jpg')} style= {{width:'100%',height:'100%'}}/>
    )
    if(a==13)
    return(
    
        <Image source={require('./M2.jpg')} style= {{width:'100%',height:'100%'}}/>
    )
    if(a==14)
    return(
    
        <Image source={require('./Nword.jpg')}style= {{width:'100%',height:'100%'}}/>
    )
    if(a==15)
    return(
    
        <Image source={require('./Oword.jpg')} style= {{width:'100%',height:'100%'}}/>
    )
    if(a==16)
    return(
    
        <Image source={require('./Pword.jpg')} style= {{width:'100%',height:'100%'}}/>
    )
    if(a==17)
    return(
    
        <Image source={require('./Qword.jpg')}style= {{width:'100%',height:'100%'}}/>
    )
    if(a==18)
    return(
    
        <Image source={require('./Rword.jpg')} style= {{width:'100%',height:'100%'}}/>
    )
    if(a==19)
    return(
    
        <Image source={require('./Sword.jpg')}style= {{width:'100%',height:'100%'}}/>
    )
    if(a==20)
    return(
    
        <Image source={require('./T2.jpg')} style= {{width:'100%',height:'100%'}}/>
    )
    if(a==21)
    return(
    
        <Image source={require('./U4.jpg')} style= {{width:'100%',height:'100%'}}/>
    )
    if(a==22)
    return(
    
        <Image source={require('./V2word.jpg')} style= {{width:'100%',height:'100%'}}/>
    )
   
    if(a==23)
    return(
    
        <Image source={require('./W3.jpg')} style= {{width:'100%',height:'100%'}}/>
    )
    if(a==24)
    return(
    
        <Image source={require('./Xword.jpg')} style= {{width:'100%',height:'100%'}}/>
    )
    if(a==25)
    return(
    
        <Image source={require('./Y3.jpg')}style= {{width:'100%',height:'100%'}}/>
    )
    if(a==26)
    return(
    
        <Image source={require('./Z5.jpg')} style= {{width:'100%',height:'100%'}}/>
    )
}

return(
    <View style={{flex:1, justifyContent:"flex-end"}}>
        {/* <ImageBackground style={ styles.imgBackground } 
    resizeMode='cover' 
    source={require('./Back2.jpg')}> */}
 <View style={{flex:8, borderWidth:5}}>
     <View>
         {/* <ImageBackground style={ {width: '100%',
    height: '100%',
    flex: 1 }} 
    resizeMode='cover' 
    source={require('./Back2.jpg')}>
        
        </ImageBackground> */}
        {Image1()}
    </View>
  </View>  
    <View style={{flex:1,borderWidth:2,flexDirection:"row"}}>
    <TouchableOpacity  style={{borderWidth:2,width:50,height:50}} onPress={()=>{setA(1)}}>
    <Image source={require('./letterA.jpg')} style={{width:50,height:50}}/>
        </TouchableOpacity>
        {/* <TouchableOpacity  style={{borderWidth:2}} onPress={()=>{setA(2)}}>Next</TouchableOpacity> */}
        <TouchableOpacity  style={{borderWidth:2,width:50,height:50}} onPress={()=>{setA(2)}}>
    <Image source={require('./letterB.jpg')} style={{width:50,height:50}}/>
        </TouchableOpacity>
        <TouchableOpacity  style={{borderWidth:2,width:50,height:50}} onPress={()=>{setA(3)}}>
    <Image source={require('./letterC.jpg')} style={{width:50,height:50}}/>
        </TouchableOpacity>
        <TouchableOpacity  style={{borderWidth:2,width:50,height:50}} onPress={()=>{setA(4)}}>
    <Image source={require('./letterD.jpg')} style={{width:50,height:50}}/>
        </TouchableOpacity>
        <TouchableOpacity  style={{borderWidth:2,width:50,height:50}} onPress={()=>{setA(5)}}>
    <Image source={require('./letterE.jpg')} style={{width:50,height:50}}/>
        </TouchableOpacity>
        <TouchableOpacity  style={{borderWidth:2,width:50,height:50}} onPress={()=>{setA(6)}}>
    <Image source={require('./letterF.jpg')} style={{width:50,height:50}}/>
        </TouchableOpacity>
        <TouchableOpacity  style={{borderWidth:2,width:50,height:50}} onPress={()=>{setA(7)}}>
    <Image source={require('./letterG.jpg')} style={{width:50,height:50}}/>
        </TouchableOpacity>
       
        
        <TouchableOpacity  style={{borderWidth:2,width:50,height:50}} onPress={()=>{setA(8)}}>
    <Image source={require('./letterH.jpg')} style={{width:50,height:50}}/>
        </TouchableOpacity>
        </View>
        <View style={{flex:1,borderWidth:2,flexDirection:"row"}} >
        <TouchableOpacity  style={{borderWidth:2,width:50,height:50}} onPress={()=>{setA(9)}}>
    <Image source={require('./letterI.jpg')} style={{width:50,height:50}}/>
        </TouchableOpacity>
        <TouchableOpacity  style={{borderWidth:2,width:50,height:50}} onPress={()=>{setA(10)}}>
    <Image source={require('./letterJ.jpg')} style={{width:50,height:50}}/>
        </TouchableOpacity>
        <TouchableOpacity  style={{borderWidth:2,width:50,height:50}} onPress={()=>{setA(11)}}>
    <Image source={require('./Kletter.jpg')} style={{width:50,height:50}}/>
        </TouchableOpacity>
        <TouchableOpacity  style={{borderWidth:2,width:50,height:50}} onPress={()=>{setA(12)}}>
    <Image source={require('./letterL.jpg')} style={{width:50,height:50}}/>
        </TouchableOpacity>
        <TouchableOpacity  style={{borderWidth:2,width:50,height:50}} onPress={()=>{setA(13)}}>
    <Image source={require('./letterM2.jpg')} style={{width:50,height:50}}/>
        </TouchableOpacity>
       
        <TouchableOpacity  style={{borderWidth:2,width:50,height:50}} onPress={()=>{setA(14)}}>
    <Image source={require('./letterN.jpg')} style={{width:50,height:50}}/>
        </TouchableOpacity>
       
        <TouchableOpacity  style={{borderWidth:2,width:50,height:50}} onPress={()=>{setA(15)}}>
    <Image source={require('./letterO.jpg')} style={{width:50,height:50}}/>
        </TouchableOpacity>
        <TouchableOpacity  style={{borderWidth:2,width:50,height:50}} onPress={()=>{setA(16)}}>
    <Image source={require('./letterP.jpg')} style={{width:50,height:50}}/>
        </TouchableOpacity>
        </View>
        <View  style={{flex:1,borderWidth:2,flexDirection:"row"}}>
        <TouchableOpacity  style={{borderWidth:2,width:50,height:50}} onPress={()=>{setA(17)}}>
    <Image source={require('./letterQ.jpg')} style={{width:50,height:50}}/>
        </TouchableOpacity>
        <TouchableOpacity  style={{borderWidth:2,width:50,height:50}} onPress={()=>{setA(18)}}>
    <Image source={require('./letterR.jpg')} style={{width:50,height:50}}/>
        </TouchableOpacity>
        <TouchableOpacity  style={{borderWidth:2,width:50,height:50}} onPress={()=>{setA(19)}}>
    <Image source={require('./letterS.jpg')} style={{width:50,height:50}}/>
        </TouchableOpacity>
       
        <TouchableOpacity  style={{borderWidth:2,width:50,height:50}} onPress={()=>{setA(20)}}>
    <Image source={require('./letterT.jpg')} style={{width:50,height:50}}/>
        </TouchableOpacity>
       
       
        <TouchableOpacity  style={{borderWidth:2,width:50,height:50}} onPress={()=>{setA(21)}}>
    <Image source={require('./letterU.jpg')} style={{width:50,height:50}}/>
        </TouchableOpacity>
        <TouchableOpacity  style={{borderWidth:2,width:50,height:50}} onPress={()=>{setA(22)}}>
    <Image source={require('./letterV.jpg')} style={{width:50,height:50}}/>
        </TouchableOpacity>
        <TouchableOpacity  style={{borderWidth:2,width:50,height:50}} onPress={()=>{setA(23)}}>
    <Image source={require('./letterW.jpg')} style={{width:50,height:50}}/>
        </TouchableOpacity>
        <TouchableOpacity  style={{borderWidth:2,width:50,height:50}} onPress={()=>{setA(24)}}>
    <Image source={require('./letterX.jpg')} style={{width:50,height:50}}/>
        </TouchableOpacity></View>
        <View style={{flex:1,borderWidth:2,flexDirection:"row"}} >
        <TouchableOpacity  style={{borderWidth:2,width:50,height:50}} onPress={()=>{setA(25)}}>
    <Image source={require('./letterY.jpg')} style={{width:50,height:50}}/>
        </TouchableOpacity>
        <TouchableOpacity  style={{borderWidth:2,width:50,height:50}} onPress={()=>{setA(26)}}>
    <Image source={require('./letterZ2.jpg')} style={{width:50,height:50}}/>
        </TouchableOpacity>
        </View>
       
    {/* <View style={{flex:8,}}>
        {Image1()}
    </View> */}
    {/* <View style={{flex:1,borderWidth:2,flexDirection:"row"}} ></View> */}
    </View>
    );}

    export default AbcLearning;
