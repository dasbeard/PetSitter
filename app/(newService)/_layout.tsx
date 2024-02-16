import { Stack, router } from "expo-router";
import MainHeader from "@/components/MainHeader";
import { Platform, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { View } from "@/components/Themed";


const BackButton = () => {
  return (
    <View>
      <Pressable onPress={() => router.back()}>
        {/* These icons need to be fixed to look more native - or replace all arrows within stacks */}
        <FontAwesome name={Platform.OS === 'ios' ? "chevron-left" : 'arrow-left'} size={22}/>
      </Pressable>
    </View>
  )
}

export default function AuthLayout() {
  const isWeb = Platform.OS === 'web';


  return (
    <>
    { isWeb ? (
      <MainHeader />
    ):(
      null
    )}
      <Stack
        screenOptions={{ 
          headerShown: isWeb ? false : true, 
        }}
        >
        <Stack.Screen 
          name="index" 
          options={{
            // headerShown: false,
            headerTitle: '',
            headerLeft: () => <BackButton />
            
          }}
          />

        <Stack.Screen 
          name="DateAndDetails"
          options={{
            headerBackTitle:'',
            headerTitle: ''
          }}
          />
      </Stack>
    </>
  )
}
