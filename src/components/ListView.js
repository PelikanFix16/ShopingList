import React from 'react';
import {FlatList,Text,View,Dimensions,Animated} from 'react-native';
import { styles } from '../styles/mainstyles';
import { Swipeable } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import moment from 'moment';

export let swipeableRef = null;


const RenderItem = ({item,index,onLeftOpen,renderFunctionLeft,
    renderIconLeft,renderColorLeft,
    renderFunctionRight,renderIconRight,renderColorRight,onRightOpen}) => {
    
    return (
        <Swipeable ref={ref=>{swipeableRef=ref;}} onSwipeableLeftOpen={()=>{onLeftOpen(item)}} 
        renderLeftActions={(progress,dragX)=>renderFunctionLeft(
        progress,dragX,renderIconLeft,renderColorLeft)}
         renderRightActions={(progress,dragX)=>renderFunctionRight(
            progress,dragX,renderIconRight,renderColorRight)}                 
            onSwipeableRightOpen={()=>{onRightOpen(item)}}
            >
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