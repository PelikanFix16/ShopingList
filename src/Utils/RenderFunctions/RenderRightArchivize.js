import React from 'react';
import {Animated} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from '../../styles/mainstyles';
export const RenderFunction = (progress,dragX,icon,color) => {

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
            <Animated.View style={[Style,styles.item,styles.animatedContainer,{backgroundColor:color}]}>
                <AntDesign name={icon} size={40} color="white" />
            </Animated.View>
    )
}





