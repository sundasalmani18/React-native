import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function OnboardingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Image
        source={require("../../assets/Images/onboarding.jpg")} // apni image
        style={styles.image}
      />

      <LinearGradient
        colors={["rgba(255,255,255,0.90)", "#87D8F7"]}
        style={styles.bottomCard}
      >
        <Text style={styles.title}>
          Stay Ahead of the{"\n"}Latest Trends
        </Text>

        <Text style={styles.subtitle}>
          Welcome Aboard EziBuy: Navigating Your{"\n"}Health Journey
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5EC8F2",
  },

  image: {
    width: "100%",
    height: "72%",
    resizeMode: "cover",
  },

  bottomCard: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 260,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    alignItems: "center",
    paddingTop: 35,
    paddingHorizontal: 25,
    marginBottom:40
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#23242B",
    textAlign: "center",
    lineHeight: 32,
  },

  subtitle: {
    marginTop: 18,
    color: "#5E6572",
    fontSize: 15,
    textAlign: "center",
    lineHeight: 24,
  },

  button: {
    marginTop: 30,
    width: "92%",
    height: 56,
    backgroundColor: "#232533",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
    
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
  },
});