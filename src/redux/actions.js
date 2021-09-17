export const GET_LIST = "GET_LIST";
export const ADD_TO_LIST = "ADD_TO_LIST";
export const CHANGE_TO_ARCHIVE = "CHANGE_TO_ARCHIVE";

export const getList = () => {
    let list = [{title:"kapusta",checked:false,archive:false}]

    return dispatch => {
        dispatch({
            type:GET_LIST,
            payload:list
        });
    } 
}