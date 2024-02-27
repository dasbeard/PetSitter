import { View, Text } from '@/components/Themed'
import { useGlobalSearchParams } from 'expo-router'

export default function EventDetails() {
  const { id } = useGlobalSearchParams();
  console.log('Event ID:', id);
  

  
  return (
    <View>
      <Text>Event Details</Text>
      <Text>Event ID: {id}</Text>
    </View>
  )
}