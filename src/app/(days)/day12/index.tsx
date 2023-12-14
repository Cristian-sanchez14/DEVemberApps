import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import MarkdownDisplay from '@components/day3/MarkDownDisplay';
import { SafeAreaView } from 'react-native-safe-area-context';

const description = `
# TikTok Feed
- Video feed similar to TikTok, IG Reels, Youtube Shorts
- Introduction to Video Handling in React Native
- Setting up a Video Feed Layout
- Implementing Video Playback Controls
- Creating an Interactive UI for Video Feeds
- Testing the Video
- Debugging Common Issues with Video Playback
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'Day 12: Video Feed' }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href="/day12/feed" asChild>
        <Button title="Go to Feed" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;