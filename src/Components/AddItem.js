import { View, Pressable, TextInput, StyleSheet} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const AddItem = ({text, setText, addItem}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Escribe aquí..."
        value={text}
        onChangeText={(value) => setText(value)}
      ></TextInput>
      <Pressable onPress={() => addItem()}>
        <AntDesign name="pluscircle" size={24} color="orange" />
      </Pressable>
    </View>
  );
}
export default AddItem

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    gap: 6,
    marginTop: 10,
    alignItems: 'center'
  },
  input: {
    borderColor: 'orange',
    borderWidth: 3,
    borderRadius: 20,
    padding: 5,
  }
})
