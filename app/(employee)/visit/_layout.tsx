import BackHeader from "@/components/BackHeader";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Slot, Stack, router } from "expo-router";
import { Platform } from "react-native";

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