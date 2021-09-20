import { createStoreRedux } from "../../redux/store"
import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react-native';



export const CreateWithStore = (component,{state}={}) => {
    const store = createStoreRedux(state);
    const queries = render(<Provider store={store}>{component}</Provider>)
    return {
        ...queries,
        store
    };
}