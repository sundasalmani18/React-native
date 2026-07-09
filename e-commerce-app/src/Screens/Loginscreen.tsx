import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      {/* Email */}
      <View style={{ marginBottom: 40 }}>
    <Text style={styles.title}>
        Welcome 
    </Text>

    <Text style={styles.subtitle}>
        Login to continue shopping
    </Text>
</View>

      <View style={styles.inputContainer}>
        <MaterialCommunityIcons
          name="email-outline"
          size={22}
          color="#A8A8A8"
        />

        <TextInput
          placeholder="Enter your email"
          placeholderTextColor="#B0B0B0"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
      </View>

      {/* Password */}

      <View style={styles.passwordContainer}>
        <MaterialCommunityIcons
          name="lock-outline"
          size={22}
          // color="#FF4B3A"
        />

        <TextInput
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
          style={styles.input}
        />

        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? "eye-outline" : "eye-off-outline"}
            size={24}
            color="#8C8C8C"
          />
        </TouchableOpacity>
      </View>

      {/* Error */}

      <View style={styles.row}>
        {/* <Text style={styles.error}>*the password was wrong</Text> */}

        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      {/* Login */}

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      {/* Signup */}

      <View style={styles.signupRow}>
        <Text style={styles.normalText}>
          Don't have an account?
        </Text>

        <TouchableOpacity>
          <Text style={styles.signup}> Sign Up</Text>
        </TouchableOpacity>
      </View>

      {/* Divider */}

      <View style={styles.dividerRow}>
        <View style={styles.line} />
        <Text style={styles.or}>OR</Text>
        <View style={styles.line} />
      </View>

      {/* Apple */}

      <TouchableOpacity style={styles.socialButton}>
        <FontAwesome name="apple" size={28} color="#000" />
        <Text style={styles.socialText}>Continue with Apple</Text>
      </TouchableOpacity>

      {/* Facebook */}

      <TouchableOpacity style={styles.socialButton}>
        <FontAwesome name="facebook-official" size={24} color="#1877F2" />
        <Text style={styles.socialText}>Continue with Facebook</Text>
      </TouchableOpacity>

      {/* Google */}

      <TouchableOpacity style={styles.socialButton}>
        <FontAwesome name="google" size={24} color="#EA4335" />
        <Text style={styles.socialText}>Continue with Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  backgroundColor: "#fff",
  paddingHorizontal: 24,
  paddingTop: 50,
  paddingBottom: 40,
  },
  title:{
 fontSize:34,
 fontWeight:"700",
 color:"#1F2937"
},

subtitle:{
 marginTop:8,
 fontSize:16,
 color:"#6B7280"
},

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 35,
    height: 58,
    paddingHorizontal: 18,
    marginBottom: 18,
  },

  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.3,
    // borderColor: "#FF4B3A",
    borderRadius: 35,
    height: 58,
    paddingHorizontal: 18,
  },

  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: "#222",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    marginBottom: 25,
  },

  error: {
    color: "#FF4B3A",
    fontSize: 13,
  },

  forgot: {
    color: "#FF4B3A",
    fontSize: 15,
    fontWeight: "500",
   marginLeft:200
  },

  loginButton: {
    backgroundColor: "#262833",
    height: 58,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },

  loginText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
  },

  signupRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 24,
  },

  normalText: {
    color: "#666",
    fontSize: 16,
  },

  signup: {
    color: "#FF4B3A",
    fontSize: 16,
    fontWeight: "600",
  },

  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#E6E6E6",
  },

  or: {
    marginHorizontal: 12,
    color: "#B0B0B0",
    fontSize: 16,
  },

  socialButton: {
    height: 58,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },

  socialText: {
    fontSize: 18,
    color: "#222",
    marginLeft: 16,
    fontWeight: "500",
  },
});