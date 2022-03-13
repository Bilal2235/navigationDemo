import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import Courses from './Api/Cources';
const CourseDetails = ({navigation,route}) => {
    const id=route.params.courseId;
    const SelectedData=Courses.find((element)=>{
        return id ===element.id;
    });
    return(
        <View styles={styles.mainContainer}>
        <View style={styles.cardStyle}>
        <View>
        <Image style={styles.cardImage}
         source={SelectedData.image}
         resizeMode='contain'/>
        </View>
        <Text style={styles.headerStyles}>{SelectedData.title}</Text>
        <Text style={styles.descripitionStyle}>{SelectedData.descripition}</Text>
        <Text style={styles.descripitionStyle}>{SelectedData.course1}</Text>
        <Text style={styles.descripitionStyle}>{SelectedData.course2}</Text>
        <Text style={styles.descripitionStyle}>{SelectedData.course3}</Text>
        <Text style={styles.descripitionStyle}>RS:{SelectedData.price}</Text>
        <TouchableOpacity style={styles.btnDetail}
        onPress={()=>{
            navigation.navigate('Course')
        }}
       >
        <Text> Courses </Text>
  
        
        </TouchableOpacity>
        </View>
        </View>
      )
}

export default CourseDetails

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