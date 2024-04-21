/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Alert, Modal, Pressable, StyleSheet, Text, View } from 'react-native';

const ModalName = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>

          <View style={styles.modalView}>

            <Text style={styles.modalText}>Walter Fernando Gomez santamaria</Text>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>

              <Text style={styles.textStyle}>Cerrar</Text>

            </Pressable>

          </View>

        </View>
        <Text style={styles.textStyle}>Nombre</Text>

      </Modal>

      <Pressable
        style={styles.abrirModal}
        onPress={() => setModalVisible(!modalVisible)}>
        <Text style={styles.textoAbrirModal}>Nombre Estudiante</Text>
      </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({


  abrirModal: {
    padding: 30,
    backgroundColor: '#5897fb',
    width: 160,
    borderRadius: 5


  },

  textoAbrirModal: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    position: 'absolute',
    padding: 10



  },




  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',


  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ModalName;