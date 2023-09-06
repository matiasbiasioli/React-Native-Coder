import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import React from 'react'

const CustomModal = ({isModalVisible, setIsModalVisible, confirmacion}) => {
  return (
    <View>
      <Modal visible={isModalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContainerBox}>
            <Text style={styles.modalText}>¿Estas seguro que deseas borrar este item?</Text>
            <View style={styles.modalContent}>
              <Pressable onPress={() => confirmacion()}>
                <Text style={styles.modalText}>Si</Text>
              </Pressable>
              <Pressable onPress={() => setIsModalVisible(false)}>
                <Text style={styles.modalText}>No</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default CustomModal

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin:10,
    gap: 10,
  },
  modalContainerBox: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 5,
  },
  modalText: {
    color: 'white',
  }
})