import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ProductCard from "./ProductCard";

const products = [
  {
    id: "1",
    title: "Nike Air Max",
    category: "Running Shoes",
    price: "120",
    rating: "4.9",
    image: require("../../../assets/Images/shoes.jpg"),
  },
  {
    id: "2",
    title: "Leather Bag",
    category: "Women Bag",
    price: "95",
    rating: "4.8",
    image: require("../../../assets/Images/bag.jpg"),
  },
  {
    id: "3",
    title: "Smart Watch",
    category: "Electronics",
    price: "150",
    rating: "5.0",
    image: require("../../../assets/Images/watch.jpg"),
  },
];

const ProductSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Top Seller</Text>

        <TouchableOpacity style={styles.viewAll}>
          <Text style={styles.viewText}>View All</Text>
          <AntDesign name="arrowright" size={14} color="#FF6B00" />
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard item={item} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ProductSection;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingLeft: 18,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
    paddingRight: 18,
  },

  heading: {
    fontSize: 24,
    fontWeight: "700",
    color: "#222",
  },

  viewAll: {
    flexDirection: "row",
    alignItems: "center",
  },

  viewText: {
    color: "#FF6B00",
    marginRight: 5,
    fontWeight: "600",
  },
});