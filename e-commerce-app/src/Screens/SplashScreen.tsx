import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  ActivityIndicator,
  StatusBar,
} from "react-native";

export default function SplashScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Center Logo */}
      <View style={styles.center}>
        <Image
          source={require("../../assets/Images/logo.webp")} 
          style={styles.logo}
        />

        <Text style={styles.title}>E-commerce</Text>

        <Text style={styles.subtitle}>
          Welcome To Shophop
        </Text>
      </View>

      {/* Bottom Loader */}
      <View style={styles.bottom}>
        <ActivityIndicator
          size="large"
          color="#5B9DFF"
        />

        <Text style={styles.footer}>
          by <Text style={{fontWeight:'600'}}>EziBuy</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 60,
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 95,
    height: 95,
    resizeMode: "contain",
    marginBottom: 15,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#2B2B35",
  },

  subtitle: {
    marginTop: 6,
    fontSize: 18,
    color: "#777",
  },

  bottom: {
    alignItems: "center",
    marginBottom: 20,
  },

  footer: {
    marginTop: 15,
    fontSize: 18,
    color: "#777",
  },
});