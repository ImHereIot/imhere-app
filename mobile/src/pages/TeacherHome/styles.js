import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  image: {
    width: 120,
    height: 120,
    resizeMode: 'contain'
  },

  headerText: {
    fontSize: 15,
    color: '#737380',
  },

  headerTextBold: {
    fontWeight: 'bold'
  },

  title: {
    fontSize: 30,
    marginBottom: 10,
    color: '#13131a',
    fontWeight: 'bold',
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#737380',
    marginBottom:10,
  },

  divider:{
    height: 1.5,
    marginBottom: 12,
  },

  class: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
  },

  className: {
    fontSize: 18,
    color: '#41414d',
    fontWeight: 'bold'
  },

  dateTimeView: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  classDateTime: {
    marginTop: 8,
    marginRight: 30,
    fontSize: 14,
    marginBottom: 10,
    color: '#737380'
  },

  classData: {
    marginTop: 8,
    fontSize: 14,
    marginBottom: 10,
    color: '#737380'
  },

  classStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  classStatusText: {
    fontSize: 12,
    color: 'green',
    fontWeight: 'bold'
  },

  detailsButton: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  detailsButtonText: {
    color: '#3498db',
    fontSize: 15,
    fontWeight: 'bold'
  },

  addClass: {
    backgroundColor: '#3498db',
    borderRadius: 8,
    height: 55,
    width: '80%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },

  addClassText: {
    marginLeft: 6,
    marginRight: 6,
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },

  logoff: {
    alignItems:'center',
    justifyContent:'center',
    flexDirection: 'row',
    marginTop: 10,
  },

  logoffText:{
    marginLeft: 6,
    marginRight: 6,
    color: '#737380',
    fontSize: 14,
  },

  actions: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});