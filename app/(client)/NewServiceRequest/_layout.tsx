import { Stack } from "expo-router";
import BackHeader from "@/components/Headers/BackHeader";

import { View } from "@/components/Themed";



export default function AuthLayout() {
  return (
    <>
      <BackHeader headerText="New Service Request" />
      <Stack
        screenOptions={{ 
          headerShown: false, 
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="Details" />
      </Stack>
    </>
  )
}
