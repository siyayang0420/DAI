import React,{useState} from 'react';
import {View, Text,Image} from 'react-native';
import Mid from '../comps/Mid'
import TopSiya from '../comps/Top-Siya'
import Bot from '../comps/Bot'
import Top from '../comps/Top';
import Controls from '../comps/Controls';



function Main(){
    const[bg, setBG] = useState('#7BA3A8');
    const[showImg, setShowImg] = useState('false');
    var img = null;
    if (showImg==true){
        img = < Image
        source ={{uri: "https://timesofindia.indiatimes.com/thumb/msid-67586673,width-800,height-600,resizemode-4/67586673.jpg" }}
        style ={{width: 100 , height: 100}}
        />
    } else if(showImg==false){
        img = null;
    }

    return(
    <View style={{backgroundColor:bg}}>
    <TopSiya />
      <Top />
      <Mid />
      <Bot />
      <Controls
        setBG={setBG}
        setShowImg={setShowImg}
        bg={bg}
      />
      <View style={{alignItems:'center', justifyContent:'center'}}>
        {img}
      </View>
      
    </View>
    );
};

export default Main;