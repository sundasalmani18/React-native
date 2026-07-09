import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface SummaryRowProps {
  label: string;
  value: string;
  bold?: boolean;
}

const SummaryRow: React.FC<SummaryRowProps> = ({
  label,
  value,
  bold = false,
}) => {
  return (
    <View style={styles.row}>
      <Text
        style={[
          styles.label,
          bold && styles.bold,
        ]}
      >
        {label}
      </Text>

      <Text
        style={[
          styles.value,
          bold && styles.bold,
        ]}
      >
        {value}
      </Text>
    </View>
  );
};

export default SummaryRow;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },

  label: {
    fontSize: 16,
    color: "#666",
  },

  value: {
    fontSize: 16,
    color: "#111",
  },

  bold: {
    fontWeight: "700",
    color: "#111",
  },
});