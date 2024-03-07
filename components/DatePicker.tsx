import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import useCreateEventStore from '@/hooks/CreateEvent'

export default function DatePicker() {
  const { DatePickerVisible, setDatePickerVisible } = useCreateEventStore();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text>DatePicker</Text>

        <Pressable onPress={setDatePickerVisible}>
          <Text>Close</Text>
        </Pressable>
      </View> 
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    // flex: 1,
    zIndex:999,
    backgroundColor: 'rgba(0,0,0,0.5)',

    position: 'absolute',
    top: -150,
    height: '200%',
    width: '100%',
  },
  container: {
    backgroundColor: 'red',
    
    // top: '20%',
    // left: '15%',
    // width: '70%',
    // height: 300,
    borderRadius: 8,
    padding: 8

  }
})