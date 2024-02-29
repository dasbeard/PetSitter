import SelectionButton from "@/components/Buttons/SelectionButton";
import { router } from "expo-router";
import { StyleSheet } from "react-native"
import { View, Text } from "@/components/Themed"

import useCreateEventStore from "@/hooks/CreateEvent";

export default function NewRequest() {

  const { setEventType } = useCreateEventStore();

  const handleServiceSelection = (service: string) => {
    setEventType(service)
    router.push('/(client)/NewServiceRequest/Details')
  }

  return (
    <View style={styles.container}>
      <View style={styles.serviceType}>
        <SelectionButton 
          service="Dog Walk" 
          onPressed={() => handleServiceSelection('dogWalk')} 
        />

        <SelectionButton 
          service="Home Visit"
          onPressed={() => handleServiceSelection('homeVisit')}
        />

        <SelectionButton 
          service="Boarding"
          onPressed={() => handleServiceSelection('boarding')}
        />

      </View>

    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 10,
  },
  
  serviceType:{
    flex:.5,
    justifyContent: 'space-evenly',
  },

})
