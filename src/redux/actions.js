export const GET_LIST = "GET_LIST";
export const ADD_TO_LIST = "ADD_TO_LIST";
export const CHANGE_TO_ARCHIVE = "CHANGE_TO_ARCHIVE";

export const getList = () => {
    let list = [{title:"Kapusta",checked:false,archive:false,amount:2,id:"1"}]

    return dispatch => {
        dispatch({
            type:GET_LIST,
            payload:list
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