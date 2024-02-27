import { View, Text, Button } from 'react-native'
import React from 'react'
import { router, useGlobalSearchParams } from 'expo-router'

const ActiveEvent = () => {
  const { id, title } = useGlobalSearchParams()

  console.log('test');
  console.log('ID:',id);
  console.log(title);
  

  return (
    <View>
      
      <Button title='back' onPress={() => router.back()} />

      <Text>ActiveEvent ID: {id}</Text>
      <Text>Title: {title}</Text>
    </View>
  )
}

export default ActiveEvent