export const GET_LIST = "GET_LIST";
export const ADD_TO_LIST = "ADD_TO_LIST";
export const CHANGE_TO_ARCHIVE = "CHANGE_TO_ARCHIVE";
export const GET_ARCHIVE_LIST = "GET_ARCHIVE_LIST";



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

export const getArchiveList = () => {
  
    return dispatch => {
        dispatch({
            type:GET_LIST,
            payload:[]
        });
    } 
}


