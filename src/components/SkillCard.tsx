import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';

export interface SkillData {
  id: string;
  name: string;
}

interface SkillCardProps {
  skill: SkillData;
  remove(id: string): void;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill, remove }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{skill.name}</Text>
    <TouchableOpacity
      style={styles.closeButton}
      onPress={() => remove(skill.id)}
    >
      <Text style={styles.closeText}>X</Text>
    </TouchableOpacity>
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
    position: 'relative',
  },
  text: {
    color: '#ddd',
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    position: 'absolute',
    top: '50%',
    right: 10,
    width: 20,
    height: 20,
    backgroundColor: 'red',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeText: {
    color: '#ddd',
  },
});
