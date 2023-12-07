import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import MarkdownDisplay from '@components/day3/MarkDownDisplay';
import { SafeAreaView } from 'react-native-safe-area-context';

const description = `
# Tinder Swipe Animation
- building Tinder Swipe Animation in React Native using Reanimated
- Designing the Tinder UI in React Native
- Building the Basic Swipe Animation
- Advanced Techniques with Reanimated
- Customizing the Swipe Animation
- Handling User Interaction and Gestures
- Integrating the Animation with App Logic

`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'Day 6: Tinder' }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href="/day6/tinder" asChild>
        <Button title="Go to Tinder" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;
