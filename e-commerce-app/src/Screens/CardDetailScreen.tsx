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
import CustomCheckbox from "../component/CheckOut/CustomChechbox";
import PrimaryButton from "../component/CheckOut/PrimaryButton";

const CardDetailsScreen = ({ navigation }: any) => {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [saveCard, setSaveCard] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <CheckoutHeader
        title="Checkout"
        onBack={() => navigation.goBack()}
      />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <CheckoutStepper currentStep={2} />

        <Text style={styles.title}>Card Details</Text>

        <Text style={styles.subtitle}>
          Enter your card information to complete your purchase.
        </Text>

        <View style={styles.cardContainer}>
          <CustomInput
            label="Name on Card"
            placeholder="John Doe"
            value={name}
            onChangeText={setName}
          />

          <CustomInput
            label="Card Number"
            placeholder="1234 5678 9012 3456"
            keyboardType="number-pad"
            value={cardNumber}
            onChangeText={setCardNumber}
          />

          <View style={styles.row}>
            <View style={styles.half}>
              <CustomInput
                label="Expiry Date"
                placeholder="MM/YY"
                value={expiry}
                onChangeText={setExpiry}
              />
            </View>

            <View style={styles.half}>
              <CustomInput
                label="CVV"
                placeholder="123"
                keyboardType="number-pad"
                secureTextEntry
                value={cvv}
                onChangeText={setCvv}
              />
            </View>
          </View>

          <CustomCheckbox
            checked={saveCard}
            onPress={() => setSaveCard(!saveCard)}
            label="Save this card for future payments"
          />
        </View>
      </ScrollView>

      <PrimaryButton
        title="Review Order"
        onPress={() => navigation.navigate("ReviewOrder")}
      />
    </SafeAreaView>
  );
};

export default CardDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#111",
    marginTop: 10,
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 15,
    color: "#666",
    lineHeight: 22,
    marginBottom: 25,
  },

  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: "#EEEEEE",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  half: {
    width: "48%",
  },
});