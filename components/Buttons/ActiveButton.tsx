import { Text, View } from '@/components/Themed'
import { Pressable, StyleSheet } from 'react-native'

import { useColorScheme } from '../useColorScheme';
import Colors from "@/constants/Colors";
import { InteractiveStyles } from '@/constants/Styles';

export default function ActiveButton ({ 
  Disabled=false, 
  TextValue='Click Me',
  Function,
  Selected=false,
  ButtonWidth,
  TextColor,
  Background,
  BoldText=false,
} : {
  Disabled?: boolean, 
  TextValue?: string,
  Function?: any,
  Selected?: boolean,
  ButtonWidth?: number,
  TextColor?: string,
  Background?: string,
  BoldText?: boolean,
}) {
  
  const colorScheme = useColorScheme();

  const defaultFunction = () => {
    console.log('Button Clicked');
  }
  
  return (
    <Pressable 
      style={Disabled ? {opacity: 0.5}: {opacity: 1}}
      disabled={Disabled}
      onPress={Function ? Function : defaultFunction }
    >
        {({ pressed }) => ( 
          <View 
            style={[
              styles(Selected, colorScheme!).innerContainer,
              Selected ? styles(Selected, colorScheme!, pressed).Selected : InteractiveStyles(pressed, colorScheme!).Shadow, 
              Background ? ({backgroundColor: Background}) : (null)
            ]}
          >
            <Text style={[
              styles(Selected, colorScheme!, pressed).text, 
              ButtonWidth ? ({ width: ButtonWidth }) : (null),
              TextColor ? ({color: TextColor}) : (null),
              BoldText ? {fontWeight: '600'}: {fontWeight:'400'},
            ]}
            
            >
              {TextValue}
            </Text>
          </View>

        )}
    </Pressable>
  )
}

const styles = (Selected?: boolean, colorScheme?: string, pressed?: boolean) =>  StyleSheet.create({
  innerContainer:{
    margin: 2,
    borderWidth: 0.5,
    borderRadius: 6,
    borderColor: 'rgba(0,0,0, 0.15)',
    padding: 6,
    // opacity: pressed ? 0.5 : 1,
    backgroundColor: Selected ? (colorScheme === 'light' ? Colors.light.buttonActive : Colors.dark.buttonActive) : (colorScheme === 'light' ? Colors.light.button : Colors.dark.button),
    
  },
  text: {
    overflow: 'hidden',
    textAlign: 'center',
    fontWeight: '500',
    padding: 1,
    color: Selected ? (colorScheme === 'light' ? Colors.dark.text : Colors.dark.text) : (colorScheme === 'light' ? Colors.dark.text : Colors.dark.text),
  },

  Selected:{
    opacity: pressed ? 0.5 : 1,
    elevation: pressed ? 0 : 1,
    shadowColor: colorScheme === 'light' ? '#111' : '#222328',
    shadowOffset: {height: pressed ? 2 :.75, width: pressed ? 2 : 0.75},
    shadowOpacity: pressed ? 0.25 : .75,
    shadowRadius: pressed ? 2 : 1,
  },
})
