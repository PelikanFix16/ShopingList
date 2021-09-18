import React from 'react';
import {TouchableOpacity,Text} from 'react-native';
import { styles } from '../styles/mainstyles';
import { Ionicons } from '@expo/vector-icons';


const iconSelect = (icon,color,size) => {
 
    switch(icon){
        case "ADD":
            return <Ionicons name="add" color={color} size={size}/>
        default:
            return <Ionicons name="add" color="white" size={30}/> 
    }
}


const CircleButton = (props)=> {
    return(
        <TouchableOpacity onPress={()=>{props.add()}} style={[styles.circleButton]}>
            {iconSelect(props.iconName,props.color,props.size)}
        </TouchableOpacity>
    );

}


export default CircleButton