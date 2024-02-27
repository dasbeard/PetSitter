import { MaterialTopTabs } from "@/app/layouts/employeeTopTabs";
import { Platform } from "react-native";

export default function Dashboard() {
  return (
    <MaterialTopTabs 
      screenOptions={{
        tabBarLabelStyle: {letterSpacing: 2},
        swipeEnabled: Platform.OS === 'web' ? false : true,
      }}>
      <MaterialTopTabs.Screen name="index" options={{title: 'Upcoming'}} />
      <MaterialTopTabs.Screen name="PastEvents" options={{title: 'Past'}}/>
    </MaterialTopTabs>   
  )
}