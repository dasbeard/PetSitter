import { View, Text } from "@/components/Themed"
import { Pressable, StyleSheet, Image } from "react-native"

import { useColorScheme } from '@/components/useColorScheme';

interface Img {
  light: string;
  dark: string;
}

export default function SelectionButton ( { service, onPress } :{service: string, onPress?: any } ) {
  const colorScheme = useColorScheme(); 

  const allImagesArray = [
    {
      id: 'cat',
      light: require('@/assets/icons/Cat_Icon.png'),
      dark: require('@/assets/icons/Cat_Icon_Alt.png'),
    },
    {
      id:'dog',
      light: require('@/assets/icons/Dog_Icon.png'),
      dark: require('@/assets/icons/Dog_Icon_Alt.png'),
    },
    {
      id:'boarding',
      light: require('@/assets/icons/Boarding_Icon.png'),
      dark: require('@/assets/icons/Boarding_Icon_Alt.png'),
    },
    {
      id:'clock',
      light: require('@/assets/icons/Clock_Icon.png'),
      dark: require('@/assets/icons/Clock_Icon_Alt.png'),
    },
    {
      id:'dogwalk',
      light: require('@/assets/icons/Dog_Walk_Icon.png'),
      dark: require('@/assets/icons/Dog_Walk_Icon_Alt.png'),
    },
    {
      id:'medication',
      light: require('@/assets/icons/Medication_Icon.png'),
      dark: require('@/assets/icons/Medication_Icon_Alt.png'),
    },
    {
      id:'paws',
      light: require('@/assets/icons/Paws_Icon.png'),
      dark: require('@/assets/icons/Paws_Icon_Alt.png'),
    },
    {
      id:'petlocation',
      light: require('@/assets/icons/Pet_Location_Icon.png'),
      dark: require('@/assets/icons/Pet_Location_Icon_Alt.png'),
    },
    {
      id:'homevisit',
      light: require('@/assets/icons/Pet_Food_Icon.png'),
      dark: require('@/assets/icons/Pet_Food_Icon_Alt.png'),
    },
  ];

  let Icon = allImagesArray.find(ob => ob.id === service.replace(' ','').toLowerCase() )

  return (
    <Pressable onPress={onPress} >
      {({ pressed }) => (
        <View style={styles(pressed, colorScheme!).container}>
          <Image 
            source={ colorScheme === 'light' ? Icon?.light : Icon?.dark } 
            style={styles().image}
          />
          
          <View style={styles().textContainer}>
            <Text style={styles().mainText}>{service}</Text>
            <Text style={styles().secondaryText}>Here are some details about the service</Text>
          </View>

        </View>
      )}
    </Pressable> 
  )
}



const styles = ( pressed?: boolean, colorScheme?: string ) =>  StyleSheet.create({
  container:{
    flexDirection: 'row',    
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colorScheme === 'light' ? 'rgba(0, 5, 17, 0.25)' : 'rgba(21, 16, 19, 0.92)',
    marginVertical: 2,
    padding: 12,
    alignItems: 'center',

    opacity: pressed ? 0.5 : 1,
    elevation: pressed ? 1 : 3,
    shadowColor: colorScheme === 'light' ? '#111' : '#222328',
    shadowOffset: {height: pressed ? 1.5 : 2.5, width: pressed ? 0.5 : 2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  image:{
    flex: 1,
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  textContainer:{
    flex: 3,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  mainText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  secondaryText: {
    fontSize: 12,
    fontWeight: '300'
  },
})

