import React,{useEffect,useState} from 'react';
import { SafeAreaView,Text,FlatList,View,CheckBox,Dimensions,TouchableOpacity,ScrollView,LayoutAnimation } from 'react-native';
import {styles} from '../styles/mainstyles';
import { AntDesign,MaterialIcons } from '@expo/vector-icons'; 
import { useSelector,useDispatch } from 'react-redux';
import { getList,changeToArchive } from '../redux/actions';
import RenderItem from '../components/ListView';




export default function Home() {

    const {list} = useSelector(state=>state.listReducer);
    const dispatch = useDispatch();
    const fetchList = () => dispatch(getList());
    const changeArchive = (item) => dispatch(changeToArchive(item));

    const handleArchive = item => {
        changeArchive(item);
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