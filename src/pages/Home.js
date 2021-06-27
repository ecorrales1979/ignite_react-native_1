import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text } from 'react-native';

import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Title } from '../components/Title';
import { SkillCard } from '../components/SkillCard';

export const Home = () => {
  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState([]);
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
      setSkills(oldState => [...oldState, newSkill]);
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
          keyExtractor={item => item}
          renderItem={({ item }) => <SkillCard skill={item} />}
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
