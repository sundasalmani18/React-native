import React from "react";
import { View, ImageBackground, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

const banners = [
  require("../../../assets/Images/banner.jpg"),
  require("../../../assets/Images/banner1.webp"),
  require("../../../assets/Images/banner2.jpg"),
];

const BannerSlider = () => {
  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={width - 36}
        height={230}
        autoPlay
        autoPlayInterval={3000}
        data={banners}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <ImageBackground
            source={item}
            style={styles.banner}
            imageStyle={styles.image}
          >
            <View style={styles.overlay} />

            <View style={styles.content}>
              <Text style={styles.title}>
                New Items with{"\n"}Free Shipping
              </Text>

              <TouchableOpacity>
                <Text style={styles.shop}>Shop Now</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        )}
      />
    </View>
  );
};

export default BannerSlider;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 18,
  },

  banner: {
    width: "100%",
    height: 230,
    justifyContent: "center",
    borderRadius: 18,
    overflow: "hidden",
  },

  image: {
    borderRadius: 18,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.35)",
  },

  content: {
    paddingHorizontal: 22,
  },

  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "700",
    lineHeight: 40,
  },

  shop: {
    color: "#fff",
    marginTop: 15,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    alignSelf: "flex-start",
  },
});