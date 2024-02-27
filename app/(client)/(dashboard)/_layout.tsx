import { MaterialTopTabs } from "@/app/layouts/employeeTopTabs";
import { View } from "@/components/Themed";
import { Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Dashboard() {
  return (
    <MaterialTopTabs 
      screenOptions={{
        tabBarLabelStyle: {letterSpacing: 2},
        swipeEnabled: Platform.OS === 'web' ? false : true,
        lazy: true,
        lazyPlaceholder: () => <SafeAreaView />
      }}>
      <MaterialTopTabs.Screen name="index" options={{title: 'Scheduled Visits'}} />
      <MaterialTopTabs.Screen name="PastEvents" options={{title: 'Past Visits'}}/>
    </MaterialTopTabs>   
  )
}