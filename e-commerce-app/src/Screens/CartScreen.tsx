import React from "react";
import { SafeAreaView, FlatList } from "react-native";

import CartHeader from "../component/cartitem/CartHeader";
import ShippingProgress from "../component/cartitem/ShippingProgress";
import CartItem from "../component/cartitem/CartItem";
import OrderSummary from "../component/cartitem/OrderSummary";

const cartData = [
  {
    id: "1",
    title: "leather bag",
    size: "2XL",
    color: "brown",
    price: "80.00",
    image: require("../../assets/Images/bag.jpg"),
  },
  {
    id: "2",
    title: "Ultra Slim Fit Shirt",
    size: "2XL",
    color: "Green",
    price: "80.00",
    image: require("../../assets/Images/fullsleevesshirt.jpg"),
  },
  {
    id: "3",
    title: "Printed Half Sleeve Shirt",
    size: "2XL",
    color: "Green",
    price: "80.00",
    image: require("../../assets/Images/halfsleevesshirt.jpg"),
  },
];

export default function CartScreen({ navigation }:any) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <CartHeader navigation={navigation} />

      <FlatList
        data={cartData}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<ShippingProgress />}
        renderItem={({ item }) => <CartItem item={item} />}
         ListFooterComponent={<OrderSummary />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}