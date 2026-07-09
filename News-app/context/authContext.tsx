import React, { createContext, useEffect, useState } from 'react';
import {
  User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithCredential,

} from 'firebase/auth';

import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

import { auth } from '../config/firebase';

WebBrowser.maybeCompleteAuthSession();

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<any>;
  signup: (email: string, password: string) => Promise<any>;
  logout: () => Promise<void>;
  googleSignIn: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | null>(
  null
);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const [request, response, promptAsync] = Google.useAuthRequest({
    webClientId:
      '342893661916-7vs2ls6rvs98pknn6g9plaqptgf1trh1.apps.googleusercontent.com',
       androidClientId:'342893661916-15b0lfindl7c6doivf85h7lptqmhbgio.apps.googleusercontent.com'
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const firebaseGoogleLogin = async () => {
      if (response?.type === 'success') {
        try {
          // const { id_token } = response.authentication!;
          const idToken = response.authentication?.idToken;

          const credential =
            GoogleAuthProvider.credential(idToken);

          await signInWithCredential(auth, credential);
        } catch (error) {
          console.log('Google Sign-In Error:', error);
        }
      }
    };

    firebaseGoogleLogin();
  }, [response]);

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const googleSignIn = async () => {
    await promptAsync();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        signup,
        logout,
        googleSignIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};