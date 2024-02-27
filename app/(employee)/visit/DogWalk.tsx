import { View, Text } from '@/components/Themed';
import { StyleSheet } from 'react-native';

export default function DogWalk() {
  return (
    <View style={styles.container}>
      <Text>DogWalk</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex:1,
  },
})