import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const Title = ({ title, subtitle }) => (
  <View style={styles.container}>
    <Text style={[styles.title, styles.text]}>{title}</Text>
    {!!subtitle && (
      <Text style={[styles.subtitle, styles.text]}>{subtitle}</Text>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  text: {
    color: '#eee',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
  },
});
