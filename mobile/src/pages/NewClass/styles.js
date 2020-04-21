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

  class: {
		padding:24,
		borderRadius:8,
		backgroundColor: '#FFF',
    marginBottom: 16,
    marginTop: 10,
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
  
  createButton: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    flexDirection: 'row',
  },

  createText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 6,
    marginRight: 6,
    marginTop: 3,
  }

});
