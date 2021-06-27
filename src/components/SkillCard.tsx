import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

interface SkillCardProps {
  skill: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{skill}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1f1e25',
    padding: Platform.OS === 'ios' ? 15 : 10,
    borderRadius: 50,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    color: '#ddd',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
