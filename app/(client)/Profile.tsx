import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import ActiveButton from '@/components/Buttons/ActiveButton';
import useAuthStore from '@/hooks/Auth';

export default function EmployeeProfile() {
  const { logout } = useAuthStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>(CLIENT)/Profile</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <ActiveButton 
        TextValue='Logout' 
        Background='#e44646' 
        TextColor='#222' 
        Function={logout} 
        ButtonWidth={120} 
        BoldText={true}  
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
