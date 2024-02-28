import { View, Text } from "@/components/Themed"
import { FontAwesome6 as FontAwesome } from "@expo/vector-icons"
import { Pressable, StyleSheet } from "react-native"

import { useColorScheme } from '@/components/useColorScheme';

export default function AnimalSelection ( { animal, serviceSelected, onPressed } :{animal: string, serviceSelected:boolean, onPressed?: any } ) {

  const colorScheme = useColorScheme(); 

  return (
    <View style={styles.container}>
      <Pressable onPress={onPressed}>
      {({ pressed }) => (
        <View style={[styles.detailContainer, { opacity: pressed ? 0.5 : 1}]}>
          <FontAwesome name={serviceSelected ? 'check-square' : 'square'} size={20} color={colorScheme === 'light' ? '#000' : '#fff'} />
          <View style={styles.innerContent}>
            <FontAwesome name={animal.toLocaleLowerCase()} size={22} style={{color: colorScheme === 'light'? '#000' : '#fff'}} />
            <Text>{animal}</Text>
          </View>
        </View>
      )}
      </Pressable> 
    </View>        
  )
}



const styles = StyleSheet.create({
  container:{
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    overflow: 'hidden',
    justifyContent: 'center',
    maxWidth: 100,
    maxHeight: 70,
    minWidth: 90,
    minHeight: 55,
  },
  detailContainer:{
    flexDirection: 'row',    
    alignItems: 'center',
    padding: 10,
  },
  
  innerContent: {
    flex:1,
    marginHorizontal:10,
    marginVertical: 10,
    height: 45,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
})


