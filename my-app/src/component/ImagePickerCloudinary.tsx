import { ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { uploadToCloudinary } from '../../services/UploadToCloudinary';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  Alert,
} from 'react-native';

const ImagePickerCloudinary = () => {
  const [image, setImage] = useState(null);

  const galleryKholo = async () => {
    const { status } =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('Permission nahi mili!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
        console.log(result.assets[0]);
      setImage(result.assets[0]);
    }
  };

  const handleSubmit = async () => {
    if (!image) {
      Alert.alert('Please select an image first');
      return;
    }

    try {
      const response = await uploadToCloudinary(image);

      console.log('Cloudinary Response:', response);

      Alert.alert('Success', 'Image uploaded successfully');
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Upload failed');
    }
  };

  return (
     <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={galleryKholo}
      >
        <Text style={styles.buttonText}>
          Select Image
        </Text>
      </TouchableOpacity>

      {image && (
        <>
          <Image
            source={{ uri: image.uri }}
            style={styles.image}
          />

          <TouchableOpacity
            style={[styles.button, { marginTop: 20 }]}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>
              Submit
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    backgroundColor: '#4A90E2',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  image: {
    width: 220,
    height: 220,
    marginTop: 20,
    borderRadius: 12,
  },
});

export default ImagePickerCloudinary;