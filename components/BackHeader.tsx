import { View, StyleSheet, Platform, Pressable, Image } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import { FontAwesome6 } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import { Text } from '@/components/Themed'

import { useColorScheme } from '@/components/useColorScheme';

export default function BackHeader({ headerText}:{headerText?: string}) {
  const colorScheme = useColorScheme(); 


  return (
      <View style={styles.container}>
        <Pressable style={{flex:1}} onPress={() => router.back()}>
          {({ pressed }) => (
            <View style={[styles.left, { opacity: pressed ? 0.5 : 1}]}>
              <FontAwesome6 name="arrow-left-long" size={20} color={colorScheme=== 'light' ? Colors.light.text : Colors.dark.text}  />
              <Text style={styles.backText}>Back</Text>
            </View>
            )}
        </Pressable>
        
        <View style={styles.center}>
            <Text style={styles.headerText}>{headerText}</Text>
        </View>

        <View style={styles.right}>
        </View>

      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    flex: 1,
    flexDirection: 'row',
    maxHeight: 40,
    
  },
  left:{
    flex: 1,  
    flexDirection: 'row',
    paddingLeft: Platform.OS === 'web'? 20 : 9,
    alignItems: 'center',
  },
  backText:{
    marginHorizontal: Platform.OS === 'web' ? 12 : 8,
    fontSize: 14,
    fontWeight: '300',
  },
  center:{
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText:{
    fontSize: 18,
    fontWeight: '600',
  },
  right:{
    // borderWidth: 1,
    // borderColor: 'blue',
    flex: 1,
    flexDirection: 'row',
  },  


  // Contianer: {
  //   // borderWidth:1,
  //   // borderColor: 'red',
  //   height: Platform.OS === 'web' ? 65 : Platform.OS === 'android' ? 50 : 50,
  //   marginTop: Platform.OS === 'android' ? 45 : 0,
  //   marginBottom: 4,
  //   flexDirection: 'row',
  //   alignContent: 'space-between',
  //   marginHorizontal: 6,

  // },
  // left:{
  //   marginHorizontal: Platform.OS === 'web' ? 20 : 10,
  //   marginVertical: Platform.OS === 'web' ? 15 : 10,
  //   justifyContent: 'center',
  //   flex: 1,
  // },
  // image:{
  //   height: Platform.OS === 'web' ? 50 : 40,
  //   width: Platform.OS === 'web' ? 50 : 40,
  //   // borderWidth:1,
  //   // borderColor: 'green',
  // },
  // right:{
  //   // borderWidth:1,
  //   // borderColor: 'blue',
  //   flex: 1,
  //   justifyContent: 'flex-end',
  //   alignItems: 'center',
  //   flexDirection: 'row',
  // },
  // linkContainer: {
  //   marginHorizontal: Platform.OS === 'web' ? 10 : 8,
  // }

})

// export default MainHeader

          {/* <View style={styles.linkContainer}> */}
            {/* <Link href={'/(auth)/Profile'} style={styles.linkContainer} asChild>
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
            </Link> */}
          {/* </View> */}