import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, Switch} from 'react-native';
import Main from '../comps/Main';


function Mt(){
    const [changeSwitch, setChangeSwitch] = useState(false);
    const [page, setPage] = useState(2);
    if(page===2){
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
           <Button title='Back' onPress={()=>{
             setPage(1);
         }}/>
           
       </View>
    
        )
    };  
    if(page === 1){
        return(
            <View >
                <Main/>
            </View>
        )
    };

    }
    const styles = StyleSheet.create({
        container:{
            width:'100%',
            height:'100%',
            justifyContent:'center',
            alignItems:'center'
        }
    })
    

export default Mt;