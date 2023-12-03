import { Button } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import MarkdownDisplay from '@components/day3/MarkDownDisplay';
import { SafeAreaView } from 'react-native-safe-area-context';

const description = `
# OnBoarding

Integrate OnBoarding content in **React Native**

📚 Today's Agenda:
- Introduction to Onboarding Flows
- Design Principles for Onboarding Screens
- Exploring Reanimated Library
- Building Your First Animated Onboarding Screen
- Enhancing User Experience with Layout Animations
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'Day 3: Markdown' }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href="/day2/onboarding" asChild>
        <Button title="Go to onboarding" />
      </Link>
    </SafeAreaView>
  );
};


export default DayDetailsScreen;
