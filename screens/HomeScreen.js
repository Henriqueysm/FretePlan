import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import GoogleLoginButton from '../components/GoogleLoginButton';


export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.body}>
      <View style={styles.avatar}>
        <Image  source={require('../assets/avatar.png')}  style={styles.avatarImage}  resizeMode="contain"/>
      </View>


      <View style={styles.intro}>
        <Text style={styles.title}>MOTOBEM</Text>
        <Text style={styles.subtitle}>O BEM-ESTAR DA SUA MOTO COMEÇA AQUI</Text>
      </View>

      <View style={styles.container}>
        <TouchableOpacity style={[styles.btn, styles.email]} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.emailText}>Conecte-se com email</Text>
        </TouchableOpacity>

       <GoogleLoginButton />




        <Text style={styles.divider}>ou</Text>

        <TouchableOpacity  style={[styles.btn, styles.createAccount]} onPress={() => navigation.navigate('Criar')}>
          <Text style={styles.createAccountText}>Crie sua conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#262626',
    flex: 1,
    alignItems: 'center',
  },
  avatar: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  avatarImage: {
    width: '100%',
    height: 400,
  },
  intro: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    marginBottom: 40,
  },
  title: {
    color: '#FBCE02',
    fontSize: 32,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#FBCE02',
    fontSize: 16,
    fontFamily: 'Poppins',
    textAlign: 'center',
  },
  container: {
    marginTop: -20,
    backgroundColor: '#FBCE02',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: 'center',
    paddingVertical: 30,
    width: '100%',
    gap: 45,
  },
  btn: {
    width: '80%',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  email: {
    backgroundColor: '#FFF',
  },
  emailText: {
    color: '#333',
    fontSize: 16,
  },
  google: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
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
  divider: {
    color: '#555',
    fontSize: 14,
    marginVertical: -15,
  },
  
  createAccount: {
    backgroundColor: '#000',
  },
  createAccountText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
