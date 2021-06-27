import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';

export const Button = ({ children, onPress, disabled, ...rest }) => (
  <TouchableOpacity
    style={styles.container}
    activeOpacity={0.7}
    onPress={onPress}
    disabled={disabled}
    {...rest}
  >
    <Text style={styles.text}>{children}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#a370f7',
    padding: Platform.OS === 'ios' ? 15 : 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
    width: '100%',
  },
  text: {
    color: '#ddd',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
