import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,Flatlist } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Home from './Components/Home'
import AnalysisFuncPage from './Components/AnalysisPage'
import { useRoute } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//import mui from 'material-ui';

//import AccountIcon from 'material-ui-community-icons/icons/account';
const Stack = createStackNavigator();
function App() {
  return (
   <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Analysis" component={AnalysisFuncPage} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App
