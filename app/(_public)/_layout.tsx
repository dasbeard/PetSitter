import React from 'react';
import { Link, Stack, Tabs } from 'expo-router';
import { useColorScheme } from '@/components/useColorScheme';

export default function PublicLayout() {
  console.log('(public)_layout');
  

  const colorScheme = useColorScheme();
  return (
    <Stack 
      initialRouteName='index'
      screenOptions={{
        headerTitle: 'Pet Sitter',
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen name='index'/>
      <Stack.Screen 
        name='Register' 
        options={{
          headerBackTitle: 'Login',
          headerBackTitleVisible: true,
        }}
      />
      <Stack.Screen name='modal' options={{presentation: 'modal'}} />
    </Stack>
    
  );
}

