import ClientHeader from "@/components/Headers/ClientHeader";
import { Stack } from "expo-router";

export default function ClientRootLayout() {  

  return (
    <>
      <ClientHeader />
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="index" />
        <Stack.Screen name="Profile" />
        <Stack.Screen name="CreateNewVisit" />
        <Stack.Screen 
          name="ModalTest2" 
          options={{
            presentation: 'modal',
          }} 
          />
      </Stack>
    </>
  )
}