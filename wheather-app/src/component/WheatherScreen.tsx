import React, { useState,useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import * as Location from "expo-location";
import { Button } from 'react-native-paper';

interface WeatherData {
  city: string;
  country: string;
  temperature: number;
  humidity: number;
  wind: number;
}
const WheatherScreen = () => {

  const [city, setCity] = useState<string>("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);


    useEffect(() => {
  getWeatherByLocation();
}, []);


const getWeatherByLocation = async () => {
  try {
    setLoading(true);

    const { status } =
      await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      alert("Location permission denied");
      setLoading(false);
      return;
    }

    const location = await Location.getCurrentPositionAsync({});

    const { latitude, longitude } = location.coords;

    // Get city name from coordinates
    const reverseGeocode = await Location.reverseGeocodeAsync({
      latitude,
      longitude,
    });

    const cityName = reverseGeocode[0]?.city || "Unknown";

    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`
    );

    const weatherData = await weatherResponse.json();

    setWeather({
      city: cityName,
      country: reverseGeocode[0]?.country || "",
      temperature: weatherData.current.temperature_2m,
      humidity: weatherData.current.relative_humidity_2m,
      wind: weatherData.current.wind_speed_10m,
    });
  } catch (error) {
    console.log(error);
    alert("Failed to get current location weather");
  } finally {
    setLoading(false);
  }
};

  const getWeather = async () => {
    if (!city.trim()) return;

    setLoading(true);

    try {
      // Get coordinates from city name
      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
      );

      const geoData = await geoResponse.json();

      if (!geoData.results || geoData.results.length === 0) {
        alert("City not found");
        setLoading(false);
        return;
      }

      const location = geoData.results[0];

      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`
      );

      const weatherData = await weatherResponse.json();

      setWeather({
        city: location.name,
        country: location.country,
        temperature: weatherData.current.temperature_2m,
        humidity: weatherData.current.relative_humidity_2m,
        wind: weatherData.current.wind_speed_10m,
      });
    } catch (error) {
      alert("Failed to fetch weather");
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Weather App</Text>

      <TextInput
        placeholder="Enter city name"
        value={city}
        onChangeText={setCity}
        style={styles.input}
      />

    <Button mode="contained"
  style={styles.button}
  onPress={() => {
    if (city.trim()) {
      getWeather();
    } else {
      getWeatherByLocation();
    }
  }}>
<Text style={styles.buttonText}>Get Weather</Text>
</Button>
      {loading && <ActivityIndicator size="large" color="#007AFF" />}

      {weather && (
        <View style={styles.card}>
          <Text style={styles.city}>
            {weather.city}, {weather.country}
          </Text>

          <Text style={styles.info}>
            🌡 Temperature: {weather.temperature}°C
          </Text>

          <Text style={styles.info}>
            💧 Humidity: {weather.humidity}%
          </Text>

          <Text style={styles.info}>
            💨 Wind Speed: {weather.wind} km/h
          </Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#859488",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },
  button: {
 
    padding: 14,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    elevation: 4,
  },
  city: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  info: {
    fontSize: 18,
    marginVertical: 5,
  },
});
export default WheatherScreen;