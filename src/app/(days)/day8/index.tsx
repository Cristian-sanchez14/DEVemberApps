import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import MarkdownDisplay from '@components/day3/MarkDownDisplay';
import { SafeAreaView } from 'react-native-safe-area-context';

const description = `
# Weather app
- Fetch weather data and display it
- Use React Native and Expo to setup an environment for our Weather App
- Choosing and Integrating a Weather API
- Designing the App Interface
- Fetching and Displaying Weather Data
- Handling API Responses and Errors
- Styling and User Experience Enhancements
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'Day 8: Weather app' }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href="/day8/weather" asChild>
        <Button title="Go to Weather" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;