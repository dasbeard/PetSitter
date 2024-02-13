import { Text, Platform, StyleSheet } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View } from '@/components/Themed'

const Modal = () => {
  return (
    <View style={styles.container}>
      <Text>Add Event Modal</Text>

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#888'
  }
})

export default Modal