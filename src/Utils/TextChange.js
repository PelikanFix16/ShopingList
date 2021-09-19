import React from 'react';



export const textChange = (text,setStateButton,setCounter) => {
    if(text.length > 0){
        setStateButton(true);
    }else{
        setStateButton(false);

    }
}


