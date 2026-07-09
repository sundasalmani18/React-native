import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface PaymentOptionProps {
  title: string;
  icon: React.ReactNode;
  selected: boolean;
  onPress: () => void;
}

const PaymentOption: React.FC<PaymentOptionProps> = ({
  title,
  icon,
  selected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        selected && styles.selectedContainer,
      ]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <View style={styles.left}>
        <View
          style={[
            styles.radio,
            selected && styles.radioSelected,
          ]}
        >
          {selected && (
            <Ionicons
              name="checkmark"
              size={14}
              color="#fff"
            />
          )}
        </View>

        <Text style={styles.title}>{title}</Text>
      </View>

      <View>{icon}</View>
    </TouchableOpacity>
  );
};

export default PaymentOption;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 18,
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginBottom: 15,
  },

  selectedContainer: {
    borderColor: "#111827",
    backgroundColor: "#F9FAFB",
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  radio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#D1D5DB",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  radioSelected: {
    backgroundColor: "#111827",
    borderColor: "#111827",
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },
});