import { View, StyleSheet, Platform, Pressable, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import { Text } from '@/components/Themed'

import { useColorScheme } from '@/components/useColorScheme';

const MainHeader = () => {
  const colorScheme = useColorScheme(); 

  return (
    <SafeAreaView>
      <View style={styles.mainContianer}>
        <View style={styles.left}>

        <Link href={'/(auth)'} asChild>
          { colorScheme === 'dark' ? (
            <Pressable>
              {({ pressed }) => (
                <Image 
                source={require( '../assets/images/TempLogo_Invert.png')} 
                style={[styles.image, {opacity: pressed ? 0.5 : 1}]}
                />
              )}
            </Pressable>
          ):(
            <Pressable>
              {({ pressed }) => (
                <Image 
                source={require( '../assets/images/TempLogo.png')} 
                style={[styles.image, {opacity: pressed ? 0.5 : 1}]}
                />
              )}
            </Pressable>
          )}
          </Link>
        </View>
        
        <View style={styles.right}>
          <View style={styles.linkContainer}>
            <Link push href={'/(auth)/AddEventModal'} style={ null }  asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome 
                  name='calendar-plus-o' 
                  color={Colors[colorScheme ?? 'light'].text}
                  size={24}
                  style={{ opacity: pressed ? 0.5 : 1}}
                  />
                  )}
              </Pressable>
            </Link>
          </View>

          <View style={styles.linkContainer}>
            <Link href={'/(auth)/Profile'} style={styles.linkContainer} asChild>
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
            </Link>
          </View>
        </View>


      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContianer: {
    // borderWidth:1,
    borderColor: 'red',
    height: Platform.OS === 'web' ? 65 : Platform.OS === 'android' ? 50 : 50,
    marginTop: Platform.OS === 'android' ? 45 : 0,
    flexDirection: 'row',
    alignContent: 'space-between',
    marginHorizontal: 6,

  },
  left:{
    marginHorizontal: Platform.OS === 'web' ? 20 : 10,
    marginVertical: Platform.OS === 'web' ? 15 : 10,
    justifyContent: 'center',
    flex: 1,
  },
  image:{
    height: Platform.OS === 'web' ? 50 : 40,
    width: Platform.OS === 'web' ? 50 : 40,
    // borderWidth:1,
    borderColor: 'green',
  },
  right:{
    // borderWidth:1,
    borderColor: 'blue',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  linkContainer: {
    marginHorizontal: Platform.OS === 'web' ? 10 : 8,

  }


})

//   return (

//     <View style={styles.container}>
        
//       <Link href={'/(auth)'} style={styles.navContainer} asChild>
//         <Pressable>
//           {({ pressed }) => (
//           <FontAwesome 
//             name='calendar' 
//             color={Colors[colorScheme ?? 'light'].text}
//             size={22}
//             style={{ opacity: pressed ? 0.5 : 1}}
//           />
//           )}
//         </Pressable>
//       </Link>
      
//       <Link href={'/(auth)/Profile'} style={styles.navContainer} asChild>
//         <Pressable>
//           {({ pressed }) => (
//             <FontAwesome
//               name='user-circle'
//               size={24}
//               color={Colors[colorScheme ?? 'light'].text}
//               style={{ opacity: pressed ? 0.5 : 1}}
//             />
//           )}
//         </Pressable>
        
        
        
//         {/* <FontAwesome 
//           name='user-circle' 
//           color={Colors[colorScheme ?? 'light'].text}
//           size={24}
//         /> */}
//       </Link>

//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     marginRight: Platform.OS === 'web'? 25: 5,
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     // backgroundColor: '#cf2',
//   },
//   navContainer: {
//     marginHorizontal: 15,
//     justifyContent: 'center',
//   },
// })

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