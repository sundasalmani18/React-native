import React, { useRef, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  CodeField,
  Cursor,
} from "react-native-confirmation-code-field";

const CELL_COUNT = 4;

export default function OtpScreen({ navigation }: any) {
  const [value, setValue] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}

  <View style={styles.header}>
  <TouchableOpacity onPress={() => navigation.goBack()}>
    <Ionicons name="arrow-back" size={24} color="#222" />
  </TouchableOpacity>

  <Text style={styles.headerTitle}>Enter OTP</Text>
</View>

      {/* Content */}

      <View style={styles.content}>
        <Text style={styles.title}>
          Enter Verification Code
        </Text>

        <Text style={styles.subtitle}>
          Enter code that we have sent to your
        </Text>

        <Text style={styles.subtitle}>
          mail info***@gmail.com
        </Text>

        {/* OTP */}

        <CodeField
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          rootStyle={styles.codeFieldRoot}
          renderCell={({ index, symbol, isFocused }) => (
            <View
              key={index}
              style={[
                styles.cell,
                isFocused && styles.focusCell,
              ]}
            >
              <Text style={styles.cellText}>
                {symbol || (isFocused ? <Cursor /> : "")}
              </Text>
            </View>
          )}
        />

        {/* Verify */}

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Verify
          </Text>
        </TouchableOpacity>

        {/* Resend */}

        <View style={styles.bottomRow}>
          <Text style={styles.gray}>
            Didn't receive the code?
          </Text>

          <TouchableOpacity>
            <Text style={styles.orange}>
              {" "}
              Resend
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

header: {
    marginTop:25,
  height: 80,
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 20,
  backgroundColor: "#fff",
  borderBottomWidth: 1,
  borderBottomColor: "#F3F4F6",
},

headerTitle: {
   
  fontSize: 24,
  fontWeight: "600",
  marginLeft: 16,
  color: "#222",
},
content: {
  flex: 1,
  paddingHorizontal: 24,
  paddingTop: 40,
},

  title: {
    fontSize: 34,
    fontWeight: "700",
    color: "#2D313A",
    marginBottom: 14,
  },

  subtitle: {
    color: "#8A8A8A",
    fontSize: 18,
    lineHeight: 28,
  },

  codeFieldRoot: {
    marginTop: 40,
    justifyContent: "space-between",
  },

  cell: {
    width: 65,
    height: 65,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: "#FF6235",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  focusCell: {
    backgroundColor: "#EEF5FF",
    borderColor: "#4F46E5",
  },

  cellText: {
    fontSize: 32,
    fontWeight: "700",
    color: "#222",
  },

  button: {
    marginTop: 45,
    height: 60,
    backgroundColor: "#23242F",
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 35,
  },

  gray: {
    color: "#8C8C8C",
    fontSize: 17,
  },

  orange: {
    color: "#FF6235",
    fontSize: 17,
    fontWeight: "600",
  },
});