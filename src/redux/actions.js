export const GET_LIST = "GET_LIST";
export const ADD_TO_LIST = "ADD_TO_LIST";
export const CHANGE_TO_ARCHIVE = "CHANGE_TO_ARCHIVE";
export const DELETE_FROM_ARCHIVE = "DELETE_FROM_ARCHIVE";
export const GET_EDIT_ITEM = "GET_EDIT_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";



export const getList = () => {
  
    return dispatch => {
        dispatch({
            type:GET_LIST,
            payload:[]
        });
    } 
}



export const changeToArchive = item => {
    return dispatch=>{
        dispatch({
            type:CHANGE_TO_ARCHIVE,
            payload:item
        })
    }
}

export const addToList = item => {
    return dispatch=>{

        dispatch({
            type:ADD_TO_LIST,
            payload:item
        })
    }
}

export const deleteFromArchive = item => {
    return dispatch=>{
        dispatch({
            type:DELETE_FROM_ARCHIVE,
            payload:item
        })
    }
}

export const getEditItem = item => {
    return dispatch=>{
        dispatch({
            type:GET_EDIT_ITEM,
            payload:item
        })
    }
}

export const editItem = item => {
    return dispatch=>{
        dispatch({
            type:EDIT_ITEM,
            payload:item
        })
    }
}

export const deleteItem = item => {
    return dispatch=>{
        dispatch({
            type:DELETE_ITEM,
            payload:item
        })
    }
}



