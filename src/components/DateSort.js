import React from 'react';
import { TouchableOpacity,Text,View} from 'react-native';
import { styles } from '../styles/mainstyles';
import { AntDesign } from '@expo/vector-icons';


const DateSort = ({icon,event}) => {
    let iconName = "";
    if(icon){
        iconName = "caretup"
    }else{
        iconName = "caretdown";
    }

    return (
        <View testID="DateSort" style={styles.dateSortContainer}>
            <TouchableOpacity testID="callButton" onPress={()=>{event()}} style={styles.dateSortButton}>
                <Text testID="title" style={{fontSize:24,fontWeight:"200"}}>Date</Text>
                <AntDesign testID="icon" style={{marginTop:5,marginLeft:"2%"}} name={iconName} size={10} color="black" />

            </TouchableOpacity>
        </View>
    )

}


export default DateSort;
