import { Stack } from "expo-router";

export default function Dashboard() {
  return (
    <Stack screenOptions={{ headerShown: false}}>
      <Stack.Screen name="(dashboard)" options={{headerShown: false}} />
    </Stack>
  )
}