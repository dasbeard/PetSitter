import { View, Text } from '@/components/Themed';
import { StyleSheet } from 'react-native';


export default function HomeVisit() {
  return (
    <View style={styles.container}>
      <Text>HomeVisit</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex:1,
  },
})