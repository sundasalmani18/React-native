import React from "react";
import { View, Text, TextInput,TextInputProps } from "react-native";

interface CustomInputProps  extends TextInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
}) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default CustomInput;