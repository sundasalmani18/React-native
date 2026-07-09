import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";

const CategoryItem = ({ item }:any) => {
  const renderIcon = () => {
    switch (item.iconType) {
      case "MaterialCommunityIcons":
        return (
          <MaterialCommunityIcons
            name={item.icon}
            size={30}
            color="#333"
          />
        );

      case "FontAwesome5":
        return (
          <FontAwesome5
            name={item.icon}
            size={24}
            color="#333"
            solid
          />
        );

      default:
        return (
          <Ionicons
            name={item.icon}
            size={28}
            color="#333"
          />
        );
    }
  };

  return (
    <TouchableOpacity style={styles.container}>
      <View style={[styles.circle, { backgroundColor: item.color }]}>
        {renderIcon()}
      </View>

      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginRight: 18,
  },

  circle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
});