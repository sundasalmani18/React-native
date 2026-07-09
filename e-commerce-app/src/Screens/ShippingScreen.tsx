import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import CheckoutHeader from "../component/CheckOut/CheckoutHeader";
import CheckoutStepper from "../component/CheckOut/CheckoutStepper";
import CustomInput from "../component/CheckOut/CustomInput";
import PrimaryButton from "../component/CheckOut/PrimaryButton";

const ShippingScreen = ({ navigation }: any) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <CheckoutHeader
        title="Checkout"
        onBack={() => navigation.goBack()}
        onSearch={() => {}}
        onCart={() => {}}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <CheckoutStepper currentStep={1} />

        <Text style={styles.heading}>Shipping Address</Text>

        <Text style={styles.subHeading}>
          Please enter your delivery information.
        </Text>

        <View style={styles.card}>
          <CustomInput
            label="Full Name"
            placeholder="Enter Name"
            value={name}
            onChangeText={setName}
          />

          <CustomInput
            label="Street Address"
            placeholder="Enter Address"
            value={address}
            onChangeText={setAddress}
          />

          <CustomInput
            label="City"
            placeholder="Enter City"
            value={city}
            onChangeText={setCity}
          />

          <CustomInput
            label="Postal Code"
            placeholder="Enter Postal Code"
            keyboardType="numeric"
            value={postalCode}
            onChangeText={setPostalCode}
          />

          <CustomInput
            label="Phone Number"
            placeholder="Enter Number."
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        <PrimaryButton
          title="Continue to Payment"
          onPress={() => navigation.navigate("PaymentMethod")}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShippingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  heading: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111827",
    marginTop: 15,
  },

  subHeading: {
    fontSize: 15,
    color: "#6B7280",
    marginTop: 8,
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,

    elevation: 5,
  },
});