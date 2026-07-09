import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface AddressCardProps {
  name?: string;
  address?: string;
  city?: string;
}

const AddressCard: React.FC<AddressCardProps> = ({
  name = "John Doe",
  address = "123 Main Street",
  city = "New York, USA",
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Ionicons
          name="location-outline"
          size={24}
          color="#111"
        />

        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>

          <Text style={styles.address}>
            {address}
          </Text>

          <Text style={styles.city}>
            {city}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AddressCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 16,
    marginBottom: 18,
    elevation: 2,
  },

  row: {
    flexDirection: "row",
  },

  info: {
    marginLeft: 15,
    flex: 1,
  },

  name: {
    fontSize: 17,
    fontWeight: "700",
  },

  address: {
    marginTop: 5,
    color: "#666",
  },

  city: {
    marginTop: 3,
    color: "#666",
  },
});