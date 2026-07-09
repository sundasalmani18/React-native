
import "./global.css"
import "react-native-gesture-handler";
import "react-native-reanimated";

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from "./src/Screens/Loginscreen";
import SplashScreen from "./src/Screens/SplashScreen";

import SignUpScreen from "./src/Screens/SignupScreen";
import OnboardingScreen from "./src/Screens/Onboardingscreen";
import OtpScreen from "./src/Screens/OTPScreen";
import HomeScreen from "./src/Screens/HomeScreen";
import CartScreen from "./src/Screens/CartScreen";
import ShippingScreen from "./src/Screens/ShippingScreen";
import PaymentMethodScreen from "./src/Screens/PaymentMethodScreen";
import CardDetailsScreen from "./src/Screens/CardDetailScreen";
import ReviewOrderScreen from "./src/Screens/ReviewOrderScreen";
import OrderSuccessScreen from "./src/Screens/OrderSuccessScreen";
import TrackOrderScreen from "./src/Screens/TrackOrderScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (


    <SafeAreaProvider>
      {/* <TrackOrderScreen/> */}
      {/* <OrderSuccessScreen/> */}
      {/* <ReviewOrderScreen/> */}
      {/* <CardDetailsScreen/> */}
      {/* <PaymentMethodScreen/> */}
      {/* <ShippingScreen/> */}
      {/* <CartScreen /> */}
      {/* <HomeScreen/> */}
      {/* <LoginScreen/> */}
      {/* <SplashScreen/> */}
      {/* <SignUpScreen/> */}
      {/* <OnboardingScreen/> */}
      {/* <OtpScreen/> */}


    </SafeAreaProvider>
  );
}


