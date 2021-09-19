import React,{useState} from 'react';
import { SafeAreaView,Text,TextInput,View} from 'react-native';
import { styles } from '../styles/mainstyles';
import { useSelector } from 'react-redux';
import Counter from '../components/Counter';
import CircleButton from '../components/Button';
import { EditItemDispatcher } from '../redux/dispatcher';
import { navigate } from '../navigation/navigationRef';
import { textChange } from '../Utils/TextChange';



const Edit = () => {
    const [showAmount,setShowAmount] = useState(true);
    const {edit} = useSelector(state=>state.listReducer);
    const [counter,setCounter] = useState(edit.amount);
    const [title,setTitle] = useState(edit.title);

    edit.amount = counter;
    edit.title = title;

    const toList = item=>{
        
        EditItemDispatcher(item);
        navigate("Home");

    }
    

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.addContainer}>
            <Text>Edit Item</Text>
            <TextInput style={styles.textInput}  
                    maxLength="30"
                    onChangeText={text=>{
                        textChange(text,setShowAmount,setCounter);
                        setTitle(text);
                    }} value={title}
            />
            {showAmount == true && <Counter setCounter={setCounter} counter={counter}/>}
            <View style={styles.editButtonContainer}>
            <View style={styles.editButtonView}>
            <CircleButton iconName="md-return-down-back" size={40} color="black" add={()=>navigate("Home")}/>
            </View>
            {counter >= 1 && showAmount == true && 
            <View style={styles.editButtonView}>
                <CircleButton iconName="pencil-outline" color="#878787" size={40} add={()=>toList(edit)}/></View>}
            <View style={styles.editButtonView}>
            <CircleButton iconName="trash-bin" size={40} color="black" add={()=>navigate("Home")}/>
            </View>

            </View>

            </View>
        </SafeAreaView>
    )
}

export default Edit;