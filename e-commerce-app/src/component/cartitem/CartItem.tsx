import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";

const CartItem = ({ item }:any) => {
  const [qty, setQty] = useState(2);

  const increase = () => {
    setQty(qty + 1);
  };

  const decrease = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  return (
    <View style={styles.container}>
      {/* Product Image */}
      <Image source={item.image} style={styles.image} />

      {/* Product Info */}
      <View style={styles.info}>
        <Text numberOfLines={2} style={styles.title}>
          {item.title}
        </Text>

        <Text style={styles.subTitle}>
          Size: {item.size}, Color: {item.color}
        </Text>

        {/* Quantity */}
        <View style={styles.qtyContainer}>
          <TouchableOpacity onPress={decrease}>
            <AntDesign name="minus" size={16} color="#333" />
          </TouchableOpacity>

          <Text style={styles.qty}>{qty}</Text>

          <TouchableOpacity onPress={increase}>
            <AntDesign name="plus" size={16} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Right Side */}
      <View style={styles.right}>
        <Text style={styles.price}>${item.price}</Text>

        <TouchableOpacity style={styles.deleteBtn}>
          <Feather name="trash-2" size={20} color="#FF4D4F" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingVertical: 18,
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#F2F2F2",
    alignItems: "center",
  },

  image: {
    width: 95,
    height: 95,
    borderRadius: 10,
    resizeMode: "cover",
  },

  info: {
    flex: 1,
    marginLeft: 15,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },

  subTitle: {
    marginTop: 6,
    fontSize: 14,
    color: "#999",
  },

  qtyContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 90,
    height: 34,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    justifyContent: "space-around",
    marginTop: 15,
  },

  qty: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },

  right: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    height: 95,
  },

  price: {
    fontSize: 22,
    fontWeight: "700",
    color: "#333",
  },

  deleteBtn: {
    marginTop: 25,
  },
});