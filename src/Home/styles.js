import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
   flex: 1,
   alignItems: 'center',
   marginTop: 20, 
  },
  title: {
    fontSize: 30,
    borderBottomColor: 'red',
    borderBottomWidth: 5,
  },
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
});

export default styles;
