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
        
        marginTop:"10%",
        justifyContent:"center",
        alignItems:"center"


   
    },
    counterView:{

        flexDirection:"row",
        marginTop:"10%",

    },
    counterButton:{
   
        alignItems:"center",
        justifyContent:"center"
      

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
    },
    editButtonContainer:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"

    },
    editButtonView:{
        flexGrow:0,
        flexShrink:0,
        flexBasis:100
    },
    dateSortContainer:{
        justifyContent:"center",
        alignItems:"center",
        padding:"10%"
    },
    dateSortButton:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    }





});

