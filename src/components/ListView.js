import React from 'react';
import {FlatList,Text,View,Dimensions,Animated} from 'react-native';
import { styles } from '../styles/mainstyles';
import { Swipeable } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';


const {width,height} = Dimensions.get("screen");

const RenderRight = (progress,dragX) => {

    const trans = dragX.interpolate({
        inputRange: [0, 50, 100, 101],
        outputRange: [0, 0, 0, 0],
      });
    const Style = {
        transform:[
            {
                translateX:trans
            }
        ]
    }
    return (
            <Animated.View style={[Style,styles.item,styles.animatedContainer]}>
                <AntDesign name="check" size={40} color="white" />
            </Animated.View>
    )
}


const RenderItem = ({item,index,archivize}) => {
    
    return (
        <Swipeable onSwipeableLeftOpen={()=>{archivize(item)}} renderLeftActions={RenderRight}>
        <View style={styles.item}>
            <Text style={{fontWeight:'600'}}>{item.title}</Text>
            <View>
              
                <Text style={{fontWeight:'400'}}>Amount: {item.amount}</Text>
            </View>
        </View>

        </Swipeable>
    )
}





export default RenderItem;