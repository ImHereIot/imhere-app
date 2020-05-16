import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, FlatList, Image, Text, TouchableOpacity, StatusBar } from 'react-native';
import { Divider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api'

import logoImg from '../../../assets/logo2.png'
import styles from './styles'

export default function StudentHome() {
	const navigation = useNavigation();
	const [lesson, setLesson] = useState([]);
	const [loading, setLoading] = useState(false);

	function navigateToDetail(lesson) {
		navigation.navigate('StudentDetail', { lesson });
	}

	function navigateTo(route) {
		navigation.navigate(route);
	}
	async function loadLesson() {
		if (loading) {
			return;
		}

		setLoading(true);

		const response = await api.get('api/class');
		setLesson([...response.data.docs]);
		//setLesson([...lesson, ...response.data]);
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
				<TouchableOpacity onPress={() => navigateTo('NFC')}>
					<Image style={styles.image} source={logoImg}></Image>
				</TouchableOpacity>

				<View style={styles.actions}>
					<TouchableOpacity style={styles.logoff}>
						<Text style={styles.logoffText}>Logoff</Text>
						<Feather name="power" size={18} color="red" />
					</TouchableOpacity>

					<Text style={styles.headerText}>
						Você possui <Text style={styles.headerTextBold}> 2 aulas </Text>hoje.
					</Text>
				</View>
			</View>
			<Text style={styles.title}>Bem-vindo</Text>
			<Text style={styles.description}>Suas aulas, Leonardo:</Text>
			<Divider style={styles.divider} />

			<FlatList
				data={lesson}
				keyExtractor={lesson => String(lesson.idNFC)}
				showsVerticalScrollIndicator={false}
				onEndReached={loadLesson}
				onEndReachedThreshold={0.2} //indica quantos por cento está do fim da pagina (de 0 a 1)
				renderItem={({ item: lesson }) => (

					<>
						<View style={styles.class}>
							<View style={styles.classStatus}>
								<Text style={styles.classStatusText, { fontSize: 12, color: 'red', fontWeight: 'bold' }}>FALTOU</Text>
								<Feather name="x" size={16} color="red" />
							</View>

							<Text style={styles.className}>{lesson.idAula}</Text>

							<View style={styles.dateTimeView}>
								<Text style={styles.classDateTime}>{lesson.data}</Text>
                <Text style={styles.classDateTime}>{lesson.horario}</Text>
							</View>

							<Text style={styles.classData}>{lesson.unidade} | {lesson.sala}</Text>
							<Text style={styles.classData}>{lesson.professor}</Text>

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
		</View>
	);
}