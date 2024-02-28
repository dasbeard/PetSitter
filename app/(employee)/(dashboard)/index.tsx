import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import EmployeeEventItem from '@/components/EmployeeEventItem';
import { FlashList } from '@shopify/flash-list';

import dummyData from '@/dummydata.js'

export default function ActiveEvents() {
  const data = dummyData;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>(employee)ActiveEvents</Text>
        
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      </View>
      <View style={styles.list}>
        <FlashList 
          data={data}
          estimatedItemSize={25}
          keyExtractor={(item:any) => item.id}
          renderItem={({item}) => <EmployeeEventItem data={item}/>
        }
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  list:{
    flex:9,
    minHeight: 50,
    width: '100%',    
  },
  header:{
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#d9d9d9',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  separator: {
    alignSelf:'center',
    marginVertical: 3,
    height: 1,
    width: '80%',
  },
});
