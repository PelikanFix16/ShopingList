import { StyleSheet,StatusBar } from "react-native";

export const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#ffffff',
      
    },
    item:{
        padding:15,
        backgroundColor:"#fff",
        shadowColor:"#ccc",
        shadowOffset:{width:3,height:3},
        shadowOpacity:0.9,
        marginVertical:10,
        flex:1,

    },
    animatedContainer:{
        alignItems:"center",
        justifyContent:"center"
    },
    addContainer:{
        justifyContent:"flex-start",
        alignItems:"center",
        flex:1,
        marginTop:"50px"

        
    },
    addTextStyle:{
        color:"#a6a6a6",
        fontSize:"30px",
        fontWeight:300,

    },
    textInput:{
       borderBottomWidth:1,
       borderColor:"#d9d9d9",
       marginTop:"20px",
       textAlign:"center",
       width:"60%",
       fontWeight:300

    },
    circleButton:{
        width:"50px",
        height:"50px",
        position:"absolute",
        bottom:"0px",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:100,
        padding:10,
    },
    counterView:{
        flex:1,
        flexDirection:"row",
        marginTop:"50px"

    },
    counterButton:{
   
        justifyContent:"center",
        alignItems:"center",
        height:"50%",
      

    },
    counterText:{
        fontSize:"40px",
        fontWeight:200,
        alignItems:"center",
        marginRight:"30px",
        marginLeft:"30px"
    
       
        

    },
    time:{
       textAlign:"right",
       right:0
    },
    amountView:{
        flexDirection:"row",
        justifyContent:"space-between"
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