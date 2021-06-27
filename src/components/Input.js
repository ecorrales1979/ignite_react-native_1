import React from 'react';
import { TextInput, StyleSheet, Platform } from 'react-native';

export const Input = ({ value, placeholder, ...rest }) => (
  <TextInput
    style={styles.input}
    placeholder={placeholder}
    placeholderTextColor="#555"
    value={value}
    {...rest}
  />
);

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#1f1e25',
    color: '#eee',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    width: '100%',
    borderRadius: 5,
  },
});
