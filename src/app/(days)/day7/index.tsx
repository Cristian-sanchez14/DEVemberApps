import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import MarkdownDisplay from '@/components/day3/MarkDownDisplay';
import { SafeAreaView } from 'react-native-safe-area-context';

const description = `
# Voice Memos
- Work with the Microphone and Audoio playback
- Introduction to Audio Recording in React Native and Expo
- Implementing Audio Playback Features
- Integrate Expo Audio with our app
- Saving Audio Files on the Device
- Displaying Audio Waveforms
- Designing the User Interface
- Testing Audio Functionality
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'Day 7: Voice Memos' }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href="/day7/memos" asChild>
        <Button title="Go to Memos" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;
