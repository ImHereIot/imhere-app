import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },

  cameraOptions: {
    backgroundColor: '#000',
    flexDirection: 'row',
    height: 70,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  cameraOptionsModal: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    height: 70,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  icons: {
    marginHorizontal: 30,
  },

  modalView: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    margin: 20
  },

  catchedImage: {
    width: '100%', 
    height: '75%', 
    borderRadius: 20
  }

});