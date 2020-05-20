
import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Alert, View, Image, TouchableOpacity, Text, KeyboardAvoidingView, Linking, ScrollView, StatusBar, TextInput } from 'react-native';
import { Divider } from 'react-native-elements'
import { DataTable } from 'react-native-paper';
import { Dropdown } from 'react-native-material-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';

import api from '../../services/api'

import logoImg from '../../../assets/logo2.png'
import styles from './styles'

export default function TeacherEditDetail() {
  const navigation = useNavigation();
  const route = useRoute();
  const lesson = route.params.lesson;

  const classDate = new Date(lesson.data);
  const classTime = new Date(lesson.horario);

  const [date, setDate] = useState(classDate);
  const [hour, setHour] = useState(classTime);
  const [place, setPlace] = useState(lesson.unidade);
  const [room, setRoom] = useState(lesson.sala);
  const [detail, setDetail] = useState(lesson.detalhe);

  const assignDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    console.log(currentDate);
  }

  const assignTime = (event, selectedDate) => {
    const currentTime = selectedDate || hour;
    setHour(currentTime);
    console.log(currentTime);
  }

  let classroom = [{
    value: 'B102',
  }, {
    value: 'B103',
  }, {
    value: 'B104',
  }, {
    value: 'B105',
  }];

  let group = [{
    value: 'SIN3MA',
  }, {
    value: 'ECP3CU',
  }, {
    value: 'SIN4MA',
  }, {
    value: 'SIN2MA',
  }];

  let institution = [{
    value: 'UniSociesc - Marquês de Olinda',
  }];

  function navigateToBack(id) {
    if (lesson == ''
      || date == ''
      || hour == ''
      || place == ''
      || room == '') {
      Alert.alert('Ops!',
        'Aula, Data, Horário, Instituição, Turma e Sala são campos obrigatórios.',
        [
          {
            text: 'Ok, vou informar esses campos!',
            onPress: () => console.log("Ok pressed"),
            style: "cancel"
          },
        ],
        { cancelable: false }
      );
    } else {
      if (lesson.data !== date
        || lesson.horario !== hour
        || lesson.unidade !== place
        || lesson.sala !== room
        || lesson.detalhe !== detail) {
        Alert.alert('Deseja salvar suas alterações?',
          'Se confirmar, suas alterações serão efetivadas.',
          [
            {
              text: 'Cancelar',
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            {
              text: 'Confirmar',
              onPress: () => updateLesson(
                id,
                date,
                hour,
                place,
                room,
                detail
              ),
            },
          ],
          { cancelable: false }
        );
      } else {
        navigation.goBack();
      }
    }
  }

  function navigateTo(route) {
    navigation.navigate(route);
  }

  async function updateLesson(id, date, hour, place, room, detail) {
    try {
      api.put(`api/class/${id}`, {
        data: date,
        horario: hour,
        unidade: place,
        sala: room,
        detalhe: detail,
      });
    } catch (err) {
      alert('Erro ao alterar aula, tente novamente!')
    }

    console.log({
      idAula: id,
      data: date,
      horario: hour,
      unidade: place,
      sala: room,
      detalhe: detail,
    })
    navigation.goBack();
  }

  async function confirmDelete(id) {

    Alert.alert('Deseja excuir essa aula?',
      'Se confirmar, não conseguirá acessar mais essa aula!',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: 'Confirmar',
          onPress: () => deleteLesson(id),
        },
      ],
      { cancelable: false }
    );
  }

  async function deleteLesson(id) {
    try {
      await api.delete(`api/class/delete/${id}`);
      navigation.navigate('TeacherHome');
    } catch (err) {
      alert('Erro ao excluir aula, tente novamente!')
    }
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
              <Text style={styles.classProperty}>{lesson.nomeAula}</Text>
            </View>

            <TouchableOpacity onPress={() => navigateToBack(lesson.idAula)}>
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
              <DateTimePicker
                display='default'
                value={date}
                mode='date'
                timeZoneOffsetInMinutes={0}
                onChange={assignDate}
              />

              <Text style={styles.classProperty}>HORÁRIO:</Text>
              <DateTimePicker
                display='default'
                value={hour}
                mode='time'
                timeZoneOffsetInMinutes={0}
                onChange={assignTime}
                minuteInterval='5'
              />

              <Text style={styles.classPropertyDropdown}>INSTITUIÇÃO:</Text>
              <Dropdown
                data={institution}
                style={styles.classValue}
                placeholder="Instituição"
                onChangeText={place => setPlace(place)}
                value={lesson.unidade}
              ></Dropdown>

              <Text style={styles.classProperty}>TURMA:</Text>
              <Text
                style={styles.classValue}
              >{lesson.idTurma}</Text>

              <Text style={styles.classPropertyDropdown}>SALA:</Text>
              <Dropdown
                data={classroom}
                style={styles.classValue}
                placeholder="Sala"
                onChangeText={room => setRoom(room)}
                value={lesson.sala}
              ></Dropdown>

              <Text style={styles.classProperty}>DETALHES:</Text>
              <TextInput
                style={styles.classValue}
                placeholder="Detalhes"
                multiline={true}
                onChangeText={detail => setDetail(detail)}
              >{lesson.detalhe}</TextInput>
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
          <TouchableOpacity style={styles.deleteButton} onPress={() => confirmDelete(lesson.idAula)}>
            <Feather name="trash-2" size={20} color="#fff" />
            <Text style={styles.deleteText}>Excluir</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}