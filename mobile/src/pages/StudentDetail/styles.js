import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 90,
  }, 

  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
  },

  titleClass:{
    marginBottom:50,
    width: '50%',
    height: 100,
    justifyContent:'center'
  },

  divider:{
    height: 1.5,
    marginBottom: 12,
  },

  classStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  class: {
		padding:24,
		borderRadius:8,
		backgroundColor: '#FFF',
    marginBottom: 16,
    marginTop: 45,
	},

	classProperty: {
		fontSize: 14,
		color: '#41414d',
    fontWeight: 'bold',
    marginTop: 24,
	},

	classValue: {
		marginTop: 8,
		fontSize:15,
		color: '#737380'
  },

  dateTimeView: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  dateTimeValue: {
    marginRight: 30,
		marginTop: 8,
		fontSize:15,
		color: '#737380'
  },
  
  contactBox: {
		padding:24,
		borderRadius:8,
		backgroundColor: '#FFF',
    marginBottom: 16,
  },

  contactText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#13131a',
    lineHeight: 30,
  },

  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent:'center'
  },

  action: {
    backgroundColor: '#3498db',
    borderRadius: 8,
    height: 50,
    width: '48%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  actionText: {
    marginLeft: 6,
    marginRight: 6,
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

});
