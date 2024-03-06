import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import useCreateEventStore from '@/hooks/CreateEvent'

export default function DatePicker() {
  const { DatePickerVisible, setDatePickerVisible } = useCreateEventStore();

  return (
    <View style={styles.container}>
      <Text>DatePicker</Text>

      <Pressable onPress={setDatePickerVisible}>
        <Text>Close</Text>
      </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    
    flex: 1,
    zIndex:999,
    position: 'absolute',
    top: '20%',
    left: '15%',
    width: '70%',
    height: 300,
    borderRadius: 8,
    padding: 8

  }
})