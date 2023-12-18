import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import MarkdownDisplay from '@components/day3/MarkDownDisplay';
import { SafeAreaView } from 'react-native-safe-area-context';

const description = `
# Todo app with React Context
Ultimate Todo app with React Context
- introduction to React Context and Global State Management
- Setting Up React Context in a React Native Project
- Building the To-Do App Logic with React Context
- Implementing State Persistence on Device Storage
- Managing Context in Functional Components
- Best Practices for State Management with Context
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'Day 16: Todo' }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href="/day16/todo" asChild>
        <Button title="Go to TODO" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;