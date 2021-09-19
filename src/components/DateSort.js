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
        <View style={styles.dateSortContainer}>
            <TouchableOpacity onPress={()=>{event()}} style={styles.dateSortButton}>
                <Text style={{fontSize:24,fontWeight:"200"}}>Date</Text>
                <AntDesign style={{marginTop:5,marginLeft:"5%"}} name={iconName} size={10} color="black" />

            </TouchableOpacity>
        </View>
    )

}


export default DateSort;
