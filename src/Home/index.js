import React from "react";
import { useState } from "react";
import { View, Text, Pressable, FlatList, Modal } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";
import AddItem from "../Components/AddItem";
import ListItem from "../Components/ListItem";
import CustomModal from "../Components/CustomModal";

const Home = () => {
  const initialState = [
    { id: 1, text: "chocolate" },
    { id: 2, text: "manteca" },
  ];
  const [text, setText] = useState("");
  const [list, setList] = useState(initialState);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const addItem = () => {
    list.push({
      id: Math.random(),
      text: text,
    });
    setList(list), setText("");
  };
  const confirmacion = () => {
    setList([]);
    setIsModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <CustomModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        confirmacion={confirmacion}
      />
      <Text style={styles.title}> Lista de Compras</Text>

      {/* Componente Input con Boton */}
      <AddItem text={text} setText={setText} addItem={addItem} />

      {/* <View>
        {list.map((e)=>(
          <Text style={styles.list} key={e.id}>{e.text}</Text>
        ))}
      </View> */}
      <View>
        <FlatList
          data={list}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ListItem item={item} />}
        />
      </View>
      <Pressable onPress={() => setIsModalVisible(true)}>
        <FontAwesome name="trash" size={30} color="orange" />
      </Pressable>
    </View>
  );
};

export default Home;
