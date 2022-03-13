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
const DetailsScreen = ({ navigation,route }) =>{
  const {userName}=route.params
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <Text>Wellcome to {userName} Succesful Login</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.goBack()}
        />
      </View>
    );
  }
  export default DetailsScreen;
  