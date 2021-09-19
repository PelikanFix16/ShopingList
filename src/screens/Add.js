import React,{useState,useEffect,memo} from 'react';
import { SafeAreaView,Text,Button,View,TextInput } from 'react-native';
import { styles } from '../styles/mainstyles';
import CircleButton from '../components/Button';
import Counter from '../components/Counter';
import { addToList } from '../redux/actions';
import { navigate } from '../navigation/navigationRef';
import { AddDispatcher } from '../redux/dispatcher';
import { CreateItem } from '../Utils/CreateItem';
import { textChange } from '../Utils/TextChange';









const Add = () => {
    const [showAmount,setShowAmount] = useState(false);
    const [counter,setCounter] = useState(0);
    const [title,setTitle] = useState("");

    let item = CreateItem(title,counter);

    const toList = item=>{
        
        AddDispatcher(item);
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
                    
                      { counter >= 1 && showAmount == true && <CircleButton iconName="add" color="#878787" size={50} add={()=>toList(item)}/> }
                </View>
                

            </SafeAreaView>

    )
}



export default Add;