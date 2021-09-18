import React,{useEffect} from 'react';
import { SafeAreaView,Text,FlatList } from 'react-native';
import {styles} from '../styles/mainstyles';
import RenderItem from '../components/ListView';
import { useSelector } from 'react-redux';

export default function Archive() {

    const {list,archive} = useSelector(state=>state.listReducer);
    console.log(archive);


    return(
        <SafeAreaView style={styles.container}>
            
            

        </SafeAreaView>
    )
}