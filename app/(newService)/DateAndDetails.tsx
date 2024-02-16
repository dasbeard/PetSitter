import { View, Text } from '@/components/Themed'
import useCreateEventStore from '@/hooks/CreateEvent'
import React from 'react'

const DateAndDetails = () => {
  const { eventType } = useCreateEventStore();

  return (
    <View>
      <Text>DateAndDetails</Text>
      <Text>{eventType}</Text>
    </View>
  )
}

export default DateAndDetails