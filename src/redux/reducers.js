import { GET_LIST,CHANGE_TO_ARCHIVE, ADD_TO_LIST,DELETE_FROM_ARCHIVE } from "./actions";

const initialState = []



function listReducer(state=initialState,action){


    switch(action.type){
        case GET_LIST:

            return {...state,list:action.payload,archive:action.payload}
            

        case CHANGE_TO_ARCHIVE:
   
             return {
                 ...state,list:state.list.filter(item=>item !== action.payload),
                 archive:[...state.archive,action.payload]
                }

        case DELETE_FROM_ARCHIVE:
            console.log(state);
            return {
                ...state,archive:state.archive.filter(item=>item !== action.payload),
                list:[...state.list,action.payload]
               }

        case ADD_TO_LIST:
            return {...state,list:[...state.list,action.payload]}



        default:
            return state;

    }
}


export default listReducer;
