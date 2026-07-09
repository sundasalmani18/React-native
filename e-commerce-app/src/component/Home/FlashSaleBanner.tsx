import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const FlashSaleBanner = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/Images/flashsale.webp")}
        style={styles.banner}
        imageStyle={styles.image}
      >
        <View style={styles.overlay} />

        <View style={styles.content}>
          <Text style={styles.sale}>FLASH SALE</Text>

          <Text style={styles.discount}>50% OFF</Text>

          <Text style={styles.subtitle}>
            On all fashion products today
          </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Shop Now</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default FlashSaleBanner;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    marginTop: 30,
    marginBottom: 30,
  },

  banner: {
    height: 180,
    justifyContent: "center",
    borderRadius: 20,
    overflow: "hidden",
  },

  image: {
    borderRadius: 20,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.35)",
  },

  content: {
    paddingHorizontal: 25,
  },

  sale: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 2,
  },

  discount: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
    marginVertical: 5,
  },

  subtitle: {
    color: "#fff",
    fontSize: 15,
    marginBottom: 20,
  },

  button: {
    width: 120,
    height: 42,
    borderRadius: 25,
    backgroundColor: "#FF6B00",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
  },
});