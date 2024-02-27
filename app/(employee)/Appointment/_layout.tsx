import { Ionicons } from "@expo/vector-icons";
import { Slot, Stack, router } from "expo-router";
import { Platform } from "react-native";

export default function EventsStack() {
  const isWeb = Platform.OS === 'web';

  // if (isWeb){
    return <Stack screenOptions={{
      // headerLeft: () => (
      //   <Ionicons
      //     // name={Platform.OS === "ios" ? "ios-arrow-back" : "md-arrow-back"}
      //     name="code"
      //     size={Platform.OS === "ios" ? 35 : 24}
      //     // color={Platform.OS === "ios" ? Colors.tintColor : "#000"}
      //     style={
      //       Platform.OS === "ios"
      //         ? { marginBottom: -4, width: 25, marginLeft: 9 }
      //         // : { marginBottom: -4, width: 25, marginLeft: 20, height: 20, margin: 0, padding: 0 }
      //         : { height: 12, margin: 0, padding: 0 }
      //     }
      //     onPress={() => {
      //       router.back();
      //     }}
      //   />
      // )

    }} />
  // } else {
  //   return <Slot />
  // }

}