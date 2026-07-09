import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import "./global.css"
import Login from './src/component/Login';
import Table from './src/component/table';
import Paperexample from './src/component/paperexample';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Async_Storage from './src/component/async_storage';
import Aboutus from './src/component/Aboutus';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LocationScreen from './src/component/LocationScreen';
import CameraScreen from './src/component/CameraScreen';
import Imagepicker from './src/component/Imagepicker';
import NotificationScreen from './src/component/NotificationScreen';
import Signup from './src/component/Signup';
import AddData from './src/component/AddData';
import LoginUser from './src/component/LoginUser';
import ImagePickerCloudinary from './src/component/ImagePickerCloudinary';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
//  <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="LoginUser" component={LoginUser} />
//       <Stack.Screen name="Signup" component={Signup} />
//       <Stack.Screen name="AddData" component={AddData} />
//     </Stack.Navigator>
//     </NavigationContainer>

    //  <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="login"
    //       component={Login}
    //     />

    //     <Stack.Screen
    //       name="Aboutus"
    //       component={Aboutus}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
    
    <SafeAreaProvider>
      {/* <Imagepicker/> */}
      <ImagePickerCloudinary/>
      {/* <NotificationScreen/> */}
      {/* your app */}
 {/* <LocationScreen/>  
 <CameraScreen/> */}
{/* <Login/> */}
{/* <Table/> */}
{/* <Paperexample/> */}
{/* <Async_Storage/> */}
    
    </SafeAreaProvider>
  );
}


