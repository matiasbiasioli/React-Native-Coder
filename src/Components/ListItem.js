import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ListItem = ({item}) => {
  return (
    <View>
      <Text style={styles.list}>{item.text}</Text>
    </View>
  )
}

export default ListItem

const styles = StyleSheet.create({
  list: {
    marginTop: 10,
    fontSize: 20,  
  },
})