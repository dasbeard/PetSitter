import { MaterialTopTabs } from "@/app/layouts/TopTabsLayout";
import { Platform } from "react-native";

export default function Dashboard() {
  return (
    <MaterialTopTabs 
      screenOptions={{
        tabBarLabelStyle: {letterSpacing: 2},
        swipeEnabled: Platform.OS === 'web' ? false : true,
        lazy: true,
      }}>
      <MaterialTopTabs.Screen name="index" options={{title: 'Scheduled Visits'}} />
      <MaterialTopTabs.Screen name="PastEvents" options={{title: 'Past Visits'}}/>
    </MaterialTopTabs>   
  )
}