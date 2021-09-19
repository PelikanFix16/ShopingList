import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { changeToArchive ,addToList,deleteFromArchive,getEditItem, editItem, deleteItem,sortType} from '../redux/actions';
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

export const GetEditItemDispatcher = (item) => {
    store.dispatch(getEditItem(item));
}

export const EditItemDispatcher = (item) => {
    store.dispatch(editItem(item));
}

export const DeleteItemDispatcher = (item) => {
    store.dispatch(deleteItem(item));
}

export const SortDispatcher = (item) => {
    store.dispatch(sortType(item));
}