import { Stack } from "expo-router";

export default function CreateNewVisit() {
  console.log('(client)/CreateNewVisit');
  

  return (
    <Stack screenOptions={{ headerShown: true}}>
      <Stack.Screen name="NewServiceRequest" options={{headerShown: false}} />
    </Stack>
  )
}