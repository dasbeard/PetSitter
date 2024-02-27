import { View, Text } from "@/components/Themed"
import { Image, Pressable, StyleSheet } from "react-native"
import { FlashList } from "@shopify/flash-list"

import { FontAwesome } from "@expo/vector-icons"
import Colors from "@/constants/Colors"
import { useColorScheme } from '@/components/useColorScheme';

const testData=[
  {
    id: 12345,
    clientName: 'Bryan Jones',
    date: new Date('2024-01-25'),
    time: '8:00am - 12:00pm',
  },
  {
    id: 234567,
    clientName: 'John Doe',
    date: new Date('2024-01-27'),
    time: '12:00pm - 4:00pm',
  },
  {
    id: 345678,
    clientName: 'Bryan Jones',
    date: new Date('2024-02-02'),
    time: '4:00pm - 8:00pm',
  },
]

const renderedItem = ( { item }: any ) => {

  return (
    <View >
      <Pressable style={styles.itemContainer}>
        <FontAwesome 
          name="user-circle" 
          size={44} 
          // color={Colors[colorScheme ?? 'light'].text}
        />
        
        <Text>{item.clientName}</Text>
        <Text>{item.date.toLocaleDateString()}</Text>
        <Text>{item.time}</Text>
      </Pressable>
    
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.3)" />
    </View>
  )
}



export default function Testing () {
  
  return (
    <View style={styles.container}>
      <Text style={{ marginVertical: 16, justifyContent: 'center', alignSelf:'center', fontSize: 22 }}>This is a testing component at the moment</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.3)" />

      <FlashList
        data={testData}
        renderItem={renderedItem}
        estimatedItemSize={50}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 8,
    marginHorizontal: 6,
    alignItems: 'center',
    justifyContent:'space-between',

  },
  separator: {
    marginVertical: 5,
    height: 1,
    width: '85%',
    alignSelf: 'center'
  },
})

