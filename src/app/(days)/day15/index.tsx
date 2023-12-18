import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import MarkdownDisplay from '@components/day3/MarkDownDisplay';
import { SafeAreaView } from 'react-native-safe-area-context';

const description = `
# Todo app
Ultimate Todo app
- Setting Up the Project
- Designing the To-Do App Interface
- Implementing Task Addition Functionality
- Managing Task Statuses
- Adding Notes and Task Details
- Creating Category/Project Segmentation
- Exploring Subtasks and Accordions
- Implementing Due Dates
- Finalizing and Testing the App
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'Day 15: Todo' }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href="/day15/todo" asChild>
        <Button title="Go to TODO" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;