import React,{useState} from 'react';

import {
  StyleSheet,
  Text,TextInput,
  useColorScheme,
  View,TouchableOpacity, Alert
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const HomeScreen=({ navigation})=> {
    
      
  
    const [agree,setagree]=useState(false)
    const [userName,setuserName]=useState("")
    const [password, setpassword] = useState("")
    const submit=()=>{
    if(userName==="bilal" && password==="khan12"){
     
      navigation.navigate('Details',{userName: `${userName}`})}
      else{
        Alert.alert("User name or Password incorrect")
      }
    }
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.headerContainer}>Login</Text>
        <Text style={styles.descriptionContainer}>you can reach us anytime via @bilal.com</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Enter Your Name</Text>
          <TextInput style={styles.inputStyle}
          autoCapitalize='none'
          autoCorrect={false}
          value={userName}
          onChangeText={(actualData) => setuserName(actualData)}
          
          />


        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Enter Your Password</Text>
          <TextInput style={styles.inputStyle}
          autoCapitalize='none'
          autoCorrect={false}
          secureTextEntry={true}
          value={password}
          onChangeText={(actualData)=>setpassword(actualData)}

          />


        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox style={styles.checkboxStyle}
          value={agree}
          onValueChange={()=>setagree(!agree)}
          
          />
          <Text style={styles.checkboxText}>I have read and agreed with the TC</Text>
        </View>
        <TouchableOpacity style={[styles.LoginbtnStyle,{
          backgroundColor: agree ? "lightblue" : "grey",
        },]}
        
        disabled={!agree}
        onPress={submit}>
          <Text style={[styles.loginbtnText,{
          color:agree ? "black" : "white"
        }]}>Login</Text>
        </TouchableOpacity>
         </View>
       
    );
  }
  const styles=StyleSheet.create({
    headerContainer:{
      fontSize:30,
      color:'gray',
      fontWeight:'bold'

    },
    descriptionContainer:{
      fontSize:20,
      marginTop:10
    },
    mainContainer:{
      height:"100%",
      paddingHorizontal:30,
      marginTop:30
     },
     inputContainer:{
      
       
      
     },
     label:{
       fontSize:15,
       marginTop:40
     },
     inputStyle:{
       borderWidth:1,
       paddingVertical:7,
       borderRadius:5,
       marginTop:5
     },
     checkboxContainer:{
       marginTop:20,
       flexDirection:"row"
       
     },
     checkboxStyle:{
       
    },
    checkboxText:{
      marginTop:5,
      marginLeft:5
    },
    LoginbtnStyle:{
      marginTop:30,
      alignItems:'center',
      width:100,
      height:50,
      justifyContent:'center',
      alignSelf:"center",
      borderRadius:50
    
    },
    loginbtnText:{
      fontSize:20,
      fontWeight:"bold"
    },
  })
  export default HomeScreen;