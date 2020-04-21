import React from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'

import api from '../../services/api';

import styles from './styles';
import logoImg from '../../../assets/logo2.png'

export default function Login() {
  const navigation = useNavigation();

  function navigateToBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateToBack}>
          <Feather name='arrow-left' size={36} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.logoRadius}></View>
      <Image source={logoImg} style={styles.logo}></Image>

      <View style={styles.info}>
        <Text style={styles.infoText}>Aproxime seu dispositivo NFC próximo ao leitor da sua sala de aula!</Text>
        <Feather name="wifi" size={60} color="black" style={styles.infoIcon} />
      </View>
    </View>
  );
}