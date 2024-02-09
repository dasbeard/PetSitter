import React, { useEffect } from 'react'
import { Stack, router } from 'expo-router'

import { AppState } from "react-native";
import { supabase } from '@/utils/supabase';
import useAuthStore from './hooks/Auth';


AppState.addEventListener('change', (state) => {
  console.log('app/_layout - APP STATE RUNNING');
  
  if (state === 'active') {
    supabase.auth.startAutoRefresh()
  } else {
    supabase.auth.stopAutoRefresh()
  }
})

const AppLayout = () => {
  const { setSession } = useAuthStore();
  // console.log('(app)/layout');

  useEffect(() => {
    // console.log('(app)/layout - useEffect');
    
    supabase.auth.getSession().then(({ data: { session } }) => {
      if(session){
        setSession(session)
        router.replace('/(auth)')
      }
    })
  
    supabase.auth.onAuthStateChange((_event, session) => {  
      if(session){
        setSession(session)
        router.replace('/(auth)')
      } else {
        setSession(null)
        router.replace('/(public)')
      }
    })
  }, [])


  return (
    <Stack screenOptions={{headerShown: false}} />
  )
}

export default AppLayout