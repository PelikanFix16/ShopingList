import { GET_LIST,CHANGE_TO_ARCHIVE } from "./actions";

const initialState = []



function listReducer(state=initialState,action){

    switch(action.type){
        case GET_LIST:
            return {...state,list:action.payload};

        case CHANGE_TO_ARCHIVE:
           console.log(action.payload);
            let arr = state.list.map((item,index)=>{
                if(item.index !== action.index){
                    return item;
                }
                return {
                    ...item,
                    ...action.payload
                }
            })

            return {list:arr}


        default:
            return state;

    }
}


export default listReducer;
