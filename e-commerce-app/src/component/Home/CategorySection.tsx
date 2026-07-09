import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import CategoryItem from "./CategoryItem";

const categories = [
  {
    id: "1",
    title: "Fashion",
    icon: "tshirt-crew",
    iconType: "MaterialCommunityIcons",
    color: "#DDEEFF",
  },
  {
    id: "2",
    title: "Electronics",
    icon: "laptop",
    iconType: "MaterialCommunityIcons",
    color: "#FFE5EC",
  },
  {
    id: "3",
    title: "Beauty",
    icon: "lipstick",
    iconType: "MaterialCommunityIcons",
    color: "#E8F8E8",
  },
  {
    id: "4",
    title: "Bags",
    icon: "shopping-bag",
    iconType: "FontAwesome5",
    color: "#FFF2DD",
  },
  {
    id: "5",
    title: "Shoes",
    icon: "shoe-sneaker",
    iconType: "MaterialCommunityIcons",
    color: "#E8EEFF",
  },
  {
    id: "6",
    title: "Watch",
    icon: "watch",
    iconType: "MaterialCommunityIcons",
    color: "#FDECEC",
  },
];

const CategorySection = () => {
  return (
    <View style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <Text style={styles.heading}>Shop by Category</Text>

        <TouchableOpacity style={styles.view}>
          <Text style={styles.viewText}>View All</Text>

          <AntDesign name="arrowright" size={14} color="#FF5A1F" />
        </TouchableOpacity>
      </View>

      {/* Categories */}

      <FlatList
        horizontal
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CategoryItem item={item} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CategorySection;

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    paddingLeft: 18,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 18,
    marginBottom: 20,
  },

  heading: {
    fontSize: 22,
    fontWeight: "700",
    color: "#222",
  },

  view: {
    flexDirection: "row",
    alignItems: "center",
  },

  viewText: {
    color: "#FF5A1F",
    fontSize: 15,
    fontWeight: "600",
    marginRight: 5,
  },
});