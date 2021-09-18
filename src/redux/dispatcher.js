import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { changeToArchive ,addToList,deleteFromArchive} from '../redux/actions';
import { store } from './store';




export const ArchivizeDispatcher = (item) => {
 
    store.dispatch(changeToArchive(item));


}

export const AddDispatcher = (item) => {
    
    store.dispatch(addToList(item));
}

export const DeleteArchiveDispatcher = (item) => {
    store.dispatch(deleteFromArchive(item));
}

