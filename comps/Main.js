import React,{useState} from 'react';
import {View, Text,Image, Button} from 'react-native';
import Mid from '../comps/Mid'
import TopSiya from '../comps/Top-Siya'
import Bot from '../comps/Bot'
import Top from '../comps/Top';
import Controls from '../comps/Controls';
import Mt from '../comps/Mt'



function Main(){
    const[bg, setBG] = useState('#7BA3A8');
    const[showImg, setShowImg] = useState('false');
    var img = null;
    const [page, setPage] = useState(1);

    if(page===1){

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
          <Button title='next page' onPress={()=>{
              setPage(2);
          }}/>
          
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
    }

    //page2
    if(page === 2){
        return(
            <View >
                <Mt/>
            </View>
        )
    }

    

   
};

export default Main;