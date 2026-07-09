
import "./global.css"
import Paperexample from './src/component/paperexample';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from "./context/authContext";
import AppNavigation from "./Navigation/AppNavigation";
const Stack = createNativeStackNavigator();

export default function App() {
  return (

    
   <AuthProvider>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </AuthProvider>
  );
}


