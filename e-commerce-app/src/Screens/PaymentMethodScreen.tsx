import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";

import CheckoutHeader from "../component/CheckOut/CheckoutHeader";
import CheckoutStepper from "../component/CheckOut/CheckoutStepper";
import PaymentOption from "../component/CheckOut/PaymentOption";
import PrimaryButton from "../component/CheckOut/PrimaryButton";

const PaymentMethodScreen = ({ navigation }: any) => {
  const [selected, setSelected] = useState("card");

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

        <Text style={styles.title}>
          Choose a payment method
        </Text>

        <Text style={styles.subtitle}>
          You will not be charged until you review this order on
          the next page.
        </Text>

        <View style={styles.list}>

          <PaymentOption
            title="Credit Card"
            selected={selected === "card"}
            onPress={() => setSelected("card")}
            icon={
              <View style={styles.iconRow}>
                <FontAwesome5
                  name="cc-mastercard"
                  size={26}
                  color="#EB001B"
                />
                <FontAwesome5
                  name="cc-visa"
                  size={26}
                  color="#1A1F71"
                  style={{ marginLeft: 10 }}
                />
              </View>
            }
          />

          <PaymentOption
            title="Apple Pay"
            selected={selected === "apple"}
            onPress={() => setSelected("apple")}
            icon={
              <FontAwesome
                name="apple"
                size={26}
                color="#000"
              />
            }
          />

          <PaymentOption
            title="PayPal"
            selected={selected === "paypal"}
            onPress={() => setSelected("paypal")}
            icon={
              <FontAwesome5
                name="paypal"
                size={24}
                color="#003087"
              />
            }
          />

          <PaymentOption
            title="Alipay"
            selected={selected === "alipay"}
            onPress={() => setSelected("alipay")}
            icon={
              <Text style={styles.alipay}>Alipay</Text>
            }
          />

        </View>
      </ScrollView>

      <PrimaryButton
        title="Continue"
        onPress={() =>
          navigation.navigate("CardDetails")
        }
      />
    </SafeAreaView>
  );
};

export default PaymentMethodScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 14,
    color: "#777",
    lineHeight: 22,
    marginBottom: 30,
  },

  list: {
    marginTop: 10,
  },

  iconRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  alipay: {
    color: "#1677FF",
    fontSize: 18,
    fontWeight: "700",
  },
});