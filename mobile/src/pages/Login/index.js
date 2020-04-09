import React, { Component } from 'react';
import { Feather } from '@expo/vector-icons';
import { Alert, View, Image, TextInput, TouchableOpacity, Text, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import styles from './styles';
import logoImg from '../../assets/logo.png';

export default function Login() {
  const navigation = useNavigation();

  Logon = () => {
    navigation.navigate('TeacherHome');
    //navigation.navigate('StudentHome');
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.select({
        ios: 'padding',
        android: null,
      })}>
      <Image source={logoImg} style={styles.logo}></Image>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Matrícula" />
        <TextInput style={styles.input} secureTextEntry={true} placeholder="Senha" />

        <TouchableOpacity style={styles.button} onPress={() => { this.Logon() }}>
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}