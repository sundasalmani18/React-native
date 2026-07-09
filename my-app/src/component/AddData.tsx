import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../../config/firebase";

const AddData = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const saveUserData = async () => {
    try {
      const user = auth.currentUser;

      if (!user) {
        Alert.alert("Error", "User not logged in");
        return;
      }
console.log("Auth user:", auth.currentUser);
console.log("User UID:", user.uid);
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name,
        address,
        email: user.email,
        updatedAt: serverTimestamp(),
      });

      Alert.alert("Success", "User data saved");
      setName("");
      setAddress("");
    } catch (error) {
      console.log(error);
  Alert.alert("Error", String(error));
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={{
          borderWidth: 1,
          marginBottom: 10,
          padding: 10,
        }}
      />

      <TextInput
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
        style={{
          borderWidth: 1,
          marginBottom: 10,
          padding: 10,
        }}
      />

      <TouchableOpacity
        onPress={saveUserData}
        style={{
          backgroundColor: "blue",
          padding: 12,
          margin:30,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff" }}>Add Data</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddData;