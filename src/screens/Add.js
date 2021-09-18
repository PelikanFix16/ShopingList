import React,{useState,useEffect,memo} from 'react';
import { SafeAreaView,Text,Button,View,TextInput } from 'react-native';
import { styles } from '../styles/mainstyles';
import CircleButton from '../components/Button';
import Counter from '../components/Counter';
import { addToList } from '../redux/actions';
import { useDispatch } from 'react-redux';
import uuidv4 from '../Utils/uuid';
import { navigate } from '../navigation/navigationRef';




const textChange = (text,setStateButton,setCounter) => {
    if(text.length > 0){
        setStateButton(true);
    }else{
        setStateButton(false);
        setCounter(0);
    }
}






const Add = () => {
    const [showAmount,setShowAmount] = useState(false);
    const [counter,setCounter] = useState(0);
    const [title,setTitle] = useState("");
    const dispatch = useDispatch();
    let item = {
        title:title,
        archive:false,
        amount:counter,
        id:uuidv4(),
        time: Date.now()
    }
    const toList = item=>{
        
    
        dispatch(addToList(item));
        setCounter(0);
        setTitle("");
        setShowAmount(false);

        navigate("Home",{});


        
    }   


    return (
            <SafeAreaView style={styles.container}>
                <View style={styles.addContainer}>
                    <Text>Add New Item</Text>
                    <TextInput style={styles.textInput} 
                    placeholder="item name" 
                    maxLength="30"
                    onChangeText={text=>{
                        textChange(text,setShowAmount,setCounter);
                        setTitle(text);
                    }} value={title}
                        />
                    {showAmount == true && <Counter setCounter={setCounter} counter={counter}/>}
                    
                      { counter >= 1 && <CircleButton iconName="ADD" color="#36a1ff" size={40} add={()=>toList(item)}/> }
                </View>
                

            </SafeAreaView>

    )
}



export default Add;