import React, { useEffect } from 'react'
import { Stack, router } from 'expo-router'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { AppState } from "react-native";
import { supabase } from '@/utils/supabase';
import { useFonts } from 'expo-font';
import { useColorScheme } from '@/components/useColorScheme';
import * as SplashScreen from 'expo-splash-screen';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import useAuthStore, { UserData } from '@/hooks/Auth';
import { Session } from '@supabase/supabase-js';


AppState.addEventListener('change', (state) => {
  console.log('app/_layout - APP STATE RUNNING');
  
  if (state === 'active') {
    supabase.auth.startAutoRefresh()
  } else {
    supabase.auth.stopAutoRefresh()
  }
})

SplashScreen.preventAutoHideAsync();

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Layout />
  )
}

const Layout = () => {
  const colorScheme = useColorScheme()
  const { setSession, setUserData, getUserData } = useAuthStore()
  // console.log('(app)/_layout ');

  const setPaths = async (session: Session) => {
    setSession(session)
    if (session?.user){
      const data = await getUserData(session)
      setUserData(data)
      
      if (data?.isEmployee){
        router.replace('/(employee)')
      } else {
        router.replace('/(client)')
      }
    } else {
      router.replace('/(_public)')
    }
  }

  useEffect(() => {
    console.log('(app)/layout - useEffect');

    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if(session){
        await setPaths(session)
      } else {
        router.replace('/(_public)')
        setSession(null)
      }
    })
  
    supabase.auth.onAuthStateChange(async (_event, session) => {  
      if(session){
        setSession(session)
        await setPaths(session)
      } else {
        router.replace('/(_public)')
        setSession(null)
      }
    })
  }, [])

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack 
          initialRouteName='/(_public)'
          screenOptions={{
            headerShown: false,
          }}
        />    
    </ThemeProvider>
  )
}



// supabase.auth.onAuthStateChange((_event, session) => {  
//   // THis will need to be updated to determin employee/client
//   if(session){
//     setSession(session)
//     // router.replace('/(auth)')
//     router.replace('/(employee)')
//   } else {
//     router.replace('/(_public)')
//     setSession(null)
//   }
// })