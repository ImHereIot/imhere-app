import React, { useState }  from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import styles from './styles';
import logoImg from '../../../assets/logo2.png'

export default function Login() {
  const navigation = useNavigation();

  const [register, setRegister] = useState('');
  const [password, setPassword] = useState('');

  async function Logon(register, password) {

     try {
      const response = await api.post('api/person/auth', {
        registro: register,
        password: password,
      });

      const person = response.data;

      if (person.tipoPessoa === 1) {
        navigation.navigate('TeacherHome', { person });
      } else {
        navigation.navigate('StudentHome', { person });
      }

     } catch (err) {
       alert('Usuário ou senha incorretos! Tente novamente.')
     }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.select({
        ios: 'padding',
        android: null,
      })}>
      <View style={styles.logoRadius}></View>
      <Image source={logoImg} style={styles.logo}></Image>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Matrícula"
          onChangeText={register => setRegister(register)}
        />

        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Senha"
          onChangeText={password => setPassword(password)}
        />

        <TouchableOpacity style={styles.button} onPress={() => Logon(register, password)}>
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}