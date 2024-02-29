import { Image, Platform, Pressable, StyleSheet } from 'react-native'
import { Text, View } from '@/components/Themed';
import { useColorScheme } from './useColorScheme';
import { router } from 'expo-router';
import { DayOfWeek } from '@/utils/returnDay';
import useAuthStore from '@/hooks/Auth';
import { Ionicons } from '@expo/vector-icons';


                      // /width/height
// https://picsum.photos/200/300

export default function ClientEventItem({data, pressed}:{data?:any, pressed?:boolean}) {
  const colorScheme = useColorScheme();
  const { userData } = useAuthStore()
  
  const asDate = new Date(userData!.created_at)
  const apptDate = asDate.toLocaleDateString()
  const day = DayOfWeek(asDate.getDay())
  const serviceTime = asDate.toLocaleTimeString()

console.log(colorScheme);




  const handlePress= () => {
    // router.push(`/(client)/visit/${data.id}`)  
    console.log('pressed');
  }

  return (     
    <Pressable onPress={handlePress} style={{overflow: 'hidden'}}>
      {({ pressed }) => 

      <View style={styles(colorScheme!, pressed).mainContainer}>       

        <View style={styles(colorScheme!).header}>
          <Text style={styles().serviceData}>{day} {apptDate}</Text>
          <Text> at </Text>
          <Text style={styles().serviceData}>{serviceTime} </Text>
          <Text style={styles().serviceData}>{data.type} </Text>
        </View>

        <View style={ styles().container}>
          <View style={styles().imagesContainer}>
            <Image style={styles().mainImage} source={{uri: 'https://picsum.photos/400'}} />
            <View style={styles(colorScheme!).secondaryImageContainer}>
              <Image style={styles(colorScheme!).secondaryImages} source={{uri: 'https://picsum.photos/280'}} />
              <Image style={styles(colorScheme!).secondaryImages} source={{uri: 'https://picsum.photos/290'}} />
            </View>
          </View>

          <View style={styles().innerContainer}>
            <View style={styles().contentContainer}>
              <View style={styles().employeeContainer}>
                <View style={styles().employeeImageContainer}>
                  <Image style={styles(colorScheme!).employeeImage} source={{uri:data.employee.picture.avatar_url}} />
                </View>
                <Text style={styles().employeeName}>{data.employee.firstName}</Text>
              </View>

              <View style={styles().visitNotesContainer}>
                <Text 
                  style={styles().visitNotesLead}
                  numberOfLines={Platform.OS === 'web' ? undefined : 4} 
                >
                  Visit notes:
                  <Text 
                    style={styles().visitNotes}>
                      Lorem ipsum dolor sit amet, consectetur adipi sicing elit. Quos quo beatae maio res nemo vitae, harum ex pedita itaque sed similique assumenda quibusdam laudantium sapiente magnam
                  </Text>
                </Text>
              </View>
            </View>

            <View style={styles().quickAnswersContainer}>
              <View style={styles().quickItem}>
                <Ionicons name='checkmark' size={13} />
                <Text style={styles().quickItemText}>item check</Text>
              </View>
              <View style={styles().quickItem}>
                <Ionicons name='checkmark' size={13} />
                <Text style={styles().quickItemText}>item check</Text>
              </View>
              <View style={styles().quickItem}>
                <Ionicons name='checkmark' size={13} />
                <Text style={styles().quickItemText}>item check</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      }
    </Pressable>
  )
}


const styles = ( colorScheme?: string, pressed?: boolean) => StyleSheet.create({
  mainContainer:{
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 8,
    borderColor: colorScheme === 'light' ? 'rgba(0, 5, 17, 0.25)' : 'rgba(21, 16, 19, 0.92)',
    opacity: pressed ? 0.5 : 1,
    backgroundColor: 'rgba(249, 249, 254, 0.1)',

    elevation: pressed ? 1 : 2,
    shadowColor: colorScheme === 'light' ? '#111' : '#222328',
    shadowOffset: {height: pressed ? 1.5 : 2.5, width: pressed ? 0.5: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  header:{ 
    // borderWidth: 1,
    // borderColor: 'red',
    borderBottomWidth: 1,
    // borderBottomColor: colorScheme ==='light' ? '#000511' : '#3a3e49',
    
    borderBottomColor: colorScheme ==='light' ? '#000511' : '#22252c',

    backgroundColor: colorScheme=='light' ? '#e1e4ec' : 'rgba(39, 44, 56, 0.90)',

    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,

    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    letterSpacing: 0.5,
    // marginBottom: 3,
  },
  serviceData:{
    fontSize: 15,
    fontWeight: '500',
  },
  container:{
    // borderWidth: 1,
    // borderColor: 'blue',
    
    flex: 4,
    flexDirection: 'row',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    
    overflow: 'hidden',
  },
  imagesContainer: {
    flex: 1.75,
    flexDirection: 'row',
    // borderWidth: 1,
    // borderColor: colorScheme=='light' ? '#000511' : '#3a3e49',
    // borderRadius: 6,
    borderBottomLeftRadius: 6,
    overflow: 'hidden',
  },
  mainImage:{
    // height: 100,
    height:Platform.OS === 'web' ? 175 : 100,
    width: '60%',
    objectFit:'cover',
    overflow: 'hidden',
    borderTopLeftRadius: 1,
    borderBottomLeftRadius: 1,    
  },
  secondaryImageContainer:{
    overflow: 'hidden',
    // width: 40,
    width: '40%',   
    // height: '50%',
    gap:1, 
  },
  secondaryImages:{
    objectFit: 'cover',
    height: '50%',
    marginLeft: 1,
  },
  innerContainer: {
    // borderWidth: 1,
    // borderColor: 'green',

    flex: 3.5,
  },
  contentContainer:{
    // borderWidth: 1,
    // borderColor: 'red',
  
    flex: 4,
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  employeeContainer: {
    // borderWidth: 1,
    // borderColor: 'blue',

    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  employeeImageContainer:{
    borderWidth: 1,
    borderColor: colorScheme=='light' ? '#000511' : '#3a3e49',
    height: '65%',
    width: '75%',
    borderRadius: Platform.OS === 'web' ? 6 : 80,

    elevation: 2,
    shadowColor: colorScheme === 'light' ? '#111' : '#222328',
    shadowOffset: {height: 3, width: 2},
    shadowOpacity: 0.15,
    shadowRadius: 2,
        
  },
  employeeImage:{
    height: '100%',
    width: '100%',
    borderRadius: Platform.OS === 'web' ? 2 : 80,
    overflow: 'hidden',
    objectFit: 'cover',
  },
  employeeName:{
    // borderWidth: 1,
    // borderColor: 'pink',

    fontSize: Platform.OS === 'web' ? 14 : 11,
    fontWeight: '500',
  },
  visitNotesContainer:{
    flex: 2.15,
    paddingVertical: 3,
    marginHorizontal: 3,
  },
  visitNotesLead:{
    flex: 1,
    // borderColor: 'blue',
    // borderWidth: 1,
  },
  visitNotes:{
    
    // flex: 1,
    fontSize: 13,
  },
  quickAnswersContainer:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
  }, 
  quickItem:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',  
  },
  quickItemText:{
    fontSize: 10,
    marginLeft: 3
  },
})

