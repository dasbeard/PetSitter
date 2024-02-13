import { Stack, Tabs, router } from "expo-router";
// import FontAwesome from '@expo/vector-icons/FontAwesome';
import { MaterialIcons } from '@expo/vector-icons';
import { useClientOnlyValue } from "../../components/useClientOnlyValue";
import MainHeader from "@/components/MainHeader";

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from "@/components/useColorScheme";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialIcons>['name'];
  color: string;
}) {
  return <MaterialIcons size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function AuthLayout() {
  // const colorScheme = useColorScheme()  
  return (
    <>
    <MainHeader />
      <Stack
      screenOptions={{ headerShown: false}}
        // screenOptions={() => {
          //   return {
            //     header: ( ) => <MainHeader />
            //   }
            // }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="Profile" />


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