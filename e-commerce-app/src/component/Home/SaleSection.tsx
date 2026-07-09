import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import SaleItemCard from "./SaleItemCard";

const saleData = [
  {
    id: "1",
    title: "Ash Printed Half Sleeve Hawaiian Shirt",
    image: require("../../../assets/Images/halfsleevesshirt.jpg"),
    price: 68,
    oldPrice: 80.25,
    discount: 15,
    rating: 4.8,
    review: 692,
  },
  {
    id: "2",
    title: "Ultra Slim Fit Full Sleeve Shirt",
    image: require("../../../assets/Images/fullsleevesshirt.jpg"),
    price: 42,
    oldPrice: 60,
    discount: 15,
    rating: 4.8,
    review: 692,
  },
  {
    id: "3",
    title: "Maroon Casual Shirt",
    image: require("../../../assets/Images/maroonshirt.jpg"),
    price: 63,
    oldPrice: 75,
    discount: 15,
    rating: 4.8,
    review: 692,
  },
];

const SaleSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Sale Items</Text>

        <TouchableOpacity style={styles.viewAll}>
          <Text style={styles.viewText}>View All</Text>
          <AntDesign name="arrowright" size={14} color="#FF6B00" />
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={saleData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SaleItemCard item={item} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default SaleSection;

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
    marginBottom: 18,
  },

  heading: {
    fontSize: 22,
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