import { GET_LIST,CHANGE_TO_ARCHIVE, ADD_TO_LIST,GET_ARCHIVE_LIST } from "./actions";

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

        case ADD_TO_LIST:
            return {...state,list:[...state.list,action.payload]}



        default:
            return state;

    }
}


export default listReducer;
