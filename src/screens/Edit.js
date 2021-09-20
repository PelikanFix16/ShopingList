import React,{useState,useEffect} from 'react';
import { SafeAreaView,Text,TextInput,View} from 'react-native';
import { styles } from '../styles/mainstyles';
import { useSelector,useDispatch} from 'react-redux';
import Counter from '../components/Counter';
import CircleButton from '../components/Button';
import { EditItemDispatcher,DeleteItemDispatcher } from '../redux/dispatcher';
import { navigate } from '../navigation/navigationRef';
import { textChange } from '../Utils/TextChange';
import { getList } from '../redux/actions';


const Edit = () => {
    const [showAmount,setShowAmount] = useState(true);
    const {edit} = useSelector(state=>state.listReducer);
    const [counter,setCounter] = useState(edit.amount);
    const [title,setTitle] = useState(edit.title);
    const dispatch = useDispatch();
    const fetchList = () => dispatch(getList());




    const toList = item=>{
       

        edit.amount = counter;
        edit.title = title;

        
        EditItemDispatcher(item);
        navigate("Home");

    }

    useEffect(()=>{
        fetchList();
        setCounter(edit.amount);
        setTitle(edit.title);
    

    },[edit])

    



    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.addContainer}>
            <Text testID="editTitle">Edit Item</Text>
            <TextInput testID="editInput" style={styles.textInput}  
                    maxLength={30}
                    onChangeText={text=>{
                        textChange(text,setShowAmount,setCounter);
                        setTitle(text);
                    }} value={title}
            />
            {showAmount == true && <Counter setCounter={setCounter} counter={counter}/>}
            <View style={styles.editButtonContainer}>
            <View style={styles.editButtonView}>
            <CircleButton iconName="md-return-down-back" size={40} color="#7092F3" add={()=>navigate("Home")}/>
            </View>
            {counter >= 1 && showAmount == true && 
            <View style={styles.editButtonView}>
                <CircleButton iconName="pencil-outline" color="#FEEE6C" size={40} add={()=>toList(edit)}/></View>}
            <View style={styles.editButtonView}>
            <CircleButton iconName="trash-bin" size={40} color="#FF6E6B" add={()=>{DeleteItemDispatcher(edit);navigate("Home")}}/>
            </View>

            </View>

            </View>
        </SafeAreaView>
    )
}

export default React.memo(Edit);