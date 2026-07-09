import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  FontAwesome5,
  FontAwesome6,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const OrderSummary = () => {
  return (
    <View style={styles.container}>
      {/* Summary Card */}
      <View style={styles.card}>
        <Text style={styles.heading}>Order Summary</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Subtotal</Text>
          <Text style={styles.value}>$86.70</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Delivery</Text>
          <Text style={styles.value}>$9.90</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>$105.50</Text>
        </View>
      </View>

      {/* Checkout Button */}

      <TouchableOpacity style={styles.checkoutBtn}>
        <Text style={styles.checkoutText}>Checkout</Text>
      </TouchableOpacity>

      {/* Payment Icons */}

      <View style={styles.paymentRow}>
        <FontAwesome6
          name="cc-mastercard"
          size={34}
          color="#EB001B"
        />

        <FontAwesome6
          name="cc-visa"
          size={34}
          color="#1A1F71"
        />

        <FontAwesome5
          name="apple-pay"
          size={38}
          color="#000"
        />

        <MaterialCommunityIcons
          name="credit-card-outline"
          size={34}
          color="#1677FF"
        />

        <FontAwesome5
          name="paypal"
          size={32}
          color="#003087"
        />
      </View>
    </View>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  container: {
    padding: 18,
    backgroundColor: "#fff",
  },

  card: {
    backgroundColor: "#FAFAFA",
    borderRadius: 16,
    padding: 18,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 2,
  },

  heading: {
    fontSize: 24,
    fontWeight: "700",
    color: "#222",
    marginBottom: 22,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
  },

  label: {
    fontSize: 17,
    color: "#777",
  },

  value: {
    fontSize: 17,
    fontWeight: "600",
    color: "#333",
  },

  divider: {
    height: 1,
    backgroundColor: "#EAEAEA",
    marginBottom: 18,
  },

  totalLabel: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
  },

  totalValue: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111",
  },

  checkoutBtn: {
    marginTop: 30,
    backgroundColor: "#22252F",
    height: 58,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  checkoutText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },

  paymentRow: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});