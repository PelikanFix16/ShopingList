import { StyleSheet,StatusBar } from "react-native";

export const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#ffffff',
        alignItems:'center',
        justifyContent:'center',


    },
    dateSortContainer:{
        width:"100%",
        height:"20px",
        alignItems:"center",
        justifyContent:"center",
        top:"10px"
    },
    dateSortBox:{
        width:"50%",
        height:"100%",
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
        
    },

    flatListStyle:{
        marginTop:"5%",
        width:"100%"
    },
    listItemText:{
        fontSize:"20px",
        marginLeft:"10px",
        color:"#595959"
    },
    listItem:{
        flexDirection:"row",
        marginBottom:"1%",
        justifyContent:"left",
        alignItems:"center",
        height:"50px",
        borderRadius:"10px",
        borderBottomWidth:1,
        borderBottomColor:"#a6a6a6",
        backgroundColor:"#f2f2f2",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    
        
    },
    checkBox:{

        width:"30px",
        height:"30px",
        marginRight:"5%",
        marginLeft:"1%",
    
        
    },
    iconEdit:{
        position:"absolute",
        left:"90%"
    }


});

export const tabBarOptions = {
    tabBarInactiveTintColor: '#2D3038',
    tabBarActiveTintColor: '#FFFFFF',

    tabBarStyle: {
      height: '8%',
      backgroundColor: '#1E1B26',
    }
  };