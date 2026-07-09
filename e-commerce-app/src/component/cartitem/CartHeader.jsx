import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import {
  Ionicons,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const CartHeader = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View style={styles.container}>
        {/* Left Side */}
        <View style={styles.leftContainer}>
          <TouchableOpacity
            onPress={() => navigation?.goBack()}
            style={styles.backBtn}
          >
            <Ionicons name="arrow-back" size={24} color="#222" />
          </TouchableOpacity>

          <Text style={styles.title}>Cart</Text>
        </View>

        {/* Right Side */}
        <View style={styles.rightContainer}>
          <TouchableOpacity style={styles.icon}>
            <Feather name="search" size={23} color="#222" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icon}>
            <MaterialCommunityIcons
              name="shopping-outline"
              size={25}
              color="#222"
            />
            <View style={styles.dot} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default CartHeader;

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 18,
    paddingBottom: 14,

    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  backBtn: {
    marginRight: 12,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#222",
  },

  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    marginLeft: 20,
  },

  dot: {
    position: "absolute",
    right: -2,
    top: 1,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FF4D4F",
  },
});