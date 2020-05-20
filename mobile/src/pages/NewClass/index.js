import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Alert, Image, TouchableOpacity, Text, KeyboardAvoidingView, Linking, ScrollView, StatusBar, TextInput, SafeAreaView } from 'react-native';
import { Divider } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';

import api from '../../services/api'

import logoImg from '../../../assets/logo2.png'
import styles from './styles'

export default function NewClass() {
  const route = useRoute();
  const navigation = useNavigation(null);
  // URI interna armazenada da foto  
  // const catchedPhoto = route.params.catchedPhoto;
  const person = route.params.person;

  console.log(person);

  const [lesson, setLesson] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [place, setPlace] = useState('');
  const [crew, setCrew] = useState('');
  const [room, setRoom] = useState('');
  const [detail, setDetail] = useState('');

  // Lembrar de olhar terminal para visualizar a URI da imagem
  // console.log({ uri: catchedPhoto });


  let classroom = [{
    value: 'B102',
  }, {
    value: 'B103',
  }, {
    value: 'B104',
  }, {
    value: 'B105',
  }, ];

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

  function navigateToBack() {
    navigation.goBack();
  }

  function navigateToCamera() {
    navigation.navigate('CameraFrame');
  }

  async function createLesson(teacherId, teacher, lesson, date, hour, place, crew, room, detail) {
    if (lesson == ''
      || date == ''
      || hour == ''
      || place == ''
      || crew == ''
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
      try {

        console.log({
          idProfessor: teacherId,
          professor: teacher,
          nomeAula: lesson,
          data: date,
          horario: hour,
          unidade: place,
          idTurma: crew,
          sala: room,
          detalhe: detail,
        }, 'Registro criado!')
        
        await api.post('api/class', {
          idProfessor: teacherId,
          professor: teacher,
          nomeAula: lesson,
          data: date,
          horario: hour,
          unidade: place,
          idTurma: crew,
          sala: room,
          detalhe: detail,
        });

        navigation.navigate('TeacherHome');
      } catch (err) {
        alert('Erro ao cadastrar aula, tente novamente!')
      }
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
              <TextInput
                style={styles.classValue}
                placeholder="Nome da Aula"
                onChangeText={lesson => setLesson(lesson)}
              ></TextInput>

              <Text style={styles.classProperty}>DATA:</Text>
              <TextInput
                style={styles.classValue}
                placeholder="Data"
                onChangeText={date => setDate(date)}
              ></TextInput>

              <Text style={styles.classProperty}>HORÁRIO:</Text>
              <TextInput
                style={styles.classValue}
                placeholder="Hora"
                onChangeText={hour => setHour(hour)}
              ></TextInput>

              <Text style={styles.classPropertyDropdown}>INSTITUIÇÃO:</Text>
              <Dropdown
                data={institution}
                style={styles.classValue}
                placeholder="Instituição"
                onChangeText={place => setPlace(place)}
              ></Dropdown>

              <Text style={styles.classPropertyDropdown}>TURMA:</Text>
              <Dropdown
                data={group}
                style={styles.classValue}
                placeholder="Turma"
                onChangeText={crew => setCrew(crew)}
              ></Dropdown>

              <Text style={styles.classPropertyDropdown}>SALA:</Text>
              <Dropdown
                data={classroom}
                style={styles.classValue}
                laceholder="Sala"
                onChangeText={room => setRoom(room)}
              ></Dropdown>

              <Text style={styles.classProperty}>DETALHES:</Text>
              <TextInput
                style={styles.classValue}
                placeholder="Detalhes"
                multiline={true}
                onChangeText={detail => setDetail(detail)}
              ></TextInput>

              {/* <Text style={styles.classProperty}>MÍDIA:</Text> */}

              {/* Quando tem foto (volta da câmera, com foto) */}
              {/* {catchedPhoto && */}
              {/* <View>
                  <View style={styles.mediaButton}>
                    <TouchableOpacity onPress={navigateToCamera}>
                      <Image
                        style={styles.mediaImage}
                        // pega uri da variável catchedPhoto recebida por parâmetro
                        source={{ uri: catchedPhoto }}
                      ></Image>
                    </TouchableOpacity>
                  </View>
                  <View><Feather style={styles.imageIcon} name="camera" size={20} color="#4682B4" /></View>
                </View>
              } */}

              {/* Quanto não tem foto na variável */}
              {/* {!catchedPhoto &&
                <TouchableOpacity style={styles.addMediaButton} onPress={navigateToCamera}>
                  <Feather name="plus" size={20} color="#4682B4" />
                  <Feather name="camera" size={20} color="#4682B4" />
                </TouchableOpacity>
              } */}

            </View>
          </View>
          <TouchableOpacity
            style={styles.createButton}
            onPress={() => createLesson(
              person.registro,
              person.nomePessoa,
              lesson,
              date,
              hour,
              place,
              crew,
              room,
              detail
            )}
          >
            <Feather name="check" size={20} color="#fff" />
            <Text style={styles.createText}>Confirmar Aula</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}