import React from 'react';
import { TouchableOpacity,Text,View } from 'react-native';
import { styles } from '../styles/mainstyles';
import { Ionicons,AntDesign,SimpleLineIcons } from '@expo/vector-icons';



const incCounter = (setCounter,counter) => {
    if(counter < 99){
        setCounter(counter+1);
    }else{
        setCounter(counter);
    }
}

const decCounter = (setCounter,counter) => {
    if(counter == 0){
        setCounter(counter);
    }
    else{
        setCounter(counter-1);
    }
}

const Counter = (props) => {



    return (
        <View style={styles.counterView}>
            <TouchableOpacity onPress={()=>incCounter(props.setCounter,props.counter)} style={styles.counterButton}>
            <AntDesign name="pluscircleo" size={30} color="#a1a1a1" />
            </TouchableOpacity>

            <Text style={styles.counterText}>{props.counter}</Text>
        
            <TouchableOpacity onPress={()=>decCounter(props.setCounter,props.counter)} style={styles.counterButton}>
            <AntDesign name="minuscircleo" size={30} color="#a1a1a1" />
            </TouchableOpacity>
        </View>
    )



}

export default Counter;
