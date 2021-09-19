import React,{useEffect,useState} from 'react';
import { SafeAreaView,Text,FlatList,View,CheckBox,Dimensions,TouchableOpacity,ScrollView,LayoutAnimation } from 'react-native';
import {styles} from '../styles/mainstyles';
import { AntDesign,MaterialIcons } from '@expo/vector-icons'; 
import { useSelector,useDispatch } from 'react-redux';
import { getList,changeToArchive } from '../redux/actions';
import RenderItem, { swipeableRef } from '../components/ListView';
import { ArchivizeDispatcher, GetEditItemDispatcher } from '../redux/dispatcher';
import { RenderFunction } from '../Utils/RenderFunctions/RenderRightArchivize';
import { navigate } from '../navigation/navigationRef';


export default function Home(props) {

    const {list,archive,edit} = useSelector(state=>state.listReducer);
    const dispatch = useDispatch();
    const fetchList = () => dispatch(getList());


    const handleArchive = item => {
        ArchivizeDispatcher(item);
    }

    const editItem = item => {
        GetEditItemDispatcher(item);
        swipeableRef.close();
        navigate("Edit",{})

    }
   

    useEffect(()=>{
        fetchList();
       

    },[])

 




    return(
        <SafeAreaView style={styles.container}>
           <FlatList data={list} renderItem={({item,index})=>
           <RenderItem renderIconLeft="check" renderColorLeft="#8afb65" 
           renderFunctionLeft={RenderFunction} onLeftOpen={handleArchive}
           renderIconRight="edit" renderColorRight="#FEEE6C" renderFunctionRight={RenderFunction}
           onRightOpen={editItem}

           item={item} index={index} />}
           />
        </SafeAreaView>
    );


};