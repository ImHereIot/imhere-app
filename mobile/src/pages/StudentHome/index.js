import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, FlatList, Image, Text, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { Divider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api'

import logoImg from '../../../assets/logo2.png'
import styles from './styles'

export default function StudentHome() {
	const navigation = useNavigation();

	function navigateTo(route) {
		navigation.navigate(route);
	}

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

			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.class}>
					<View style={styles.classStatus}>
						<Text style={styles.classStatusText}>ENTROU 18:47</Text>
						<Feather name="check" size={16} color="green" />
					</View>

					<Text style={styles.className}>Dev. Mobile e IoT</Text>

					<View style={styles.dateTimeView}>
						<Text style={styles.classDateTime}>07/04</Text>
						<Text style={styles.classDateTime}>19:00</Text>
					</View>

					<Text style={styles.classData}>UniSociesc-Marquês de Olinda | B102</Text>
					<Text style={styles.classData}>Professor Ricardo</Text>

					<TouchableOpacity
						style={styles.detailsButton}
						onPress={() => navigateTo('StudentDetail')}
					>
						<Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
						<Feather name="arrow-right" size={16} color="#3498db" />
					</TouchableOpacity>
				</View>

				<View style={styles.class}>
					<View style={styles.classStatus}>
						<Text style={styles.classStatusText, { fontSize: 12, color: 'red', fontWeight: 'bold' }}>FALTOU</Text>
						<Feather name="x" size={16} color="red" />
					</View>

					<Text style={styles.className}>Dev. Mobile e IoT</Text>

					<View style={styles.dateTimeView}>
						<Text style={styles.classDateTime}>07/04</Text>
						<Text style={styles.classDateTime}>20:50</Text>
					</View>

					<Text style={styles.classData}>UniSociesc-Marquês de Olinda | B102</Text>
					<Text style={styles.classData}>Professor Ricardo</Text>

					<TouchableOpacity
						style={styles.detailsButton}
						onPress={() => navigateTo('StudentDetail')}
					>
						<Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
						<Feather name="arrow-right" size={16} color="#3498db" />
					</TouchableOpacity>
				</View>
			</ScrollView>
		</View>
	);
}