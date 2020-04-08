import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4682B4'
  },

  logo: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom: 30,
    marginTop: -50
  },

  input: {
    marginTop: 15,
    padding: 15,
    width: 300,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 24
  },

  button: {
    width: 300,
    height: 42,
    backgroundColor: '#3498db',
    marginTop: 15,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },

  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  }

});