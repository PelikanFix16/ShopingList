import React,{useEffect,useState} from 'react';
import { SafeAreaView,Text,FlatList,View,CheckBox,Dimensions,TouchableOpacity,ScrollView,LayoutAnimation } from 'react-native';
import {styles} from '../styles/mainstyles';
import { AntDesign,MaterialIcons } from '@expo/vector-icons'; 
import { useSelector,useDispatch } from 'react-redux';
import { getList,changeToArchive } from '../redux/actions';
import RenderItem from '../components/ListView';
import { ArchivizeDispatcher } from '../redux/dispatcher';




export default function Home() {

    const {list,archive} = useSelector(state=>state.listReducer);
    const dispatch = useDispatch();
    const fetchList = () => dispatch(getList());


    const handleArchive = item => {
        ArchivizeDispatcher(item);
    }
   

    useEffect(()=>{
        fetchList();

    },[])





    return(
        <SafeAreaView style={styles.container}>
           <FlatList data={list} renderItem={({item,index})=><RenderItem archivize={handleArchive} item={item} index={index}/>}/>
        </SafeAreaView>
    );


};