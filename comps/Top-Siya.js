import React, {useState} from 'react';
import {View, Text, StyleSheet,Switch, Alert} from 'react-native';

function TopSiya(){
    const [changeSwitch, setChangeSwitch] = useState(false);

    return(
        <View style={[styles.container, {backgroundColor: changeSwitch? 'black' : 'white'} ]}>
            <Text style={{color: changeSwitch? '#FFFFFF' : 'black'}}>{changeSwitch? 'Dark Mode' : 'Day Mode'}</Text>
            <View>
            <Switch
                onValueChange={ () => {setChangeSwitch(!changeSwitch)}} 
                value={changeSwitch} 
            >
            </Switch>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        height:250,
    }
})

export default TopSiya;