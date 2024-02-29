import { Stack } from "expo-router";

export default function CreateNewVisit() {
  console.log('Test');
  

  return (
    <Stack screenOptions={{ headerShown: true}}>
      <Stack.Screen name="NewServiceRequest" options={{headerShown: false}} />
    </Stack>
  )
}