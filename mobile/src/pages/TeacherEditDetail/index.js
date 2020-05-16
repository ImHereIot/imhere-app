
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Image, TouchableOpacity, Text, KeyboardAvoidingView, Linking, ScrollView, StatusBar, TextInput } from 'react-native';
import { Divider } from 'react-native-elements'
import { DataTable } from 'react-native-paper';
import { Dropdown } from 'react-native-material-dropdown';

import api from '../../services/api'

import logoImg from '../../../assets/logo2.png'
import styles from './styles'

export default function TeacherEditDetail() {
  const navigation = useNavigation();
  const route = useRoute();
  const lesson = route.params.lesson;

  const [lesson2, setLesson2] = useState(null);
  const [date, setDate] = useState(null);
  const [hour, setHour] = useState(null);
  const [place, setPlace] = useState(null);
  const [crew, setCrew] = useState(null);
  const [room, setRoom] = useState(null);
  const [detail, setDetail] = useState(null);

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

  function navigateTo(route) {
    navigation.navigate(route);
  }

  async function updateLesson(lesson, date, hour, place, crew, room, detail) {

    api.put(`api/class/${lesson.idNFC}`, {
      idAula: lesson,
      data: date,
      horario: hour,
      unidade: place,
      turma: crew,
      sala: room,
      detalhe: detail
    }).then(function (response) {
      Alert.alert("Alterado com sucesso!");
    }).catch(function (error) {
      console.log(error);
    });

    console.log({
      idAula: lesson,
      data: date,
      horario: hour,
      unidade: place,
      idTurma: crew,
      sala: room,
      detalhe: detail
    })

    // navigation.navigate('TeacherHome');
  }

  function deleteLesson(id) {
    api.delete(`api/class/${id}`);

    navigateToBack;
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
            <TouchableOpacity onPress={() => navigateTo('NFC')}>
              <Image style={styles.image} source={logoImg}></Image>
            </TouchableOpacity>

            <View style={styles.titleClass}>
              <Text style={styles.classProperty}>{lesson.idAula}</Text>
            </View>

            <TouchableOpacity onPress={navigateToBack}>
              <Feather name='arrow-left' size={36} color="#4682B4" />
            </TouchableOpacity>
          </View>
          <Divider style={styles.divider} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.horizontalPadding}>

            <View style={styles.class}>
              <View style={styles.classStatus}>
                <Text style={styles.classStatusText}>CONFIRMADA</Text>
                <Feather name="check" size={16} color="green" />
              </View>

              <Text style={styles.classProperty}>DATA:</Text>
              <TextInput style={styles.classValue} placeholder="Data">{lesson.data}</TextInput>

              <Text style={styles.classProperty}>HORÁRIO:</Text>
              <TextInput style={styles.classValue} placeholder="Hora">{lesson.horario}</TextInput>

              <Text style={styles.classPropertyDropdown}>INSTITUIÇÃO:</Text>
              <Dropdown data={institution} style={styles.classValue} placeholder="Instituição">{lesson.unidade}\</Dropdown>

              <Text style={styles.classPropertyDropdown}>SALA:</Text>
              <Dropdown data={classroom} style={styles.classValue} placeholder="Sala">{lesson.sala}</Dropdown>

              <Text style={styles.classProperty}>DETALHES:</Text>
              <TextInput style={styles.classValue} placeholder="Detalhes" multiline={true}>{lesson.detalhe}</TextInput>
            </View>

            <View style={styles.attendanceBox}>
              <Text style={styles.attendanceText}>LISTA DE PRESENÇA</Text>

              <DataTable>
                <DataTable.Header>
                  <DataTable.Title>Nome</DataTable.Title>
                  <DataTable.Title numeric>Matrícula</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                  <DataTable.Cell>Leonardo Mayer Kleesattel</DataTable.Cell>
                  <DataTable.Cell numeric>121813536 <Feather name="check" size={16} color="green" /></DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell>Enrico Stachon</DataTable.Cell>
                  <DataTable.Cell numeric>121813950 <Feather name="check" size={16} color="green" /></DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell>Julio Cesar</DataTable.Cell>
                  <DataTable.Cell numeric>121813436 <Feather name="check" size={16} color="green" /></DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell>Vitor Hugo Schramm</DataTable.Cell>
                  <DataTable.Cell numeric>121815678 <Feather name="x" size={16} color="red" /></DataTable.Cell>
                </DataTable.Row>
              </DataTable>
            </View>
          </View>
          <TouchableOpacity style={styles.deleteButton} onPress={() => deleteLesson(lesson.idNFC)}>
            <Feather name="trash-2" size={20} color="#fff" />
            <Text style={styles.deleteText}>Excluir</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}