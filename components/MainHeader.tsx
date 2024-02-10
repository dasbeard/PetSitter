import { View, StyleSheet, Platform, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import { useColorScheme } from '@/components/useColorScheme';
import { Text } from '@/components/Themed'

const MainHeader = ({ options }: any) => {
  const colorScheme = useColorScheme();


  return (

    <View style={styles.container}>
        
      <Link href={'/(public)/modal'} style={styles.navContainer} asChild>
        <Pressable>
          {({ pressed }) => (
          <FontAwesome 
            name='calendar' 
            color={Colors[colorScheme ?? 'light'].text}
            size={22}
            style={{ opacity: pressed ? 0.5 : 1}}
          />
          )}
        </Pressable>
      </Link>
      
      <Link href={'/(public)/Register'} style={styles.navContainer} asChild>
        <Pressable>
          {({ pressed }) => (
            <FontAwesome
              name='user-circle'
              size={24}
              color={Colors[colorScheme ?? 'light'].text}
              style={{ opacity: pressed ? 0.5 : 1}}
            />
          )}
        </Pressable>
        
        
        
        {/* <FontAwesome 
          name='user-circle' 
          color={Colors[colorScheme ?? 'light'].text}
          size={24}
        /> */}
      </Link>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginRight: Platform.OS === 'web'? 25: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: '#cf2',
  },
  navContainer: {
    marginHorizontal: 15,
    justifyContent: 'center',
  },
})

export default MainHeader


{/* <Link href='/modal' asChild >
<Pressable>
  {({ pressed }) => (
    <FontAwesome
      name='info-circle'
      size={25}
      color={Colors[colorScheme ?? 'light'].text}
      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1}}
    />
  )}
</Pressable>
</Link> */}