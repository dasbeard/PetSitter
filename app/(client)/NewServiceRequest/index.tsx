import { router } from "expo-router";
import { StyleSheet } from "react-native"
import { View } from "@/components/Themed"

import useCreateEventStore from "@/hooks/CreateEvent";
import SelectionButton from "@/components/Buttons/SelectionButton";

export default function NewRequest() {
  const { setEventType } = useCreateEventStore();

  
  const serviceOptions= ['Dog Walk', 'Home Visit', 'Boarding' ]
  
  const handleServiceSelection = (service: string) => {
    // setEventType(service)
    // router.push('/(client)/NewServiceRequest/Details')
  
    console.log('pressed');
    
  }

  return (
    <View style={styles.container}>
      {serviceOptions.map((item, _idx) => (
        <View key={_idx} style={styles.serviceType}>
          <SelectionButton service={item} onPress={() => handleServiceSelection(item)} />
        </View>
      ))}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 12,
    paddingHorizontal: 16,
  },

  serviceType: {
    marginVertical: 12,
  },
})
