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

const Counter = ({setCounter,counter}) => {



    return (
        <View style={styles.counterView}>
            <TouchableOpacity testID="increment" onPress={()=>incCounter(setCounter,counter)} style={styles.counterButton}>
            <AntDesign testID="iconPlus" name="pluscircleo" size={30} color="#a1a1a1" />
            </TouchableOpacity>

            <Text testID="counterText" style={styles.counterText}>{counter}</Text>
        
            <TouchableOpacity testID="decrement" onPress={()=>decCounter(setCounter,counter)} style={styles.counterButton}>
            <AntDesign testID="iconMinus" name="minuscircleo" size={30} color="#a1a1a1" />
            </TouchableOpacity>
        </View>
    )



}

export default Counter;
