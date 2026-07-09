import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import CheckoutHeader from "../component/CheckOut/CheckoutHeader";
import PrimaryButton from "../component/CheckOut/PrimaryButton";

const TrackOrderScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <CheckoutHeader
        title="Track Order"
        onBack={() => navigation.goBack()}
      />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >

        {/* Order Card */}

        <View style={styles.card}>
          <Text style={styles.orderNo}>Order #ORD-258963</Text>

          <Text style={styles.status}>
            On the way 🚚
          </Text>

          <Text style={styles.delivery}>
            Estimated Delivery
          </Text>

          <Text style={styles.time}>
            Today • 4:30 PM
          </Text>
        </View>

        {/* Address */}

        <View style={styles.card}>
          <Text style={styles.heading}>
            Delivery Address
          </Text>

          <View style={styles.row}>
            <Ionicons
              name="location"
              size={22}
              color="#111"
            />

            <Text style={styles.address}>
              221B Baker Street,
              {"\n"}
              London, UK
            </Text>
          </View>
        </View>

        {/* Rider */}

        <View style={styles.card}>
          <Text style={styles.heading}>
            Delivery Partner
          </Text>

          <View style={styles.driverRow}>
            <View style={styles.avatar}>
              <Ionicons
                name="person"
                size={34}
                color="#fff"
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.driverName}>
                John Smith
              </Text>

              <Text style={styles.driverSub}>
                Delivery Rider
              </Text>
            </View>

            <TouchableOpacity style={styles.call}>
              <Ionicons
                name="call"
                color="#fff"
                size={22}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Timeline */}

        <View style={styles.card}>
          <Text style={styles.heading}>
            Order Status
          </Text>

          {[
            "Order Placed",
            "Payment Confirmed",
            "Packed",
            "Out for Delivery",
            "Delivered",
          ].map((item, index) => (
            <View
              key={index}
              style={styles.timelineRow}
            >
              <View style={styles.left}>
                <View
                  style={[
                    styles.circle,
                    index < 4 && styles.activeCircle,
                  ]}
                />

                {index !== 4 && (
                  <View
                    style={[
                      styles.line,
                      index < 3 && styles.activeLine,
                    ]}
                  />
                )}
              </View>

              <View>
                <Text style={styles.timelineText}>
                  {item}
                </Text>

                {index < 4 && (
                  <Text style={styles.done}>
                    Completed
                  </Text>
                )}
              </View>
            </View>
          ))}
        </View>

      </ScrollView>

      <View style={styles.bottom}>
        <PrimaryButton
          title="Back To Home"
          onPress={() =>
            navigation.navigate("Home")
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default TrackOrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
  },

  content: {
    padding: 20,
    paddingBottom: 120,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 20,
    marginBottom: 20,
    elevation: 4,
  },

  orderNo: {
    fontSize: 22,
    fontWeight: "700",
  },

  status: {
    marginTop: 8,
    fontSize: 18,
    color: "#22C55E",
    fontWeight: "600",
  },

  delivery: {
    marginTop: 18,
    color: "#666",
  },

  time: {
    marginTop: 6,
    fontSize: 18,
    fontWeight: "600",
  },

  heading: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 15,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  address: {
    marginLeft: 12,
    fontSize: 15,
    color: "#444",
    flex: 1,
  },

  driverRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  driverName: {
    fontSize: 18,
    fontWeight: "700",
  },

  driverSub: {
    color: "#777",
    marginTop: 4,
  },

  call: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#22C55E",
    justifyContent: "center",
    alignItems: "center",
  },

  timelineRow: {
    flexDirection: "row",
    marginBottom: 25,
  },

  left: {
    width: 30,
    alignItems: "center",
  },

  circle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#D1D5DB",
  },

  activeCircle: {
    backgroundColor: "#22C55E",
  },

  line: {
    width: 2,
    height: 45,
    backgroundColor: "#D1D5DB",
    marginTop: 4,
  },

  activeLine: {
    backgroundColor: "#22C55E",
  },

  timelineText: {
    fontSize: 16,
    fontWeight: "600",
  },

  done: {
    color: "#22C55E",
    marginTop: 4,
  },

  bottom: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: "#F7F8FA",
  },
});