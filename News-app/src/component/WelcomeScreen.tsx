import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
 

export default function WelcomeScreen({navigation}:any) {
  
  return (
    <>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={['#1E3A8A', '#4F46E5']}
        style={styles.container}
      >
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.content}>
            {/* Hero Section */}
            <View style={styles.heroCircle}>
              <Ionicons
                name="newspaper-outline"
                size={120}
                color="#FFFFFF"
              />
            </View>

            {/* Text Content */}
            <Text style={styles.title}>
              Stay Informed,{'\n'}Anytime
            </Text>

            <Text style={styles.subtitle}>
              Get breaking news, personalized stories, and real-time updates
              from around the world.
            </Text>

            {/* Buttons */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.primaryButton}>
                <Text style={styles.primaryButtonText}>
                  Get Started
                </Text>
              </TouchableOpacity>


              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.signInText}>
                  Sign In
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.signInText}>
                  Login In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  heroCircle: {
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: 'rgba(255,255,255,0.12)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 42,
  },
  subtitle: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 12,
  },
  buttonContainer: {
    width: '100%',
  },
  primaryButton: {
    backgroundColor: '#FFFFFF',
    height: 56,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  primaryButtonText: {
    color: '#1E3A8A',
    fontSize: 18,
    fontWeight: '600',
  },
  signInText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    marginBottom:50
  },
});