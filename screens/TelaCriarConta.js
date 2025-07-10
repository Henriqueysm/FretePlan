// TelaCriarConta.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';

export default function TelaCriarConta() {
  const [termos, setTermos] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: '#262626' }}>
      <View style={styles.container}>
        <Text style={styles.titulo}>...</Text>
        <Text style={styles.subtitulo}>
          Vamos{"\n"}
          <Text style={{ fontWeight: 'bold' }}>Criar sua conta</Text>
        </Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome Completo"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="Repita a Senha"
          secureTextEntry
          placeholderTextColor="#aaa"
        />

        <TouchableOpacity
  onPress={() => setTermos(!termos)}
  style={styles.fakeCheckboxContainer}
>
  <View style={[styles.fakeCheckbox, termos && styles.checked]} />
  <Text style={styles.checkboxLabel}>
    Eu aceito os <Text style={{ fontWeight: 'bold', textDecorationLine: 'none' }}>Termos de Privacidade</Text>
  </Text>
</TouchableOpacity>


        <TouchableOpacity
          style={[styles.botao, { opacity: termos ? 1 : 0.5 }]}
          disabled={!termos}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={{ fontWeight: 'bold' }}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.loginText}>
          Já possui uma conta?{" "}
          <Text style={{ fontWeight: 'bold', textDecorationLine: 'none' }}>
            Entre aqui
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBCE02',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    padding: 30,
  },
  titulo: {
    fontSize: 46,
    color: 'black',
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 46,
    color: 'black',
    marginTop: 10,
  },
  formContainer: {
    paddingTop: 40,
    paddingHorizontal: 30,
  },
  input: {
    backgroundColor: 'transparent',
    borderColor: '#FBCE02',
    borderWidth: 1,
    borderRadius: 50,
    padding: 15,
    marginVertical: 8,
    color: 'white',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkboxLabel: {
    color: 'white',
    fontSize: 14,
  },
  fakeCheckboxContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginVertical: 10,
},
fakeCheckbox: {
  width: 20,
  height: 20,
  borderWidth: 2,
  borderColor: '#FBCE02',
  borderRadius: 4,
  marginRight: 10,
},
checked: {
  backgroundColor: '#FBCE02',
},
botao: {
    backgroundColor: '#FBCE02',
    borderRadius: 50,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  loginText: {
    color: 'white',
    fontSize: 14,
    marginTop: 30,
    textAlign: 'center',
  },
});
