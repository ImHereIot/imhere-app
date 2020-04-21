
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Image, TouchableOpacity, Text, KeyboardAvoidingView, Linking, ScrollView, StatusBar, TextInput } from 'react-native';
import { Divider } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';

import api from '../../services/api'

import logoImg from '../../../assets/logo2.png'
import styles from './styles'

export default function TeacherEditDetail() {
  const navigation = useNavigation();
  const route = useRoute();

  let classroom = [{
    value: 'B102',
  }, {
    value: 'B103',
  }, {
    value: 'B104',
  }, {
    value: 'B105',
  }, {
    value: 'B106',
  }, {
    value: 'B107',
  }, {
    value: 'B108',
  }, {
    value: 'B109',
  }, {
    value: 'B110',
  }, {
    value: 'B111',
  }, {
    value: 'B112',
  }];

  let institution = [{
    value: 'UniSociesc - Marquês de Olinda',
  }];

  function navigateToBack() {
    navigation.goBack();
  }

  return (
    <>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.select({
          ios: 'padding',
          android: null,
        })}>
        <View style={styles.horizontalPadding}>
          <StatusBar barStyle="dark-content" />
          <View style={styles.header}>
            <Image style={styles.image} source={logoImg}></Image>

            <TouchableOpacity onPress={navigateToBack}>
              <Feather name='arrow-left' size={36} color="#4682B4" />
            </TouchableOpacity>
          </View>
          <Divider style={styles.divider} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.horizontalPadding}>

            <View style={styles.class}>
              <Text style={styles.classProperty}>AULA</Text>
              <TextInput style={styles.classValue} placeholder="Nome da Aula"></TextInput>

              <Text style={styles.classProperty}>DATA:</Text>
              <TextInput style={styles.classValue} placeholder="Data"></TextInput>

              <Text style={styles.classProperty}>HORÁRIO:</Text>
              <TextInput style={styles.classValue} placeholder="Hora"></TextInput>

              <Text style={styles.classPropertyDropdown}>INSTITUIÇÃO:</Text>
              <Dropdown data={institution} style={styles.classValue} placeholder="Instituição"></Dropdown>

              <Text style={styles.classPropertyDropdown}>SALA:</Text>
              <Dropdown data={classroom} style={styles.classValue} placeholder="Sala"></Dropdown>

              <Text style={styles.classProperty}>DETALHES:</Text>
              <TextInput style={styles.classValue} placeholder="Detalhes" multiline={true}></TextInput>
            </View>
          </View>
          <TouchableOpacity style={styles.createButton} onPress={navigateToBack}>
            <Feather name="check" size={20} color="#fff" />
            <Text style={styles.createText}>Confirmar Aula</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}