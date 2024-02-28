import EmployeeHeader from "@/components/Headers/EmployeeHeader";
import { Stack } from "expo-router";

export default function ClientRootLayout() {
  return (
    <>
      <EmployeeHeader />
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="index" />
        <Stack.Screen name="Profile" />
        <Stack.Screen name="CreateNewVisit" />
      </Stack>
    </>
  )
}