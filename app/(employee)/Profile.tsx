import { View, Text } from '@/components/Themed'
import { Link } from 'expo-router'
import React from 'react'

export default function EmployeeProfile() {
  return (
    <View>
      <Text>EmployeeProfile</Text>
      <Link href={'/(employee)/Calendar'}>
        <Text>Calendar</Text>
      </Link>
      <Link href={'/(employee)/Profile'}>
        <Text>Profile</Text>
      </Link>
      <Link href={'/(employee)'}>
        <Text>Index</Text>
      </Link>
    </View>
  )
}