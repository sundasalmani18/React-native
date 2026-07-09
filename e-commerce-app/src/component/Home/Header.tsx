import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  Feather,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.container}>
      {/* Left Side */}
      <View style={styles.leftContainer}>
        <TouchableOpacity>
          <Feather name="menu" size={26} color="#222" />
        </TouchableOpacity>

        <Text style={styles.title}>Hello Alex</Text>
      </View>

      {/* Right Side */}
      <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.icon}>
          <Feather name="search" size={24} color="#222" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.icon}>
          <Ionicons name="notifications-outline" size={24} color="#222" />
          <View style={styles.dot} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.icon}>
          <MaterialCommunityIcons
            name="shopping-outline"
            size={26}
            color="#222"
          />
          <View style={styles.dot} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    marginLeft: 15,
    color: "#222",
  },

  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    marginLeft: 18,
  },

  dot: {
    position: "absolute",
    right: -1,
    top: 1,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FF4D4F",
  },
});