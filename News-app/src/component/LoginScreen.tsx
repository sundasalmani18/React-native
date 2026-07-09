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


const LoginScreen = ({ navigation }: any) => {


  const { login,googleSignIn  } = useContext(AuthContext)!;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    try {
      await login(email, password);
      navigation.replace('News');
    } catch (error) {
      console.log(error);
    }
  };

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
            <View style={styles.logoBox}>
              <Text style={styles.logo}>📰</Text>
            </View>

            <Text style={styles.title}>Welcome Back</Text>

            <Text style={styles.subtitle}>
              Sign in to continue reading personalized news and breaking updates.
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

            {/* Forgot Password */}
            <TouchableOpacity style={styles.forgotContainer}>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>

            {/* Login Button */}
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.dividerRow}>
              <View style={styles.line} />
              <Text style={styles.orText}>OR</Text>
              <View style={styles.line} />
            </View>

            {/* Social Login */}
            <TouchableOpacity style={styles.socialButton} onPress={googleSignIn}>
              <Text style={styles.socialText}>Continue with Google</Text>
            </TouchableOpacity>


          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Don’t have an account?</Text>
            <TouchableOpacity>
              <Text style={styles.signupText}> Sign Up</Text>
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
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 40,
  },

  logoBox: {
    width: 85,
    height: 85,
    borderRadius: 22,
    backgroundColor: '#EEF2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
  },

  logo: {
    fontSize: 38,
  },

  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#0F172A',
  },

  subtitle: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 22,
    paddingHorizontal: 10,
  },

  form: {
    marginTop: 10,
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 8,
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
    marginBottom: 16,
  },

  forgotContainer: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },

  forgotText: {
    color: '#2563EB',
    fontWeight: '600',
    fontSize: 13,
  },

  loginButton: {
    height: 58,
    backgroundColor: '#2563EB',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },

  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 28,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E2E8F0',
  },

  orText: {
    marginHorizontal: 12,
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
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
  },

  socialText: {
    color: '#0F172A',
    fontSize: 15,
    fontWeight: '600',
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 'auto',
    alignItems: 'center',
  },

  footerText: {
    color: '#64748B',
    fontSize: 14,
  },

  signupText: {
    color: '#2563EB',
    fontSize: 14,
    fontWeight: '700',
  },
});
export default LoginScreen