import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

interface PaymentCardProps {
  cardType?: string;
  cardNumber?: string;
}

const PaymentCard: React.FC<PaymentCardProps> = ({
  cardType = "MasterCard",
  cardNumber = "**** **** **** 4242",
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <FontAwesome5 name="credit-card" size={22} color="#111" />

        <View style={styles.info}>
          <Text style={styles.title}>{cardType}</Text>
          <Text style={styles.number}>{cardNumber}</Text>
        </View>
      </View>
    </View>
  );
};

export default PaymentCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 16,
    marginBottom: 18,
    elevation: 2,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  info: {
    marginLeft: 15,
  },

  title: {
    fontSize: 17,
    fontWeight: "700",
  },

  number: {
    color: "#777",
    marginTop: 4,
  },
});