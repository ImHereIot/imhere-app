import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20,
  },

  horizontalPadding: {
    paddingHorizontal: 24,
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

  classStatusText: {
    fontSize: 12,
    color: 'green',
    fontWeight: 'bold'
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
    marginTop: 22,
  },
  
  classPropertyDropdown: {
		fontSize: 14,
		color: '#41414d',
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: -24
	},

	classValue: {
		marginTop: 8,
		fontSize:15,
		color: '#737380'
  },
  
  attendanceBox: {
		padding:24,
		borderRadius:8,
		backgroundColor: '#FFF',
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  attendanceText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#4682B4',
  },

  deleteButton: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ca3433',
    flexDirection: 'row',
  },

  deleteText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 6,
    marginRight: 6,
    marginTop: 3,
  }

});
