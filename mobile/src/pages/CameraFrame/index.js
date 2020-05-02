import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, View, Text, Modal, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera'
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import styles from './styles'

export default function CameraFrame() {
  const navigation = useNavigation();
  const camRef = useRef(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const [hasPermission, setHasPermission] = useState(null);
  const [catchedPhoto, setCatchedPhoto] = useState(null);
  const [open, setOpen] = useState(false);

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

  function backToNewClass(catchedPhoto) {
    navigation.navigate('NewClass', {catchedPhoto: catchedPhoto});
  }

  async function takePicture() {
    if (camRef) {
      const data = await camRef.current.takePictureAsync();
      setCatchedPhoto(data.uri);
      setOpen(true);
      // console.log({ uri: catchedPhoto });
    }
  }

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
            setType(
              type === Camera.Constants.Type.front
                ? Camera.Constants.Type.back
                : Camera.Constants.Type.front
            );
          }}>
          <Feather style={styles.icons} name="repeat" size={28} color="#4682B4" />
        </TouchableOpacity>

      </View>

      {catchedPhoto &&
        <Modal
          animationType="slide"
          transparent="false"
          visible={open}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20 }}>

            <Image
              style={{ width: '100%', height: '75%', borderRadius: 20 }}
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