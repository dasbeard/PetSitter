import { View, Text } from "@/components/Themed"
import { FontAwesome5 as FontAwesome } from "@expo/vector-icons"
import { useState } from "react"
import { Pressable, StyleSheet } from "react-native"

export default function NewRequest() {
  const [ catService, setCatService ] = useState<boolean>(false);
  const [ dogService, setDogService ] = useState<boolean>(false);
  
  const handleCatSelected = () => {
    setCatService(!catService)
  }
  
  const handleDogSelected = () => {
    setDogService(!dogService)
  }
  
  return (
    <View style={styles.container}>
      <Text>Who is the request for?</Text>

      <View style={styles.animalContainer}>
        <View style={styles.selectedAnimalContainer}>
          <Pressable onPress={handleDogSelected}>
          {({ pressed }) => (
            <View style={styles.animalDetailContainer}>
              <FontAwesome name={dogService ? 'check-square' : 'square'} size={18} />
              <View style={styles.checkboxInner}>
                <FontAwesome name='dog' size={22}  />
                <Text>Dog</Text>
              </View>
            </View>
          )}
          </Pressable>
        </View>        
  
        <View style={styles.selectedAnimalContainer}>
          <Pressable onPress={handleCatSelected}>
          {({ pressed }) => (
            <View style={styles.animalDetailContainer}>
              <FontAwesome name={catService ? 'check-square' : 'square'} size={18} />
              <View style={styles.checkboxInner}>
                <FontAwesome name='cat' size={22}  />
                <Text>Cat</Text>
              </View>
            </View>
          )}
          </Pressable>
        </View>          
      </View>

    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  animalContainer:{
    // borderWidth:1,
    // borderColor: '#000',
    // backgroundColor: '#ccc',
    flexDirection: 'row',
  },
  selectedAnimalContainer:{
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
    margin: 5,
    backgroundColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 85,
    height: 65,
  },
  animalDetailContainer:{
    flexDirection: 'row',    
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ccc',
  },
  
  checkboxInner: {
    backgroundColor: '#ccc',
    marginLeft: 15
  },
})
