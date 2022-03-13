import Courses from './Api/Cources'

import { FlatList, StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native'
import React from 'react'

const Course = ({navigation}) => {
  const courseCard=({item})=>{
    return(
      <View styles={styles.mainContainer}>
      <View style={styles.cardStyle}>
      <View>
      <Image style={styles.cardImage}
       source={item.image}
       resizeMode='contain'/>
      </View>
      <Text style={styles.headerStyles}>{item.title}</Text>
      <Text style={styles.descripitionStyle}>{item.descripition}</Text>
      <TouchableOpacity style={styles.btnDetail}
      onPress={()=> navigation.navigate("CourseDetails",{
        courseId:item.id
      })}>
      <Text>Course Details</Text>

      
      </TouchableOpacity>
      </View>
      </View>
    )
  }
  return (
    <FlatList
    data={Courses}
    renderItem={courseCard}
    keyExtractor={(item)=>item.id}
    />
  )
}

export default Course

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
  borderRadius:30
},
headerStyles:{
  fontSize:25,
  textAlign:'center',
  fontWeight:'500',
  color:'black',
  textTransform:'uppercase'
},
descripitionStyle:{
  fontSize:15,
  textAlign:'center',
  color:'grey',
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
  
}
})