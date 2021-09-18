export const GET_LIST = "GET_LIST";
export const ADD_TO_LIST = "ADD_TO_LIST";
export const CHANGE_TO_ARCHIVE = "CHANGE_TO_ARCHIVE";


export const getList = () => {
   /* let list = [
    {title:"Kapusta",checked:false,archive:false,amount:2,id:"1"},
    {title:"Marchew",checked:false,archive:false,amount:2,id:"2"},
    {title:"Mielonka",checked:false,archive:false,amount:2,id:"3"},
    {title:"Pomidory",checked:false,archive:false,amount:2,id:"4"},
    {title:"Melon",checked:false,archive:false,amount:2,id:"5"}]
*/
    return dispatch => {
        dispatch({
            type:GET_LIST,
            payload:[]
        });
    } 
}

export const changeToArchive = item => {
    item.archive = true;
    return dispatch=>{
        dispatch({
            type:CHANGE_TO_ARCHIVE,
            payload:item
        })
    }
}

export const addToList = item => {
    console.log(item);
    return dispatch=>{

        dispatch({
            type:ADD_TO_LIST,
            payload:item
        })
    }
}