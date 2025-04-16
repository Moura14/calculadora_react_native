import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ label }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 5,
    margin: 5,
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Button;
