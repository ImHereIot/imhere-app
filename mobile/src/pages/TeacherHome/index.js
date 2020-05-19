import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, FlatList, Image, Text, TouchableOpacity, StatusBar } from 'react-native';
import { Divider } from 'react-native-elements'
import { useNavigation, useRoute } from '@react-navigation/native';

import api from '../../services/api'

import logoImg from '../../../assets/logo2.png'
import styles from './styles'

export default function TeacherHome() {
  const navigation = useNavigation();
  const route = useRoute();
  // const catchedPhoto = [];
  let person = route.params.person;

  const [lesson, setLesson] = useState([]);
  const [loading, setLoading] = useState(false);

  function navigateToDetail(lesson) {
    navigation.navigate('TeacherEditDetail', { lesson });
  }

  function navigateToNFC() {
    navigation.navigate('NFC');
  }

  function navigateToNewClass() {
    navigation.navigate('NewClass', /*catchedPhoto,*/ { person });
  }

  function logoff() {
		person = {}
		navigation.navigate('Login');
	}

  async function loadLesson() {
    if (loading) {
      return;
    }

    setLoading(true);

    const response = await api.get(`api/class/${person.registro}`);
    setLesson([...response.data.retornoAula]);
    // setLesson([...lesson, ...response.data]);
    console.log(lesson);

    setLoading(false);
  }

  useEffect(() => {
    loadLesson();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigateToNFC()}>
          <Image style={styles.image} source={logoImg}></Image>
        </TouchableOpacity>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.addClass} onPress={navigateToNewClass}>
            <Feather name="plus" size={18} color="#fff" />
            <Text style={styles.addClassText}>Aula</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoff} onPress={() => logoff()}>
            <Feather name="power" size={18} color="red" />
            <Text style={styles.logoffText}>Logoff</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.title}>Bem-vindo</Text>
      <Text style={styles.description}>Suas aulas, Professor {person.nomePessoa}:</Text>

      <Divider style={styles.divider} />

      <FlatList
        data={lesson}
        keyExtractor={lesson => String(lesson.idAula)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadLesson}
        onEndReachedThreshold={0.2} //indica quantos por cento está do fim da pagina (de 0 a 1)
        renderItem={({ item: lesson }) => (
          <>
            <View style={styles.class}>
              <View style={styles.classStatus}>
                <Text style={styles.classStatusText}>ENTROU 18:47</Text>
                <Feather name="check" size={16} color="green" />
              </View>

              <Text style={styles.className}>{lesson.nomeAula}</Text>

              <View style={styles.dateTimeView}>
                <Text style={styles.classDateTime}>{lesson.data}</Text>
                <Text style={styles.classDateTime}>{lesson.horario}</Text>
              </View>

              <Text style={styles.classData}>{lesson.unidade} | {lesson.sala}</Text>
              <Text style={styles.classData}>22 alunos presentes.</Text>

              <TouchableOpacity
                style={styles.detailsButton}
                onPress={() => navigateToDetail(lesson)}
              >
                <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                <Feather name="arrow-right" size={16} color="#3498db" />
              </TouchableOpacity>
            </View>
          </>
        )}
      />
    </View >
  );
}