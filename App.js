
import React from 'react';

import {
  StyleSheet,
  Text,
  useColorScheme,
  View,TouchableOpacity,Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
 import HomeScreen from './Screen/HomeScreen';
import DetailsScreen from './Screen/DetailsScreen';
import WelcomeScreen from './Screen/WelcomeScreen';
import Course from './Screen/Course';
import Contact from './Screen/Contact';
import About from './Screen/About';
import StudentData from './Screen/StudentData';
import CourseDetails from './Screen/CourseDetails';
import {JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_600SemiBold,
  } from "@fontsource/josefin-sans"; 
import {Nunito_600SemiBold,
  Nunito_700Bold,} from "@fontsource/nunito";
import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Home" component={HomeScreen} 
       />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name='Welcome' component={WelcomeScreen}
        options={{
          headerShown:true,
          headerTitle:"Home",
          headerTitleAlign:'center',
          headerTitleStyle:{
            fontSize:25,
            fontFamily:"JosefinSans_500Medium"
          }
  
        }}/>
        <Stack.Screen name='Course' component={Course}
        options={{
         
          headerTitleStyle:{
            fontSize:25,
            fontFamily:"JosefinSans_500Medium"
          },
          headerTitle:"Courses",
          headerTitleAlign:'center',
          
  
        }}/>
        <Stack.Screen name='About' component={About}
        options={{
          headerTitleAlign:'center',
          headerTitleStyle:{
            fontSize:25,
            fontFamily:"JosefinSans_500Medium"
          }
  
        }}/>
        <Stack.Screen name='Contact' component={Contact}
        options={{
          headerTitleAlign:'center',
          headerTitleStyle:{
            fontSize:25,
            fontFamily:"JosefinSans_500Medium"
          }
  
        }}/>
        <Stack.Screen name='Student' component={StudentData}
       
        options={{
          headerTitle:"Student",
          headerTitleAlign:'center',
          headerShown:true,
          headerTitleStyle:{
            fontSize:25,
            fontFamily:"JosefinSans_500Medium"
          }
  
        }}/>
        <Stack.Screen name='CourseDetails' component={CourseDetails}
        options={{
          headerTitle:"CourseDetails ",
          headerTitleAlign:'center',
          headerTitleStyle:{
            fontSize:25,
            fontFamily:"JosefinSans_500Medium"
          }
  
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
