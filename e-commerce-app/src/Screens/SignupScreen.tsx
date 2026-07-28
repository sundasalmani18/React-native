import React, { useState } from "react";
import axios from 'axios'
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

export default function SignUpScreen({ navigation }: any) {
  const [secure, setSecure] = useState(true);
  const [agree, setAgree] = useState(false);
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    if (!name || !email || !password) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    try {
      const res = await axios.post(
        "http://192.168.1.16:8080/api/auth/register",
        {
          name,
          email,
          password,
        }
      );
      console.log("response",res.data)

      Alert.alert("Success", res.data.message);

      setName("");
      setEmail("");
      setPassword("");
    } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      Alert.alert(
        "Error",
        error.response?.data?.message || "Signup Failed"
      );
    }
     else {
      Alert.alert("Error", "Something went wrong");
    }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topSection}>
  <TouchableOpacity onPress={() => navigation.goBack()}>
    <Ionicons name="arrow-back" size={24} color="#222" />
  </TouchableOpacity>

  <Text style={styles.title}>Create Account</Text>

  <Text style={styles.subtitle}>
    Create your account to start shopping.
  </Text>
</View>
      {/* Header */}
      {/* <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#222" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Sign Up</Text>
      </View> */}

      {/* Name */}
      <View style={styles.inputContainer}>
        <Feather name="user" size={22} color="#A7A7A7" />

        <TextInput
          placeholder="Enter your name"
          value={name}
        onChangeText={setName}
          placeholderTextColor="#A7A7A7"
          style={styles.input}
        />
      </View>

      {/* Email */}
      <View style={styles.inputContainer}>
        <Feather name="mail" size={22} color="#A7A7A7" />

        <TextInput
          placeholder="Enter your email"
          placeholderTextColor="#A7A7A7"
           value={email}
        onChangeText={setEmail}
          keyboardType="email-address"
          style={styles.input}
        />
      </View>

      {/* Password */}
      <View style={styles.inputContainer}>
        <Feather name="lock" size={22} color="#A7A7A7" />

        <TextInput
          placeholder="Enter your password"
          placeholderTextColor="#A7A7A7"
           value={password}
        onChangeText={setPassword}
          secureTextEntry={secure}
          style={styles.input}
        />

        <TouchableOpacity onPress={() => setSecure(!secure)}>
          <Feather
            name={secure ? "eye-off" : "eye"}
            size={22}
            color="#A7A7A7"
          />
        </TouchableOpacity>
      </View>

      {/* Terms */}
      <TouchableOpacity
        style={styles.termsRow}
        onPress={() => setAgree(!agree)}
      >
        <Ionicons
          name={agree ? "checkbox" : "square-outline"}
          size={24}
          color={agree ? "#ff5b2e" : "#CFCFCF"}
        />

        <Text style={styles.termsText}>
          I agree to the medidoc{" "}
          <Text style={styles.orange}>Terms of Service</Text> and{" "}
          <Text style={styles.orange}>Privacy Policy</Text>
        </Text>
      </TouchableOpacity>

      {/* Button */}
      <TouchableOpacity style={styles.button}   onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Already have an account yet?
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.login}> Log in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
  },

  // header: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   marginTop: 20,
  //   marginBottom: 40,
  // },
  topSection: {
  marginBottom: 35,
  marginTop:35
},

title: {
  marginTop: 25,
  fontSize: 32,
  fontWeight: "700",
  color: "#245acf",
},

subtitle: {
  marginTop: 8,
  fontSize: 16,
  color: "#1a1b1d",
  lineHeight: 24,
},

  // headerTitle: {
  //   fontSize: 30,
  //   fontWeight: "600",
  //   marginLeft: 16,
  //   color: "#222",
  // },

 inputContainer: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#fff",
  borderRadius: 18,
  height: 60,
  paddingHorizontal: 18,
  marginBottom: 18,

  shadowColor: "#000",
  shadowOpacity: 0.05,
  shadowRadius: 8,
  shadowOffset: {
    width: 0,
    height: 3,
  },

  elevation: 3,
},
input: {
  flex: 1,
  marginLeft: 12,
  fontSize: 16,
  color: "#111827",
},

 termsRow: {
  flexDirection: "row",
  alignItems: "flex-start",
  marginTop: 8,
  marginBottom: 30,
},

termsText: {
  flex: 1,
  marginLeft: 10,
  fontSize: 14,
  lineHeight: 22,
  color: "#6B7280",
},

  orange: {
    color: "#FF6A3D",
  },

 button: {
  height: 60,
  borderRadius: 18,
  backgroundColor: "#1c1c1d",
  justifyContent: "center",
  alignItems: "center",

  shadowColor: "#2c2c2e",
  shadowOpacity: 0.3,
  shadowRadius: 10,
  shadowOffset: {
    width: 0,
    height: 5,
  },

  elevation: 6,
},

buttonText: {
  color: "#fff",
  fontSize: 18,
  fontWeight: "700",
},

 footer: {
  flexDirection: "row",
  justifyContent: "center",
  marginTop: 30,
},

footerText: {
  color: "#6B7280",
  fontSize: 15,
},

login: {
  color: "#245acf",
  fontWeight: "700",
  fontSize: 15,
},
});