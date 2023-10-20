import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Import icons

const Dropdown = ({ onOptionSelect }) => {
  return (
    <View style={styles.dropdown}>
      <TouchableOpacity
        style={styles.option}
        onPress={() => onOptionSelect('delete')}
      >
        <AntDesign name="delete" size={18} color="red" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.option}
        onPress={() => onOptionSelect('update')}
      >
        <AntDesign name="edit" size={18} color="blue" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    position: 'absolute',
    top: 40, // Adjust the distance from the icon
    right: 10, // Adjust the distance from the icon
    zIndex: 1, // Make sure it's above other elements
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  optionText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight:"bold"
  },
});

export default Dropdown;
