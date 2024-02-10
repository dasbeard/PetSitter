import { View } from 'react-native'
import React from 'react'

// Simple utility component to create space between other components

export default function Spacer ({ size=1 } : {size?:number}) {
  const space = size * 4;
  
  return (
    <View style={{ marginTop: space}} />
  )
}
