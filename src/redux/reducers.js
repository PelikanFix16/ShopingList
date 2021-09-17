import { GET_LIST } from "./actions";

const initialState = []



function listReducer(state=initialState,action){
    switch(action.type){
        case GET_LIST:
            return {...state,list:action.payload};
        default:
            return state;

    }
}


export default listReducer;
