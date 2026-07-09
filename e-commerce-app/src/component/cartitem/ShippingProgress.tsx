import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ShippingProgress = () => {
  const progress = 60; // 60%

  return (
    <View style={styles.container}>
      {/* Text */}
      <Text style={styles.text}>
        Shop for{" "}
        <Text style={styles.bold}>$200</Text>
        {" "}more to enjoy{" "}
        <Text style={styles.free}>FREE Shipping</Text>
      </Text>

      {/* Progress */}
      <View style={styles.progressContainer}>
        {/* Background */}
        <View style={styles.progressBackground} />

        {/* Green Progress */}
        <View
          style={[
            styles.progressFill,
            { width: `${progress}%` },
          ]}
        />

        {/* Truck Icon */}
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons
            name="truck-fast-outline"
            size={22}
            color="#444"
          />
        </View>
      </View>
    </View>
  );
};

export default ShippingProgress;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 22,
    borderBottomWidth: 1,
    borderBottomColor: "#F2F2F2",
  },

  text: {
    textAlign: "center",
    fontSize: 16,
    color: "#666",
    marginBottom: 25,
  },

  bold: {
    fontWeight: "700",
    color: "#444",
  },

  free: {
    color: "#FF5A1F",
    fontWeight: "700",
  },

  progressContainer: {
    justifyContent: "center",
    height: 32,
  },

  progressBackground: {
    position: "absolute",
    width: "100%",
    height: 6,
    backgroundColor: "#E8EEF7",
    borderRadius: 5,
  },

  progressFill: {
    position: "absolute",
    height: 6,
    backgroundColor: "#00C853",
    borderRadius: 5,
  },

  iconContainer: {
    position: "absolute",
    alignSelf: "center",
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",

    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});