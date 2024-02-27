import { View, Text, Button } from 'react-native'
import React from 'react'
import { router, useGlobalSearchParams } from 'expo-router'

const Event = () => {
  const { id, title } = useGlobalSearchParams()

  console.log(id);
  console.log(title);
  

  return (
    <View>
      <Button title='back' onPress={() => router.back()} />
      <Text>Event ID: {id}</Text>
      <Text>Title: {title}</Text>
    </View>
  )
}

export default Event