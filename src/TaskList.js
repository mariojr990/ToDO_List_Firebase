import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
export default function TaskList({data, deleteItem, editItem}) {
 return (
   <View style={styles.container}>
     <TouchableOpacity style={{marginRight: 10}}>
      <Icon name="trash" color="#FFF" size={20} onPress={() => deleteItem(data.key)}/>
     </TouchableOpacity>

    <View style={{paddingRight: 15}}>
      <TouchableWithoutFeedback onPress={()=> editItem(data)}>
        <Text style={{color:"#FFF", paddingRight: 10}}>{data.nome}</Text>
      </TouchableWithoutFeedback>
      
    </View>

   </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#121212',
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    borderRadius: 5
  }
})