import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ProductCard = ({ item }:any) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={item.image} style={styles.image} />

      <TouchableOpacity style={styles.favorite}>
        <Ionicons name="heart-outline" size={18} color="#333" />
      </TouchableOpacity>

      <View style={styles.info}>
        <View style={styles.rating}>
          <Ionicons name="star" size={14} color="#FFC107" />
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>

        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>

        <Text style={styles.category}>{item.category}</Text>

        <Text style={styles.price}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    width: 180,
    backgroundColor: "#fff",
    borderRadius: 20,
    marginRight: 18,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  image: {
    width: "100%",
    height: 190,
    resizeMode: "cover",
  },

  favorite: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "#fff",
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center",
  },

  info: {
    padding: 14,
  },

  rating: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },

  ratingText: {
    marginLeft: 5,
    fontSize: 13,
    color: "#555",
  },

  title: {
    fontSize: 17,
    fontWeight: "700",
    color: "#222",
  },

  category: {
    fontSize: 13,
    color: "#888",
    marginTop: 4,
  },

  price: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "700",
    color: "#FF6B00",
  },
});