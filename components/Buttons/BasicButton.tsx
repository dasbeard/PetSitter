import { Text, View } from '@/components/Themed'
import Colors from '@/constants/Colors'
import React from 'react'
import { Pressable, StyleSheet } from 'react-native'

const BasicButton = ({ 
  disabled=false, 
  txtColor='#fff', 
  bgColor, 
  text='Click Me',
  passedFunction,
  } : {
    disabled?: boolean, 
    txtColor?: string, 
    bgColor?: string, 
    text?: string,
    passedFunction?: any,
  }) => {


  const defaultFunction = () => {
    console.log('Button Clicked');
    
  }

  return (
    <Pressable 
      style={[ styles.container, ]}
      disabled={disabled}
      onPress={passedFunction ? passedFunction : defaultFunction }
    >
        {({ pressed }) => ( 
          <Text
            style={[styles.text, 
              {
              //  backgroundColor: bgColor ? bgColor : '#1f76f1', 
               backgroundColor: bgColor ? bgColor : Colors.light.button, 
               color: txtColor ? txtColor : '#fff', 
               opacity: pressed ? 0.5 : 1}]
              }
          >
            {text}
          </Text>

        )}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container:{
    margin: 2,
  },
  text: {
    overflow: 'hidden',
    textAlign: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    minWidth: 80,
    fontWeight: 'bold',
  },
})

export default BasicButton