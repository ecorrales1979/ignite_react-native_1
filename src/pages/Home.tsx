import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text } from 'react-native';

import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Title } from '../components/Title';
import { SkillCard } from '../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
}

export const Home: React.FC = () => {
  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting('Good morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good evening');
    }
  }, []);

  const handleAddSkill = useCallback(() => {
    if (newSkill) {
      const data: SkillData = {
        id: String(new Date().getTime()),
        name: newSkill,
      };

      setSkills(oldState => [...oldState, data]);
      setNewSkill('');
    }
  }, [newSkill]);

  return (
    <SafeAreaView style={styles.container}>
      <Title title="Welcome" subtitle={greeting} />

      <Input
        value={newSkill}
        placeholder="New skill"
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddSkill} disabled={!newSkill}>
        Add
      </Button>

      <Title title="My skills" />
      {skills.length === 0 ? (
        <Text style={styles.text}>
          You don't have any skill yet. Enter a new skill and press the "Add"
          button
        </Text>
      ) : (
        <FlatList
          data={skills}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <SkillCard skill={item.name} />}
          showsVerticalScrollIndicator={false}
          style={styles.stretched}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#121015',
    paddingHorizontal: 20,
  },
  text: {
    color: '#ddd',
  },
  stretched: {
    alignSelf: 'stretch',
  },
});
