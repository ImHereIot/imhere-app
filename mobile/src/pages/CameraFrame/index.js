import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, View, Text, Modal, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera'
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import styles from './styles'

export default function CameraFrame() {
  const navigation = useNavigation();

  // armazena a referência da câmera do dispositivo
  const camRef = useRef(null);

  //armazena o tipo da câmera (frontal ou trazeira)
  const [type, setType] = useState(Camera.Constants.Type.front);

  // armazena se tem permissão de utilizar a câmera do dispositivo ou não
  const [hasPermission, setHasPermission] = useState(null);

  // armazena o conteúdo da imagem capturada
  const [catchedPhoto, setCatchedPhoto] = useState(null);

  // armazena se a modal está ou não aberta
  const [open, setOpen] = useState(false);

  // método para validar permissão da câmera
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View></View>
  }

  if (hasPermission === false) {
    return <Text>Acesso negado!</Text>
  }

  function navigateToBack() {
    navigation.goBack();
  }

  // Retorna para a tela "NewClass" enviando a foto capturada por parâmetro 
  function backToNewClass(catchedPhoto) {
    navigation.navigate('NewClass', {catchedPhoto: catchedPhoto});
  }

  async function takePicture() {
    // referência da camera = camRef
    if (camRef) {
      // grava dados do momento capturado na câmera
      const data = await camRef.current.takePictureAsync();

      // guarda uri da camêra (imagem caputurada)
      setCatchedPhoto(data.uri);

      //abre modal e seta variável open como true
      setOpen(true);
    }
  }

  // Tela
  return (
    <SafeAreaView style={styles.container}>
      <Camera
        style={{ flex: 1 }}
        type={type}
        ref={camRef}
      >
      </Camera>

      <View style={styles.cameraOptions}>
        <TouchableOpacity onPress={navigateToBack}>
          <Feather style={styles.icons} name='arrow-left' size={28} color="#4682B4" />
        </TouchableOpacity>

        <TouchableOpacity onPress={takePicture}>
          <Feather style={styles.icons} name='camera' size={42} color="#4682B4" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            // alterna tipo da câmera (frontal e trazeira)
            setType(
              type === Camera.Constants.Type.front
                ? Camera.Constants.Type.back
                : Camera.Constants.Type.front
            );
          }}>
          <Feather style={styles.icons} name="repeat" size={28} color="#4682B4" />
        </TouchableOpacity>

      </View>


      {/* Modal para usuário confirmar a foto ou não */}
      {catchedPhoto &&
        <Modal
          animationType="slide"
          // transparent="false"
          visible={open}
        >
          <View style={styles.modalView}>

            <Image
              style={styles.catchedImage}
              // mostra a imagem a partir da URI presente na variável catchedPhoto (armazenado em JSON)
              source={{ uri: catchedPhoto }}
            />
            <View style={styles.cameraOptionsModal}>
              <TouchableOpacity onPress={() => setOpen(false)}>
                <Feather style={styles.icons} name="trash" size={40} color="red" />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => backToNewClass( catchedPhoto )}>
                <Feather style={styles.icons} name="check" size={40} color="green" />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      }
    </SafeAreaView>
  )
}