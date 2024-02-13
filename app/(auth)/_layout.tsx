import { Stack } from "expo-router";
import { MaterialIcons } from '@expo/vector-icons';
import MainHeader from "@/components/MainHeader";
import { Platform } from "react-native";


export default function AuthLayout() {

  return (
    <>
    <MainHeader />
      <Stack
      screenOptions={{ headerShown: false}}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="Profile"/>
        <Stack.Screen 
          name="AddEventModal" 
          options={{
            presentation: 'modal', 
            // headerShown: Platform.OS ==='web' ? false : true,
            headerTitleAlign: 'center',
            animation: 'fade_from_bottom',
            animationTypeForReplace: 'push',
          }} 
        />


      </Stack>
    </>
  )
}






{/* <Stack 
initialRouteName='index'
// screenOptions={() => {
  //   return {
  //     headerTitle: 'Pet Sitter',
  //     headerTitleAlign: 'center',
  //     headerRight: () => (<MainHeader />),
  //   }
  // }}
> */}


//     <Tabs
// screenOptions={{
//   headerShown: useClientOnlyValue(false,true),
// }}
// >
// <Tabs.Screen 
//   name="index" 
//   options={{ 
//     headerTitle: 'Dashboard',
//     tabBarIcon: ({ color }) => <TabBarIcon name="dashboard" color={color} />,
//     tabBarLabel: 'Dashboard'
//   }}
//   />
// <Tabs.Screen 
//   name="Profile" 
//   options={{ 
//     headerTitle: 'Profile',
//     tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} />,
//     tabBarLabel: 'Profile',
//   }}

// />
// </Tabs>