import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SaleItemCard = ({ item }:any) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View>
        <Image source={item.image} style={styles.image} />

        <View style={styles.badge}>
          <Text style={styles.badgeText}>Top Seller</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text numberOfLines={2} style={styles.title}>
          {item.title}
        </Text>

        <View style={styles.priceRow}>
          <Text style={styles.price}>${item.price}</Text>

          <Text style={styles.oldPrice}>${item.oldPrice}</Text>

          <Text style={styles.off}>{item.discount}% OFF</Text>
        </View>

        <View style={styles.ratingRow}>
          <Ionicons name="star" size={15} color="#FF9800" />

          <Text style={styles.rating}>
            {item.rating} ({item.review})
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SaleItemCard;

const styles = StyleSheet.create({
  card: {
    width: 170,
    marginRight: 15,
  },

  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },

  badge: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "#FF7A00",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },

  badgeText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "700",
  },

  content: {
    marginTop: 8,
  },

  title: {
    fontSize: 15,
    fontWeight: "500",
    color: "#333",
    lineHeight: 22,
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
    flexWrap: "wrap",
  },

  price: {
    fontSize: 22,
    fontWeight: "700",
  },

  oldPrice: {
    marginLeft: 6,
    color: "#999",
    textDecorationLine: "line-through",
    fontSize: 13,
  },

  off: {
    marginLeft: 6,
    color: "#FF6B00",
    fontSize: 12,
    fontWeight: "700",
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },

  rating: {
    marginLeft: 4,
    color: "#666",
    fontSize: 13,
  },
});