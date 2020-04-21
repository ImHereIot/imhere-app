import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4682B4',
    paddingHorizontal: 24,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginLeft: 275,
    marginBottom: 150
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
  },

  info: {
    marginTop: 50,
    justifyContent:'center',
    alignItems: 'center'
  },

  infoText: {
    fontWeight: 'bold',
  },

  infoIcon:{
    marginTop: 100,
    fontWeight: 'bold',
  }

});