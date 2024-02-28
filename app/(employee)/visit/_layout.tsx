import BackHeader from "@/components/Headers/BackHeader";
import { Stack } from "expo-router";

export default function EventsStack() {

  return (
    <>
      <BackHeader />
      <Stack screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="[id]" />
      </Stack>
    </>
  )
}