import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Menu = () => {
    const navigation=useNavigation();
  return (
    <View style={styles.menuContainer}>
    
    <TouchableOpacity
    style={styles.cardStyle}
    onPress={()=>navigation.navigate('Course')}>
    <Image style={styles.iconStyle}
    source={{uri:"https://img.icons8.com/external-others-phat-plus/344/external-courses-online-courses-color-line-others-phat-plus-11.png"}}
    />
    
     </TouchableOpacity>
     
     <TouchableOpacity
     onPress={()=>navigation.navigate('Student')}>
     <Image style={styles.iconStyle}
     source={{uri:"https://img.icons8.com/external-tulpahn-outline-color-tulpahn/344/external-student-back-to-school-tulpahn-outline-color-tulpahn.png"}}
     />
     
      </TouchableOpacity>
      
      
       <TouchableOpacity
       onPress={()=>navigation.navigate('About')}>
       <Image style={styles.iconStyle}
     source={{uri:"https://img.icons8.com/color/344/about.png"}}
     />
        </TouchableOpacity>
       
        <TouchableOpacity
      onPress={()=>navigation.navigate('Contact')}>
      <Image style={styles.iconStyle}
     source={{uri:"https://img.icons8.com/fluency/344/contact-card.png"}}
     />
       </TouchableOpacity>
        
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
    menuContainer:{
        marginTop:180,
        flexDirection:'row',
        
        
        
    },
    menuText:{
        marginHorizontal:15,
        textTransform:'uppercase'
      },
      iconStyle:{
          width:50,
          height:50,
          marginHorizontal:10
          
      },
      
})