import { Stack } from "expo-router";
import MainHeader from "@/components/MainHeader";

export default function AuthLayout() {

  return (
    <>
    <MainHeader />
      <Stack
      initialRouteName="index"
      screenOptions={{ headerShown: false}}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="Profile"/>
        <Stack.Screen name="[eventId]"/>
        
      </Stack>
    </>
  )
}


//  <Stack.Screen name="(newService)" /> 
//          <Stack.Screen 
//           name="AddEventModal" 
//           options={{
//             presentation: 'modal', 
//             // headerShown: Platform.OS ==='web' ? false : true,
//             headerTitleAlign: 'center',
//             animation: 'fade_from_bottom',
//             animationTypeForReplace: 'push',
//           }} 
//         /> 

