import { View, Text } from "@/components/Themed"
import { Pressable, StyleSheet, Image } from "react-native"

import { useColorScheme } from '@/components/useColorScheme';

interface Img {
  light: string;
  dark: string;
}

export default function SelectionButton ( { service, onPressed } :{service: string, onPressed?: any } ) {
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
    <View style={styles().container}>
      <Pressable onPress={onPressed}>
      {({ pressed }) => (

        <View style={styles(pressed, colorScheme!).detailContainer}>
          <View style={styles().content}>            
            <Image 
              source={ colorScheme === 'light' ? Icon?.light : Icon?.dark } 
              style={styles().image}
            />
            <View style={styles().textContainer}>
              <Text style={styles().mainText}>{service}</Text>
              <Text style={styles().secondaryText}>Here are some details about the service</Text>

            </View>
          </View>
        </View>
      )}
      </Pressable> 
    </View>        
  )
}



const styles = ( pressed?: any, colorScheme?: string ) =>  StyleSheet.create({
  container:{
    width: '95%',
    alignSelf: 'center',
  },
  detailContainer:{
    flexDirection: 'row',    
    borderWidth: 1,
    borderColor: colorScheme === 'light' ? '#111' : '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    margin: 6,
    elevation: pressed ? 1 : 3,
    opacity: pressed ? 0.5 : 1,
    shadowOffset: {height: pressed ? 2 : 5, width: pressed ? 2 : 5},
    shadowOpacity: 0.4,
    shadowRadius: 8,
    shadowColor: colorScheme === 'light' ? '#111' : '#fff',
    padding: 15,
  },
  content: {
    flex:1,
    flexDirection: 'row',    
    alignItems: 'center',
    opacity: pressed ? 0.5 : 1,
    backgroundColor: 'rgba(0,0,0, 0)',
  },
  image:{
    height: 50,
    width: 50,
    resizeMode: 'contain',
    opacity: pressed ? 0.5 : 1,
    marginBottom: 4,
    marginRight: 35,
  },

  textContainer:{
    flex: 1,
  },
  mainText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  secondaryText: {
    fontSize: 12,
    fontWeight: '300'
  },
})

