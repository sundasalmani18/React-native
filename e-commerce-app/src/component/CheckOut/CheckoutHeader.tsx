import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
interface CheckoutHeaderProps {
  title?: string;
  onBack?: () => void;
  onSearch?: () => void;
  onCart?: () => void;
}

const CheckoutHeader: React.FC<CheckoutHeaderProps> = ({
  title = "Checkout",
  onBack,
  onSearch,
  onCart,
}) => {
  return (
    <View style={styles.container}>
      {/* Left */}
      <TouchableOpacity onPress={onBack}>
        <Ionicons
          name="arrow-back"
          size={24}
          color="#111"
        />
      </TouchableOpacity>

      {/* Center */}
      <Text style={styles.title}>{title}</Text>

      {/* Right */}
      <View style={styles.rightIcons}>
        <TouchableOpacity
          style={styles.iconBtn}
          onPress={onSearch}
        >
          <Feather
            name="search"
            size={22}
            color="#111"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconBtn}
          onPress={onCart}
        >
          <Feather
            name="shopping-bag"
            size={22}
            color="#111"
          />

          {/* Notification Dot */}
          <View style={styles.dot} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckoutHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingVertical: 15,
    backgroundColor: "#fff",
  },

  title: {
    flex: 1,
    marginLeft: 14,
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
  },

  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconBtn: {
    marginLeft: 18,
  },

  dot: {
    position: "absolute",
    right: -1,
    top: 1,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FF3B30",
  },
});