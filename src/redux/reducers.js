import { GET_LIST,CHANGE_TO_ARCHIVE, ADD_TO_LIST } from "./actions";

const initialState = []



function listReducer(state=initialState,action){

    const filtr = (list)=>{
      
         return list.filter(element=>{return element.archive == false});
    
    }
    

    switch(action.type){
        case GET_LIST:

            return {...state,list:filtr(action.payload)}
            

        case CHANGE_TO_ARCHIVE:
   
            console.log(state);
             return {...state,list:filtr(state.list)}

        case ADD_TO_LIST:
            return {...state,list:[...state.list,action.payload]}


        default:
            return state;

    }
}


export default listReducer;
