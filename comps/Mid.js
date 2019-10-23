import React, {useState} from 'react';
import {View, Text, Picker, StyleSheet} from 'react-native';

function Mid(){
   const [changeBg, setChangeBg] = useState('#FAB');

    return(
        <View style={styles.container, {backgroundColor:changeBg}}>
            <Picker
                selectedValue={changeBg}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => setChangeBg(itemValue)
            }>
            
                <Picker.Item label='Money' value='#D9A441' />
                <Picker.Item label='Ocean' value='#61A2B3'/>
                <Picker.Item label='Happy' value='#0B9ED9'/>
                <Picker.Item label='Active' value='#F25CA2'/>
            </Picker>
        </View>
    )
    
};

const styles= StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    picker:{
        width: '100%',
        height:230,
    }
}
)


export default Mid;

