import React, { useState, useContext } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import { AuthContext } from '../../context/authContext';


export default function SignUpScreen({ navigation }: any) {

  const { signup } = useContext(AuthContext)!;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const userCredential = await signup(email, password);

      console.log('SUCCESS', userCredential.user);

      navigation.replace('Login');
    } catch (error: any) {
      console.log('CODE:', error.code);
      console.log('MESSAGE:', error.message);
    }
  };


  //   const handleSignup = async () => {
  //   try {
  //      await signup(email, password);
  //     navigation.replace('Login');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };


  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <Text style={styles.logo}>📰</Text>
            </View>

            <Text style={styles.title}>Create Account</Text>

            <Text style={styles.subtitle}>
              Join thousands of readers and get personalized news delivered
              daily.
            </Text>
          </View>

          {/* Form */}
          <View style={styles.form}>


            <Text style={styles.label}>Email Address</Text>
            <TextInput
              placeholder="Enter Email"
              placeholderTextColor="#94A3B8"
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
              placeholder="••••••••"
              placeholderTextColor="#94A3B8"
              secureTextEntry
              style={styles.input}
              value={password}
              onChangeText={setPassword}
            />

            {/* Sign Up Button */}
            <TouchableOpacity style={styles.signUpButton} onPress={handleSignup}>
              <Text style={styles.signUpButtonText}>
                Create Account
              </Text>
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.dividerContainer}>
              <View style={styles.divider} />
              <Text style={styles.dividerText}>OR</Text>
              <View style={styles.divider} />
            </View>

            {/* Social Buttons */}
            {/* <TouchableOpacity style={styles.socialButton} onPress={googleLogin}>
              <Text style={styles.socialText}>
                Continue with Google
              </Text>
            </TouchableOpacity> */}


          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Already have an account?
            </Text>

            <TouchableOpacity>
              <Text style={styles.loginText}> Sign In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingBottom: 30,
  },
  header: {
    marginTop: 40,
    alignItems: 'center',
    marginBottom: 40,
  },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 24,
    backgroundColor: '#EEF2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    fontSize: 36,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#0F172A',
  },
  subtitle: {
    fontSize: 15,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 22,
    paddingHorizontal: 10,
  },
  form: {
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    color: '#334155',
    marginBottom: 8,
    fontWeight: '600',
  },
  input: {
    height: 56,
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 16,
    paddingHorizontal: 18,
    fontSize: 16,
    color: '#0F172A',
    marginBottom: 18,
  },
  signUpButton: {
    height: 58,
    backgroundColor: '#2563EB',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  signUpButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 28,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#E2E8F0',
  },
  dividerText: {
    marginHorizontal: 14,
    color: '#94A3B8',
    fontWeight: '600',
  },
  socialButton: {
    height: 56,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
    backgroundColor: '#FFFFFF',
  },
  socialText: {
    color: '#0F172A',
    fontSize: 15,
    fontWeight: '600',
  },
  footer: {
    marginTop: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: '#64748B',
    fontSize: 15,
  },
  loginText: {
    color: '#2563EB',
    fontWeight: '700',
    fontSize: 15,
  },
});