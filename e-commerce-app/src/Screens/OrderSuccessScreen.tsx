import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import PrimaryButton from "../component/CheckOut/PrimaryButton";

const OrderSuccessScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <View style={styles.successCircle}>
          <Ionicons
            name="checkmark"
            size={70}
            color="#fff"
          />
        </View>

        <Text style={styles.title}>
          Order Placed Successfully!
        </Text>

        <Text style={styles.subtitle}>
          Thank you for your purchase.
          {"\n"}
          Your order has been placed successfully.
        </Text>

        <View style={styles.orderCard}>
          <Text style={styles.label}>
            Order Number
          </Text>

          <Text style={styles.orderNumber}>
            #ORD-258963
          </Text>

          <View style={styles.divider} />

          <Text style={styles.info}>
            Estimated Delivery
          </Text>

          <Text style={styles.delivery}>
            3 - 5 Business Days
          </Text>
        </View>

      </View>

      <View style={styles.bottom}>
        <PrimaryButton
          title="Track Order"
          onPress={() =>
            navigation.navigate("TrackOrder")
          }
        />

        <PrimaryButton
          title="Continue Shopping"
          onPress={() =>
            navigation.navigate("Home")
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default OrderSuccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
  },

  content: {
    alignItems: "center",
    paddingHorizontal: 25,
    marginTop: 80,
  },

  successCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "#22C55E",
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#22C55E",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },

  title: {
    marginTop: 35,
    fontSize: 28,
    fontWeight: "700",
    color: "#111",
    textAlign: "center",
  },

  subtitle: {
    marginTop: 15,
    fontSize: 16,
    color: "#777",
    textAlign: "center",
    lineHeight: 24,
  },

  orderCard: {
    width: "100%",
    backgroundColor: "#fff",
    marginTop: 40,
    borderRadius: 20,
    padding: 25,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },

  label: {
    color: "#888",
    fontSize: 15,
  },

  orderNumber: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111",
    marginTop: 8,
  },

  divider: {
    height: 1,
    backgroundColor: "#ECECEC",
    marginVertical: 20,
  },

  info: {
    fontSize: 15,
    color: "#888",
  },

  delivery: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "600",
    color: "#22C55E",
  },

  bottom: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
});