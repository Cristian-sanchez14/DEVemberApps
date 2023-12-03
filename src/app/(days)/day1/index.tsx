import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const DayDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Day 1' }} />

      <Text style={{ fontFamily: 'AmaticBold', fontSize: 100 }}>
        Day Details Screen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#a0c98c',
  },
});

export default DayDetailsScreen;
