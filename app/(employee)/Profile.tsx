import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import BasicButton from '@/components/BasicButton';
import useAuthStore from '@/hooks/Auth';

export default function EmployeeProfile() {
  const { logout } = useAuthStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>(employee)/Profile</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <BasicButton text='Logout' bgColor='#e44646' txtColor='#222' passedFunction={logout} />

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
