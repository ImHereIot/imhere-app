import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4682B4'
  },

  logoRadius:{
    width: 170,
    height: 170,
    borderRadius: 100,
    backgroundColor: '#fff',
    marginBottom: -160,
    marginTop: -10,
  },

  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
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