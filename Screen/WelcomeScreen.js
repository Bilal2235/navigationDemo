import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Menu from './Menu'

const WelcomeScreen = () => {
    const description="Availiable Different courses free and pay. We are offering this courses 'Android Studio' 'Eclips 'Digial Marketing' and 'React Native'"
  return (
    <View style={styles.mainContainer}>
    <Image  style = {styles.headerImage}
     source={require('../Screen/image/image.jpeg')}
     resizeMode='contain'
     />

      <Text style={styles.mainheaderText} >Welcome</Text>
      <Text style={[styles.mainheaderText,{color:"#BBA537",fontSize:30}]}>Decode Technology</Text>
      <Text style={styles.descriptionStyle}>{description}</Text>
      <View style={styles.menuContainer}>
      <Menu/>
      </View>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    mainContainer:{
    height:'100%',
    marginHorizontal:10,
    display:'flex',
    alignItems:'center',
    paddingHorizontal:10
},
headerImage:{
    height:undefined,
    width:"100%",
    aspectRatio:1,
    alignItems:'stretch',
    marginTop:0,
    borderRadius:40
},
mainheaderText:{
    fontSize:25,
    fontWeight:'bold',
    textTransform:'uppercase',
    color:'#BB4E37'

},
descriptionStyle:{
    marginTop:5,
    fontSize:15,
    color:'black',
    margin:10
},
menuContainer:{
 
}
})