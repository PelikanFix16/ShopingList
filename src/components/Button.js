import React from 'react';
import {TouchableOpacity,Text} from 'react-native';
import { styles } from '../styles/mainstyles';
import { Ionicons } from '@expo/vector-icons';


const iconSelect = (icon,color,size) => {
 
    
    return <Ionicons testID="icon" name={icon} color={color} size={size}/>
}


const CircleButton = ({add,iconName,color,size})=> {
    return(
        <TouchableOpacity testID="callButton" onPress={()=>{add()}} style={[styles.circleButton]}>
            {iconSelect(iconName,color,size)}
        </TouchableOpacity>
    );

}


export default CircleButton