import React from 'react';
import {FlatList,Text,View,Dimensions,Animated} from 'react-native';
import { styles } from '../styles/mainstyles';
import { Swipeable } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import moment from 'moment';



const RenderItem = ({item,index,archivize,renderFunction,renderIcon,renderColor}) => {
    
    return (
        <Swipeable onSwipeableLeftOpen={()=>{archivize(item)}} renderLeftActions={(progress,dragX)=>renderFunction(progress,dragX,renderIcon,renderColor)}>
        <View style={styles.item}>
            <Text style={{fontWeight:'600'}}>{item.title}</Text>
 
                <View style={styles.amountView}>
                
                    <Text style={{fontWeight:'200'}}>Amount: {item.amount}</Text>
                    <Text>{moment(item.time).format("LT")}</Text>

                </View>
            
            
        </View>

        </Swipeable>
    )
}





export default RenderItem;