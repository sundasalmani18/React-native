import { createUserWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    ScrollView,
} from "react-native"
import { auth } from "../../config/firebase";
import { useNavigation } from '@react-navigation/native';

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
      const navigation = useNavigation();
    
    const handleSignupBtn = async () => {
    
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
             const uid = response.user.uid;

        // Store UID in AsyncStorage
        await AsyncStorage.setItem("userId", uid);

        console.log("User Created:", uid);
            console.log(response)

navigation.replace("LoginUser");
        } catch (error: any) {
            console.log("ERROR", error?.message)
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.card}>
                    <Text style={styles.title}>Create Account</Text>
                    <Text style={styles.subtitle}>
                        Sign up to get started with your journey.
                    </Text>

    
                    <TextInput
                        style={styles.input}
                        placeholder="Email Address"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />

    
                    <TouchableOpacity style={styles.button} onPress={handleSignupBtn}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.loginText}>
                            Already have an account? Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Signup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F7FC",
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: "center",
        padding: 20,
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    title: {
        fontSize: 30,
        fontWeight: "700",
        textAlign: "center",
        marginBottom: 8,
        color: "#1E293B",
    },
    subtitle: {
        fontSize: 14,
        textAlign: "center",
        color: "#64748B",
        marginBottom: 25,
    },
    input: {
        height: 55,
        borderWidth: 1,
        borderColor: "#E2E8F0",
        borderRadius: 12,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: "#FAFAFA",
        fontSize: 16,
    },
    button: {
        backgroundColor: "#2563EB",
        height: 55,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
    },
    loginText: {
        textAlign: "center",
        marginTop: 20,
        color: "#2563EB",
        fontWeight: "500",
    },
});
