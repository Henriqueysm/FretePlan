import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, Image, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { useAuthRequest, makeRedirectUri, ResponseType } from 'expo-auth-session';
import { getAuth, signInWithCredential, GoogleAuthProvider } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

WebBrowser.maybeCompleteAuthSession();

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyCsyGBqiEL5NH4OP9LlCyCbGke0SUZoYas",
    authDomain: "tcc-moto-financas.firebaseapp.com",
    projectId: "tcc-moto-financas",
    storageBucket: "tcc-moto-financas.appspot.com", // correto
    messagingSenderId: "196699755479",
    appId: "1:196699755479:web:198022c5f90f66e6c2b192",
    measurementId: "G-0HZTFYXYBJ"
  };
  firebase.initializeApp(firebaseConfig);  // <- Faltou isso!
}

const auth = getAuth();

export default function GoogleLoginButton() {
  const [loading, setLoading] = useState(false);

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: '196699755479-opqnofdlhdnon98gku8o980slvpui51j.apps.googleusercontent.com',
      redirectUri: makeRedirectUri({ useProxy: true }),
      responseType: ResponseType.Token,
      scopes: ['profile', 'email'],
      usePKCE: false,
    },
    { authorizationEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth' }
  );

  useEffect(() => {
    if (response?.type === 'success') {
      setLoading(true);
      const { access_token } = response.params;
      const credential = GoogleAuthProvider.credential(null, access_token);
      signInWithCredential(auth, credential)
        .then(userCred => {
          Alert.alert('Bem-vindo', userCred.user.email);
          setLoading(false);
        })
        .catch(err => {
          Alert.alert('Erro', err.message);
          setLoading(false);
        });
    } else if (response?.type === 'error' || response?.type === 'dismiss') {
      Alert.alert('Login cancelado ou erro');
    }
  }, [response]);

  return (
    <TouchableOpacity
      disabled={!request || loading}
      style={[styles.btn, loading && { opacity: 0.6 }]}
      onPress={() => promptAsync({ useProxy: true })}
    >
      <Image
        source={{ uri: 'https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg' }}
        style={styles.googleIcon}
      />
      {loading ? <ActivityIndicator color="#333" /> : <Text style={styles.googleText}>Continue com o Google</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 30,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    alignSelf: 'center',
    elevation: 2,
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
