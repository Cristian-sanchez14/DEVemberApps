import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import MarkdownDisplay from '@components/day3/MarkDownDisplay';
import { SafeAreaView } from 'react-native-safe-area-context';

const description = `
# Authentication
AWS Amplify v6 Authentication
was not added to do expo "npx expo run:ios" having issues with my local computer  
error = "CommandError: Failed to build iOS project. "xcodebuild" exited with error code 65."   
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'Day 9: Auth' }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href="/day9/protected" asChild>
        <Button title="Go to Protected Page" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;