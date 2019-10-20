import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, Switch, TouchableOpacity, Image} from 'react-native';
import Main from '../comps/Main';


function Mt(){
    const [changeSwitch, setChangeSwitch] = useState(false);
    const [page, setPage] = useState(2);
    const [changeBg, setChangeBg] = useState('#FAB');
    if(page===2){
        return(
            <View>
            <TouchableOpacity
           style={{marginLeft:35, marginTop:50}}
            onPress={this.onPress}
            >
            <Image source={require('../images/menu.png')}  style={styles.button}/>
            </TouchableOpacity>
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
        },
        button:{
            width:30,
            height:30,
        }
       
    })
    

export default Mt;