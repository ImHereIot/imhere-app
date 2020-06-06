
import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Image, TouchableOpacity, Text, ScrollView, StatusBar } from 'react-native';
import { Divider } from 'react-native-elements'
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../../assets/logo2.png';
import styles from './styles';
import api from '../../services/api';

export default function StudentDetail() {
	const navigation = useNavigation();
	const route = useRoute();
	const lesson = route.params.lesson;
	const person = route.params.person;
	const [studentStatus, setStudentStatus] = useState([]);

	const message = `Olá professor ${lesson.professor},\n\nEstou entrando em contato pois\n\nAtenciosamente, ${person.nomePessoa}`;

	function navigateToBack() {
		navigation.goBack();
	}

	function navigateTo(route) {
		navigation.navigate(route);
	}

	function sendMail() {
		MailComposer.composeAsync({
			subject: `Aula de ${lesson.nomeAula}: `,
			recipients: [`${person.email}`],
			body: message,
		});
	}

	async function getStudentStatus() {
		const response = await api.get(`api/studentsClass/${lesson.idAula}|${person.registro}`);
		setStudentStatus(...response.data.docs);
		console.log(studentStatus);
	}

	useEffect(() => {
		getStudentStatus();
	}, []);

	return (
		<View style={styles.container}>
			<StatusBar barStyle="dark-content" />
			<View style={styles.header}>
				<TouchableOpacity onPress={() => navigateTo('NFC')}>
					<Image style={styles.image} source={logoImg}></Image>
				</TouchableOpacity>

				<View style={styles.titleClass}>
					<Text style={styles.classProperty}>{lesson.nomeAula}</Text>
				</View>

				<TouchableOpacity onPress={navigateToBack}>
					<Feather name='arrow-left' size={36} color="#4682B4" />
				</TouchableOpacity>
			</View>
			<Divider style={styles.divider} />

			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.class}>
					<View style={styles.classStatus}>
						{studentStatus.presenca == 1 &&
							<>
								<Text style={{
									fontSize: 12,
									color: '#f7b500',
									fontWeight: 'bold'
								}}>PENDENTE</Text>
								<Feather name="minus" size={16} color="#f7b500" />
							</>
						}
						{studentStatus.presenca == 2 &&
							<>
								<Text style={{
									fontSize: 12,
									color: 'green',
									fontWeight: 'bold'
								}}>
									ENTROU | {`${new Date(studentStatus.data).getUTCDate()}/${new Date(studentStatus.data).getUTCMonth() + 1}/${new Date(studentStatus.data).getUTCFullYear()}  ${new Date(studentStatus.data).getUTCHours()}:${new Date(studentStatus.data).getUTCMinutes()}`}
								</Text>
								<Feather name="check" size={16} color="green" />
							</>
						}
						{studentStatus.presenca == 3 &&
							<>
								<Text style={{
									fontSize: 12,
									color: 'red',
									fontWeight: 'bold'
								}}>FALTOU</Text>
								<Feather name="x" size={16} color="red" />
							</>
						}
					</View>

					<Text style={styles.classProperty}>DATA E HORA:</Text>
					<View style={styles.dateTimeView}>
						<Text style={styles.dateTimeValue}>
							{`${new Date(lesson.data).getUTCDate()}/${new Date(lesson.data).getUTCMonth() + 1}/${new Date(lesson.data).getUTCFullYear()}`}
						</Text>
						<Text style={styles.dateTimeValue}>
							{`${new Date(lesson.horario).getUTCHours()}:${new Date(lesson.horario).getUTCMinutes()}`}
						</Text>
					</View>

					<Text style={styles.classProperty}>LOCAL:</Text>
					<Text style={styles.classValue}>{lesson.unidade} | {lesson.sala}</Text>

					<Text style={styles.classProperty}>PROFESSOR:</Text>
					<Text style={styles.classValue}>{lesson.professor}</Text>

					<Text style={styles.classProperty}>TURMA:</Text>
					<Text style={styles.classValue}>{lesson.idTurma}</Text>

					<Text style={styles.classProperty}>DETALHES:</Text>
					<Text style={styles.classValue}>{lesson.detalhe}</Text>
				</View>

				<View style={styles.contactBox}>
					<Text style={styles.contactText}>Entre em contato com seu professor:</Text>

					<View style={styles.actions}>
						<TouchableOpacity style={styles.action} onPress={sendMail}>
							<Feather name="mail" size={20} color="#fff" />
							<Text style={styles.actionText}>E-mail</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</View>
	);
}