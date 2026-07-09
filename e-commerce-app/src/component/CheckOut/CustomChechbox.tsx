import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface CustomCheckboxProps {
  checked: boolean;
  label: string;
  onPress: () => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  checked,
  label,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <View
        style={[
          styles.checkbox,
          checked && styles.checkboxActive,
        ]}
      >
        {checked && (
          <Ionicons
            name="checkmark"
            size={16}
            color="#fff"
          />
        )}
      </View>

      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomCheckbox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },

  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: "#D1D5DB",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  checkboxActive: {
    backgroundColor: "#111827",
    borderColor: "#111827",
  },

  label: {
    marginLeft: 12,
    fontSize: 15,
    color: "#374151",
    flex: 1,
    lineHeight: 22,
  },
});