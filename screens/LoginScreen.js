import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function AcessarContaScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0));
  const navigation = useNavigation();

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleLogin = () => {
    console.log("Login com:", email, senha);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#262626' }}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}><Text style={{ fontWeight: 'bold' }}>...</Text></Text>
        <Text style={styles.headerSubtitle}>Acesse sua{"\n"}<Text style={{ fontWeight: 'bold' }}>conta</Text></Text>
      </View>

      <Animated.View style={[styles.formContainer, { opacity: fadeAnim }]}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Senha"
            placeholderTextColor="#aaa"
            secureTextEntry={!mostrarSenha}
            value={senha}
            onChangeText={setSenha}
          />
          <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)} style={styles.eyeIcon}>
            <Icon name={mostrarSenha ? 'visibility' : 'visibility-off'} size={24} color="#aaa" />
          </TouchableOpacity>
        </View>

        <View style={styles.esqueceuContainer}>
          <TouchableOpacity>
            <Text style={styles.esqueceuText}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#FBCE02',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    padding: 30,
  },
  headerTitle: {
    fontSize: 46,
    color: 'black',
  },
  headerSubtitle: {
    fontSize: 46,
    color: 'black',
    marginTop: 10,
  },
  formContainer: {
    paddingTop: 80,
    paddingHorizontal: 30,
  },
  input: {
    backgroundColor: 'transparent',
    borderColor: '#FBCE02',
    borderWidth: 1,
    borderRadius: 50,
    padding: 15,
    marginVertical: 30,
    color: 'white',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#FBCE02',
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 15,
    marginVertical: 10,
    backgroundColor: 'transparent',
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 15,
    color: 'white',
  },
  eyeIcon: {
    paddingHorizontal: 10,
  },
  esqueceuContainer: {
    alignItems: 'flex-end',
    paddingRight: 40,
    marginBottom: 20,
  },
  esqueceuText: {
    color: 'white',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#FBCE02',
    borderRadius: 50,
    padding: 15,
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
    marginTop: 50,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
