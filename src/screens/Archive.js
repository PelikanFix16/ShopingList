import React,{useEffect} from 'react';
import { SafeAreaView,Text,FlatList } from 'react-native';
import {styles} from '../styles/mainstyles';
import RenderItem from '../components/ListView';
import { useSelector } from 'react-redux';

import { RenderRight } from '../Utils/RenderFunctions/RenderRightArchivize';
import { DeleteArchiveDispatcher } from '../redux/dispatcher';


export default function Archive() {


    const {list,archive} = useSelector(state=>state.listReducer);
    const handleArchive = item => {
        DeleteArchiveDispatcher(item);
    }


    return(
        <SafeAreaView style={styles.container}>
            
            <FlatList data={archive} renderItem={({item,index})=>
           <RenderItem renderIcon="back" renderColor="#7092F3" renderFunction={RenderRight} archivize={handleArchive} item={item} index={index}/>}
           />
        </SafeAreaView>
    )
}