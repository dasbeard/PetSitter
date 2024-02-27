import { View, Text } from '@/components/Themed'
import { Link } from 'expo-router'
import React from 'react'

export default function EmployeeCalendar() {
  return (
    <View>
      <Text>EmployeeCalendar</Text>
      <Link href={'/(employee)/Calendar'}>
        <Text>Calendar</Text>
      </Link>
      <Link href={'/(employee)/Profile'}>
        <Text>Profile</Text>
      </Link>
      <Link href={'/(employee)'}>
        <Text>index</Text>
      </Link>
    </View>
  )
}