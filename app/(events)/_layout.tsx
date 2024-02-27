import { Stack } from "expo-router";

export default function _layout() {
  return (
    <Stack initialRouteName="[id]">
      <Stack.Screen name="[id]" />
      {/* <Stack.Screen name="[eventDetailsId]" /> */}
    </Stack>
  )
}