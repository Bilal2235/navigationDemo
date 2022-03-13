import { FlatList, StyleSheet, Text, View,Image ,ActivityIndicator} from 'react-native'
import React,{useEffect,useState} from 'react'

const StudentData = () => {
  const[myUserData,setmyUserData]=useState();
  const[loader,setloader]=useState(true);
  const getStudentData=async()=>{
    try {
     const respones =await fetch("https://thapatechnical.github.io/userapi/users.json");
     const myData=await respones.json();
     setmyUserData(myData);
     setloader(false);
    } catch (error) {
      console.log(error)
      
    }
  }
  useEffect(()=>{
    getStudentData();
  },[]);
  return (
    <View>
    {loader ? 
      (
        <View style={styles.loaderStyle}>
        <ActivityIndicator size={'large'}></ActivityIndicator>
        </View>):(
        <View>
  
     <FlatList
     keyExtractor={(item)=>item.id}
     data={myUserData} 
     renderItem={({item})=>{
       return(
         <View>
         <View styles={styles.mainContainer}>
      <View style={styles.cardStyle}>
      <View>
      <Image style={styles.cardImage}
       source={item.image}
       resizeMode='cover'
       source={{uri:item.image}} />
       <View style={styles.biomainContainer}>
       <View style={styles.bioDataContainer}>
       <Text style={styles.headerBioStyles}>Bio Data </Text>
       <Text style={styles.headerBioStyles}>{item.id} </Text>
       
       </View>
     
      <Text style={styles.headerStyles}>{item.name}</Text>
      <Text style={styles.descripitionStyle}>Id: {item.id}</Text>
      <Text style={styles.descripitionStyle}>Mobile No: {item.mobile}</Text>
      <Text style={styles.descripitionStyle}>Email: {item.email}</Text>
      </View>
      </View>
      </View>
      </View>

         
         </View>
       )

     }}
     />
     </View>
      )}
    </View>
  )
}

export default StudentData

const styles = StyleSheet.create({
 mainContainer:{
   
 },
  cardStyle:{
    padding:30,
    backgroundColor:'white',
    textAlign:'center',
    borderRadius:20,
    shadowColor:'black',
    shadowOffset:{width:0,height:0},
    shadowOpacity:0.5,
    shadowRadius:8,
    elevation:8,
    marginVertical:20,
    marginHorizontal:10
   },
  cardImage:{
  height:undefined,
  width:'100%',
  aspectRatio:1,
  borderTopLeftRadius:20,
  borderTopRightRadius:20
},
headerStyles:{
  fontSize:25,
  textAlign:'center',
  fontWeight:'500',
  color:'black',
  textTransform:'uppercase'
},
headerBioStyles:{
  fontSize:15,
  color:'white',
  textTransform:'uppercase'
},
descripitionStyle:{
  fontSize:15,
  textAlign:'center',
  color:'white',
  paddingVertical:10
},
btnDetail:{
  alignItems:'center',
  paddingHorizontal:20,
  paddingVertical:10,
  justifyContent:'center',
  alignSelf:'center',
  backgroundColor:'lightblue',
  marginTop:15,
  display:'flex',
  borderRadius:5
  
},
bioDataContainer:{
display:'flex',
flexDirection:'row',
alignItems:'center',
justifyContent:'space-evenly',
paddingVertical:10
},
biomainContainer:{
  backgroundColor:'grey',
  borderBottomRightRadius:20,
  borderBottomLeftRadius:20
},
loaderStyle:{
justifyContent:'center',
alignItems:'center',
display:'flex',
padding:"50%"
},
})