import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Switch
  } from 'react-native';

  function Top(){
    const [mode, setMode] = useState(false);
    
    var bgCl, txtCl = null;

    if (mode===false){
        bgCl="white";
        txtCl="black";
    } else {
        bgCl = "black";
        txtCl = "white";
    }
   
    return (
        <View style={setStyle(bgCl,txtCl)}>
            <View>
                <View>
                    <Text style={setStyle(bgCl,txtCl)}>Night Mode</Text>
                    <Switch
                        onValueChange={setMode}
                        value={mode}>
                    </Switch>
                </View>
            </View>
        </View>
    )    
    };
    
function setStyle(bgCl,txtCl){
    return{
        backgroundColor: bgCl,
        color: txtCl
    }
}
  

  export default Top;