import { Tabs, router } from "expo-router";
// import FontAwesome from '@expo/vector-icons/FontAwesome';
import { MaterialIcons } from '@expo/vector-icons';
import { useClientOnlyValue } from "../../components/useClientOnlyValue";


// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialIcons>['name'];
  color: string;
}) {
  return <MaterialIcons size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function AuthLayout() {

  
  return (
    <Tabs
      screenOptions={{
        headerShown: useClientOnlyValue(false,true),
      }}
      >
      <Tabs.Screen 
        name="index" 
        options={{ 
          headerTitle: 'Dashboard',
          tabBarIcon: ({ color }) => <TabBarIcon name="dashboard" color={color} />,
          tabBarLabel: 'Dashboard'
        }}
        />
      <Tabs.Screen 
        name="Profile" 
        options={{ 
          headerTitle: 'Profile',
          tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} />,
          tabBarLabel: 'Profile',
        }}

      />
    </Tabs>
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


