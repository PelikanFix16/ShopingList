import React,{useEffect} from 'react';
import { SafeAreaView,Text,FlatList } from 'react-native';
import {styles} from '../styles/mainstyles';
import RenderItem from '../components/ListView';
import { useSelector } from 'react-redux';
import { RenderFunction } from '../Utils/RenderFunctions/RenderRightArchivize';
import { DeleteArchiveDispatcher, DeleteItemDispatcher,SortDispatcher } from '../redux/dispatcher';
import DateSort from '../components/DateSort';


export default function Archive() {


    const {list,archive,sort} = useSelector(state=>state.listReducer);
    const handleArchive = item => {
        DeleteArchiveDispatcher(item);
    }
    const deleteItem = item => {
        DeleteItemDispatcher(item);
    }
    const sortItems = () => {
        SortDispatcher(!sort);
    }
    useEffect(()=>{
        SortDispatcher(sort);
    },[archive]);


    return(
        <SafeAreaView style={styles.container}>
            <DateSort icon={sort} event={sortItems}/>
            <FlatList extraData={sort} data={archive} renderItem={({item,index})=>
           <RenderItem renderIconLeft="back" renderColorLeft="#7092F3" renderFunctionLeft={RenderFunction} 
           onLeftOpen={handleArchive} 
           renderIconRight="delete" renderColorRight="#FF6E6B" renderFunctionRight={RenderFunction} 
           onRightOpen={deleteItem}
           item={item} index={index}/>}
           />
        </SafeAreaView>
    )
}