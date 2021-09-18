import React,{useEffect} from 'react';
import { SafeAreaView,Text,FlatList,View,CheckBox,Dimensions,TouchableOpacity } from 'react-native';
import {styles} from '../styles/mainstyles';
import { AntDesign,MaterialIcons } from '@expo/vector-icons'; 
import { useSelector,useDispatch } from 'react-redux';
import { getList,changeToArchive } from '../redux/actions';


const Item = (props) => {

    return (
    <View style={styles.listItem}>
        <Text style={styles.listItemText}>{props.amount}</Text>
        <Text style={styles.listItemText}>x</Text>
        <Text style={styles.listItemText}>{props.title}</Text>
         { props.archive == 0 && <AntDesign name="edit" color="#595959" size={30} style={styles.iconEdit}/> }
    </View>
    )
}

const renderItem = (item,handle) => {




    return (
        <TouchableOpacity onPress={()=>handle(item)}>
        <Item title={item.title} checked={item.checked} amount={item.amount} archive={item.archive}/>
        </TouchableOpacity>

    )
}


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

    
    

    console.log(list); 

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.dateSortContainer}>
                <View style={styles.dateSortBox}>
                    <Text>Date Sort</Text>
                    <MaterialIcons name="arrow-drop-down" size={20} color="black" />
                </View>
            </View>
            <FlatList style={styles.flatListStyle} data={list} renderItem={(item)=>renderItem(item,handleArchive)} keyExtractor={item=>item.id}/>
        </SafeAreaView>
    );


};