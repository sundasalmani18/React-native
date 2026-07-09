import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import {
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";

const BottomTab = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item}>
        <Ionicons name="home" size={26} color="#FF6B00" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Feather name="search" size={24} color="#777" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.centerButton}>
        <MaterialIcons name="shopping-bag" size={28} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Ionicons name="heart-outline" size={25} color="#777" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Ionicons name="person-outline" size={25} color="#777" />
      </TouchableOpacity>
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,

    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    backgroundColor: "#fff",
    borderRadius: 35,

    paddingVertical: 15,

    elevation: 12,

    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },

  item: {
    alignItems: "center",
    justifyContent: "center",
  },

  centerButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FF6B00",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -35,

    elevation: 8,
  },
});