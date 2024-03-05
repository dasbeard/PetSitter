import { Pressable, StyleSheet, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Link, router } from 'expo-router'
import { Text } from '@/components/Themed'
import useAuthStore from '@/hooks/Auth'
import { FontAwesome } from '@expo/vector-icons'
import Spacer from '@/components/Spacer'
import ActiveButton from '@/components/Buttons/ActiveButton'

const Login = () => {
  const [ email, setEmail ] = useState<string>('test@test.com')
  const [ password, setPassword ] = useState<string>('123456')
  const [ loading, setLoading ] = useState<boolean>(false)
  const { signIn, getUserData, setUserData } = useAuthStore();

  const handleSignIn = async () => {
    setLoading(true)
    try {
      const { user, error }: any = await signIn(email, password);
      if(error) throw error

      if (user){
        const data = await getUserData(user)
        setUserData(data)
        
        if (data?.isEmployee){
          router.replace('/(employee)')
        } else {
          router.replace('/(client)')
        }
      } 

    } catch (error: any) {
      console.log('Error loggin in:', error);
      alert(error.message)
    } finally {
      setLoading(false)
    }
  };


  return (
    <View style={ styles.container }>
      <Text style={styles.header}>Login to your account</Text>

      <View style={styles.inputContainer} >
        <FontAwesome name='envelope' size={12} style={{ marginRight: 6}}/>
        <TextInput 
          style={styles.inputFeild} 
          autoCapitalize='none'
          placeholder='email@address.com' 
          value={email} 
          onChangeText={setEmail} 
          placeholderTextColor={'#ccc'}
          />
      </View>
      
      <View style={styles.inputContainer} >
        <FontAwesome name='lock' size={16} style={{ marginRight: 6}}/>
        <TextInput 
          style={styles.inputFeild} 
          placeholder='Password' 
          secureTextEntry 
          value={password} 
          onChangeText={setPassword} 
          autoCapitalize='none'
          placeholderTextColor={'#ccc'}
        />
      </View>

      <Spacer size={3} />

      <ActiveButton 
        Disabled={loading} 
        TextValue='Login' 
        Function={handleSignIn} 
        ButtonWidth={120} 
        BoldText={true}  
      />

      <Spacer size={2} />

      <Link style={styles.link} href={'/Register'} asChild>
        <Pressable>
          {({ pressed }) => (
            <Text
              style={{ fontSize: 12, opacity: pressed ? 0.5 : 1 }}
            >
              Register for an account
            </Text>
          )}
        </Pressable> 
      </Link>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header:{
    fontSize: 22,
    marginVertical: 22,
  },
  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc', 
    borderRadius: 4,
    paddingHorizontal: 10,
    minWidth: 300,
    maxWidth: 380,
    marginVertical: 8
  },
  inputFeild: {
    flex:1,
    marginVertical: 6,
    marginHorizontal: 4,
  },
  link: {
    marginTop: 16,
  },
})

export default Login