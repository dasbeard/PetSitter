import { View, Text } from '@/components/Themed';
import { StyleSheet } from 'react-native';

export default function Boarding() {
  return (
    <View lightColor='rgba(0,0,0,0)' style={styles.container}>
      <Text>Boarding</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
})