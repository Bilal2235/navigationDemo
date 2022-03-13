import { StyleSheet, Text, View,TextInput,TouchableOpacity ,Alert} from 'react-native'
import React ,{useState}from 'react'
import CheckBox from '@react-native-community/checkbox';

const Contact = ({navigation}) => {
  const [Name,setName]=useState("");
  const [Email,setEmail]=useState("");
  const [Phone,setPhone]=useState("");
  const [Massege,setMassege]=useState("");
  const [agree,setagree]=useState(false);
  const submit=()=>{
    if(!Name && !Email && !Phone && !Massege){
      Alert.alert("plz fill all field");
    }else{
      Alert.alert(`Thank you ${Name}`);
      navigation.navigate("Welcome")
    }
  }
  return (
    <View>
    <View style={styles.mainContainerheader}>
    <Text style={styles.headerTextstyle}>Level Up Your Knowledge</Text>
    <Text style={[styles.headerTextstyle,styles.headerTextstyle1]}>You can reach us any time via @gmail.com</Text>
    
    </View>
    <View style={styles.labelContainer}>
    <Text style={styles.label}>Enter Your Name</Text>
    <TextInput style={styles.tinputStyle}
    value={Name}
    onChangeText={(name)=>setName(name)}
    />
    </View>
    <View style={styles.labelContainer}>
    <Text style={styles.label}>Enter Your Email</Text>
    <TextInput style={styles.tinputStyle}
    value={Email}
    onChangeText={(email)=>setEmail(email)}/>
    </View>

    <View style={styles.labelContainer}>
    <Text style={styles.label}>Enter Your Phone</Text>
    <TextInput style={styles.tinputStyle}
    value={Phone}
    onChangeText={(phone)=>setPhone(phone)}/>
    </View>

    <View style={styles.labelContainer}>
    <Text style={styles.label}>How can we help you?</Text>
    <TextInput style={styles.tinputStyle}
    value={Massege}
    onChangeText={(massege)=>setMassege(massege)}
    numberOfLines={5}
    multiline={true}
  />
    </View>
    <View style={styles.checkboxContainer}>
    <CheckBox style={styles.checkboxStyle}
    value={agree}
    onValueChange={()=>setagree(!agree)}
    />
    <Text style={styles.cboxText}>I have read and agree!</Text>
    </View>
    <View style={styles.btnContainer}>
    <TouchableOpacity style={[styles.submitbtnStyle,{
      backgroundColor: agree ? "skyblue" :"grey",
    }]}
    disabled={!agree}
    onPress={submit}>
    <Text style={[styles.submitbtnText,{
      color: agree ? "black" :"white",
    }]}>Submit</Text>
    
    </TouchableOpacity>
    </View>

    


    </View>
  )
}

export default Contact

const styles = StyleSheet.create({
  mainContainerheader:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop:15
  },
  headerTextstyle:{
    fontSize:20,
    color:'black',
    
  },
  headerTextstyle1:{
    color:'grey',
    marginTop:10
  },
  labelContainer:{
    paddingHorizontal:40,
    marginTop:20,display:'flex'
  },
  label:{
    fontSize:15,
    fontWeight:'500',
    color:'black',
  },
  tinputStyle:{
    borderWidth:0.5,
    marginTop:10,
    },
    checkboxStyle:{
      marginLeft:30,
      marginTop:20
    },
    checkboxContainer:{
      flexDirection:'row',
      display:'flex'
    },
    cboxText:{
      marginTop:25
    },
    submitbtnStyle:{
      justifyContent:'center',
      alignItems:'center',
      marginTop:20,
      width:100,
      height:30,
      alignSelf:'center',
      borderRadius:20
      
    },
    submitbtnText:{
      fontSize:20,
      fontWeight:'600'
     
    }

})