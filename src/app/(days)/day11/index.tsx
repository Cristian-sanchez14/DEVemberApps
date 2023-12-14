import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import MarkdownDisplay from '@components/day3/MarkDownDisplay';
import { SafeAreaView } from 'react-native-safe-area-context';

const description = `
# Camera app 
- Take photos and record videos with React Native Vision Camera
- Introduction to React Native Vision Camera
- Setting Up the Camera in a React Native App
- Implementing Photo Capture Functionality
- Adding Video Recording Features
- Integrating QR Code Scanning
- Customizing Camera UI and Controls
- Review and Debug
- https://react-native-vision-camera.com/docs/guides/

Note camera was able to run due to expo run:ios 

`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'Day 11: Camera' }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href="/day11/camera" asChild>
        <Button title="Go to Camera" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;