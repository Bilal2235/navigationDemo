import { StyleSheet, Text, View,Image,TouchableOpacity,Linking } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={styles.mainContainer}>
    <View style={styles.mainHeaderContainer}>
    <Text style={styles.mainheaderStyle}>Bilal Niazi</Text>
    <Text style={styles.descriptionStyle}>I am full stack developer</Text>
    <Image style={styles.aboutImage}
    resizeMode="contain"
    source={require("../Screen/image/about/bilal.png")}
    />
    </View>
    <View style={[styles.mainHeaderContainer,styles.aboutmeContainer]}>
    <Text style={[styles.mainheaderStyle,styles.aboutmeTextStyle]}>About Me</Text>
    <Text style={[styles.descriptionStyle,styles.aboutmeTextStyle]}>
    I am full stack developer . I am 6 year experience in market . i am developer android and ios mobile apps.</Text>
    
    </View>
    <View style={[styles.socialContainer]}>
    <Text style={[styles.mainheaderStyle,styles.socialTextStyle]}>Follow me On Social Network</Text>
    <View style={styles.bottomSocialContainer}>

    <TouchableOpacity
    onPress={()=>
      {Linking.openURL("https://www.instagram.com/accounts/login/")}}
    >
    <Image style={styles.socialImage}
    source={require("../Screen/image/about/insta.png")}
    />
    </TouchableOpacity>

    <TouchableOpacity
    onPress={()=>{
      Linking.openURL("https://web.facebook.com/?_rdc=1&_rdr")
    }}>
    <Image style={styles.socialImage}
    source={require("../Screen/image/about/facebook.png")}/>
    </TouchableOpacity>

    <TouchableOpacity
    onPress={()=>{
      Linking.openURL("https://www.youtube.com/channel/UCopDjFJ-kkR6ecbRRAvkZXQ")
    }}>
    <Image style={styles.socialImage}
    source={require("../Screen/image/about/youtube.png")}/>
    </TouchableOpacity>
    </View>
    
    </View>
    
      
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  mainContainer:{
    justifyContent:'center',
    alignItems:'center',
  },
  mainHeaderContainer:{
    justifyContent:'center',
    alignItems:'center',
    padding:25,
    display:'flex'
  },
  mainheaderStyle:{
    fontSize:30,
    color:"black",
    paddingBottom:10,
    fontWeight:'bold',
    fontStyle:'italic'
  },
  descriptionStyle:{
    fontSize:15,
    fontStyle:'italic',
    paddingBottom:20
  },
  aboutImage:{
    width:150,
    height:150,
    borderRadius:150
  },
  aboutmeContainer:{
    backgroundColor:'skyblue',
    marginHorizontal:5
  },
  aboutmeTextStyle:{
    color:'white'
  },
  socialContainer:{
    marginTop:100,
    justifyContent:'center',
    alignItems:'center'
  },
  socialTextStyle:{
    fontSize:20
  },
  socialImage:{
  marginHorizontal:10,
   
},
bottomSocialContainer:{
  flexDirection:'row',
}
})