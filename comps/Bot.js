import React, {useState} from 'react';
import {View, Text, Button, StyleSheet,TextInput, Alert} from 'react-native';


function Bot(){
    const [value, onChangeText] = useState('Useless Placeholder');
    return(
        <View style={styles.container}>
            
            <TextInput
            style={{ height: 45, width: 333, backgroundColor: '#ededed',borderRadius:20}}
            onChangeText={text => onChangeText(text)}
            value={value}
            ></TextInput>
           
            <Button 
            title='Click'
            onPress={()=>Alert.alert(value)}
            ></Button>
        </View>
    );
};


const styles = StyleSheet.create({
    container:{
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop: 100,
    },
   
})
export default Bot;