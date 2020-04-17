
import React from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Image, TouchableOpacity, Text, Linking, ScrollView, StatusBar } from 'react-native';
import { Divider } from 'react-native-elements'
import * as MailComposer from 'expo-mail-composer';


import api from '../../services/api'

import logoImg from '../../../assets/logo2.png'
import styles from './styles'

export default function StudentDetail() {
	const navigation = useNavigation();
	const route = useRoute();

	const message = `Olá Professor,\n\nEstou entrando em contato pois\n\nAtenciosamente, Leonardo M. Kleesattel`;

	function navigateToBack() {
		navigation.goBack();
	}

	function sendMail() {
		MailComposer.composeAsync({
			subject: `Aula de Desenolvimento Mobile e IoT: `,
			recipients: [`leomayerk@hotmail.com`],
			body: message,
		});
	}

	return (
		<View style={styles.container}>
			<StatusBar barStyle="dark-content" />
			<View style={styles.header}>
				<Image style={styles.image} source={logoImg}></Image>

				<View style={styles.titleClass}>
					<Text style={styles.classProperty}>DESENVOLVIMENTO MOBILE E IOT</Text>
				</View>

				<TouchableOpacity onPress={navigateToBack}>
					<Feather name='arrow-left' size={36} color="#4682B4" />
				</TouchableOpacity>
			</View>
			<Divider style={styles.divider} />

			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.class}>
					<View style={styles.classStatus}>
						<Text style={styles.classStatusText, { fontSize: 12, color: '#f7b500', fontWeight: 'bold', marginTop: 0 }}>PENDENTE</Text>
						<Feather name="minus" size={16} color="#f7b500" />
					</View>

					<Text style={styles.classProperty}>DATA E HORA:</Text>
					<View style={styles.dateTimeView}>
						<Text style={styles.dateTimeValue}>16/04/2020</Text>
						<Text style={styles.dateTimeValue}>20:50</Text>
					</View>

					<Text style={styles.classProperty}>LOCAL:</Text>
					<Text style={styles.classValue}>UniSociesc - Marquês de Olinda | b102</Text>

					<Text style={styles.classProperty}>PROFESSOR:</Text>
					<Text style={styles.classValue}>Ricardo Pfitscher</Text>

					<Text style={styles.classProperty}>DETALHES:</Text>
					<Text style={styles.classValue}>Aqui eu vou escrever alguns detalhes de uma suposta aula</Text>
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