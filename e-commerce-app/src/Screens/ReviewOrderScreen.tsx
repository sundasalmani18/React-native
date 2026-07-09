import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import CheckoutHeader from "../component/CheckOut/CheckoutHeader";
import CheckoutStepper from "../component/CheckOut/CheckoutStepper";
import PaymentCard from "../component/CheckOut/PaymentCard";
import AddressCard from "../component/CheckOut/AddressCard";
import SummaryRow from "../component/CheckOut/SummaryRow";
import PrimaryButton from "../component/CheckOut/PrimaryButton";

const ReviewOrderScreen = ({ navigation }: any) => {
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
        <CheckoutStepper currentStep={3} />

        <Text style={styles.heading}>Review Order</Text>

        <Text style={styles.subtitle}>
          Please review your order before placing it.
        </Text>

        {/* Shipping Address */}
        <AddressCard />

        {/* Payment */}
        <PaymentCard />

        {/* Order Summary */}
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>
            Order Summary
          </Text>

          <SummaryRow
            label="Subtotal"
            value="$120.00"
          />

          <SummaryRow
            label="Shipping"
            value="$10.00"
          />

          <SummaryRow
            label="Tax"
            value="$8.50"
          />

          <View style={styles.divider} />

          <SummaryRow
            label="Total"
            value="$138.50"
          />
        </View>
      </ScrollView>

      <PrimaryButton
        title="Place Order"
        onPress={() => {
          console.log("Order Placed");
        }}
      />
    </SafeAreaView>
  );
};

export default ReviewOrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FB",
  },

  content: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  heading: {
    fontSize: 26,
    fontWeight: "700",
    color: "#111",
    marginTop: 10,
  },

  subtitle: {
    fontSize: 15,
    color: "#666",
    marginTop: 8,
    marginBottom: 25,
  },

  summaryCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    marginTop: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },

  summaryTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 18,
  },

  divider: {
    height: 1,
    backgroundColor: "#ECECEC",
    marginVertical: 15,
  },
});