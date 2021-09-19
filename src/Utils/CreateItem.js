import React from 'react';
import uuidv4 from './uuid';

export const CreateItem = (title,amount) => {
    return {
        title,
        amount,
        id:uuidv4(),
        time:Date.now()
    }
}