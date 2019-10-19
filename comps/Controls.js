import React , {useState} from 'react';
import {View, Text,TextInput, Button} from 'react-native'

function Controls(props){
    const [value, onChangeText] = useState('yellow');
    return(
        <View style={{alignItems:'center', justifyContent: 'center'}}>
            < TextInput 
            style={{borderColor:'#d3d3d3', borderWidth: 2,
            height:35,
            width: 200
            }}
            onChangeText={(value)=>{props.setBG(value)}} />
            < Button title='bg color and cat' onPress ={()=>{props.setShowImg
            (true)}} />
            < Text >I am using the color {props.bg}</ Text >
        </View>
    )
}
export default Controls;