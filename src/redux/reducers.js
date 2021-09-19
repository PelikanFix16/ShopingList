import { GET_LIST,CHANGE_TO_ARCHIVE, ADD_TO_LIST,DELETE_FROM_ARCHIVE,GET_EDIT_ITEM,EDIT_ITEM,DELETE_ITEM,SORT_TYPE} from "./actions";

const initialState = {
    archive:[],
    list:[],
    edit:{},
    sort:true
}



function listReducer(state=initialState,action){


    switch(action.type){
        case GET_LIST:

            return {...state}
            

        case CHANGE_TO_ARCHIVE:
   
             return {
                 ...state,list:state.list.filter(item=>item !== action.payload),
                 archive:[...state.archive,action.payload]
                }

        case DELETE_FROM_ARCHIVE:
          
            return {
                ...state,archive:state.archive.filter(item=>item !== action.payload),
                list:[...state.list,action.payload]
               }

        case ADD_TO_LIST:
            return {...state,list:[...state.list,action.payload]}

        case GET_EDIT_ITEM:
               const obj = Object.assign({},action.payload)
            return {...state,edit:obj}

        case EDIT_ITEM:
            
               return {...state,list:state.list.map((value,index)=>{
                   if(action.payload.id == value.id){
                        return action.payload;
                   }else{
                       return value;
                   }
               })}

        case DELETE_ITEM:
            
                return {...state,archive:state.archive.filter(item=>item !== action.payload),list:state.list.filter(item=>item !== action.payload)}
 
        case SORT_TYPE:
            if(action.payload){
                return {...state,archive:state.archive.sort((x,y)=>x.time-y.time),list:state.list.sort((x,y)=>x.time-y.time),sort:action.payload}
            }else{
                return {...state,archive:state.archive.sort((x,y)=>y.time-x.time),list:state.list.sort((x,y)=>y.time-x.time),sort:action.payload}
            }

        default:
            return state;

    }
}


export default listReducer;
