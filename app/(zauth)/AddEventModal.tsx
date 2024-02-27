import { Text, Platform, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { View } from '@/components/Themed'

import DateTimePickerModal from "react-native-modal-datetime-picker";

const Modal = () => {
  const [ isDatePickerVisible, setDatePickerVisibility] = useState(false)
  
  const showDatePicker= () => {
    setDatePickerVisibility(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }


  const handleConfirm = (date: any) => {
    console.log('Date picked:', date)
    hideDatePicker()
  }

  return (
    <View style={styles.container}>
      <Button title='Show Picker' onPress={showDatePicker} />

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode='date'
        // display='calendar'
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#888'
  }
})

export default Modal