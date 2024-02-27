import { Image, Pressable, StyleSheet } from 'react-native'
import { Text, View } from '@/components/Themed';
import { useColorScheme } from './useColorScheme';
import { router } from 'expo-router';

export default function EmployeeEventItem({data, pressed}:{data?:any, pressed?:boolean}) {
    const apptDate = new Date(data.appointmentDate).toLocaleDateString()

    const colorScheme = useColorScheme();
    const petBgColors =[
      '#dd8dda',
      '#4dc0ab',
      '#aac8cc',
      '#e87d56',
      '#81d981',
      '#56fcf1',
    ]

    const handlePress= () => {
      router.push(`/(employee)/visit/${data.id}`)    
    }

  return (     
    <Pressable onPress={handlePress}>
      {({ pressed }) => (

      <View lightColor='rgba(0,0,0, 0.05)' style={[styles.container, {borderColor: colorScheme=='light' ? '#101' : '#959595', opacity: pressed ? 0.5 : 1 }]}>
        
        <View style={styles.clientContainer}>
          <Image style={styles.clientAvatar} source={{uri:data.client.picture.avatar_url}} />
          <Text style={styles.clientName}>{data.client.firstName} {data.client.lastName}</Text>
        </View>
        
        <View style={styles.appointDetails}>
          <Text style={styles.appointType}>{data.type}</Text>
          <Text style={styles.appointTime}>{apptDate} - {data.appointmentTime}</Text>
          <View style={styles.addressContainer}>
            <Text style={styles.clientAddress}>{data.client.location.address}. </Text>
            <Text style={styles.clientAddress}>{data.client.location.city}, {data.client.location.state}</Text>
          </View>
        </View>

        <View style={styles.petContainer}>
          {data.pets.map((pet: any, _idx: number, array: any) => {
            if (_idx > 1 && _idx < 4) {
              return <Image 
                key={_idx}
                style={[
                  styles.petImages, { 
                  left: array.length < 4 ? 10 : _idx%2===0  ? 0: 20, 
                  marginTop: 20,
                  backgroundColor: petBgColors[_idx], 
                }]}
                source={{uri: pet.image_url}}
              />
            } else if (_idx > 3 && _idx < 5){
              return <Image 
                key={_idx}
                style={[
                  styles.petImages, { 
                  // left: _idx%2===1 ? 20: 0, 
                  left: array.length < 5 ? 10 : _idx%2===0  ? 0: 20, 
                  marginTop: 40,
                  backgroundColor: petBgColors[_idx], 
                }]}
                source={{uri: pet.image_url}}
              />
            } else {
              return <Image 
                key={_idx}
                style={[
                  styles.petImages, { 
                    left: _idx%2===1 ? 20: 0, 
                    marginTop: _idx > 1 ? 20: 0,
                    backgroundColor: petBgColors[_idx], 
                  }]}
                source={{uri: pet.image_url}}
              />
            }
          })}
        </View>
      </View>
      )}
    </Pressable>
  )
}


const styles=StyleSheet.create({
  container:{
    flex:1,
    borderWidth:1,
    borderRadius:14,
    marginBottom: 12,
    // marginTop: 4,
    paddingVertical: 2,
    flexDirection: 'row',
    overflow: 'hidden',
    // backgroundColor: '#333',
    // backgroundColor: 'rgba(0,0,0,0',
  },
  clientContainer:{
    // backgroundColor: '#cacaca',
    backgroundColor: 'rgba(0,0,0,0)',
    marginHorizontal: 8,
    marginVertical: 1,
    width: 110,
    height: 110,
    // justifyContent: 'center',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  clientAvatar:{
    width:72,
    height:72,
    borderRadius: 40,
    objectFit: 'contain',
    overflow: 'hidden',
    marginBottom:2,
    // marginTop:8,
  },
  clientName:{
    // marginTop: 3,
    fontWeight: '500',
    textAlign: 'center',
    // backgroundColor: '#9d9',
  },
  appointDetails:{
    flex:2.5,
    // backgroundColor: '#999',
    paddingVertical: 2,
    justifyContent: 'space-evenly',
    alignItems: 'baseline',
    marginLeft: 2,
    // alignItems: 'center',
  },
  appointType:{
    fontSize: 24,
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
  appointTime:{
    fontSize: 15,
    // fontWeight: '500',
    // marginRight: 15,
  },
  addressContainer:{

  },
  clientAddress:{
    // backgroundColor: '#f2f',
    fontSize: 12,
    fontWeight: '300',
  },
  petContainer:{
    flex:1,
    // backgroundColor: '#f2f',
    // backgroundColor: '#abb7c2',
    flexDirection: 'row',
  },
  petImages:{   
    top: '25%',
    position:'absolute',
    height: 30,
    width: 30,
    borderRadius:20,
    backgroundColor: '#aca'
  },
  
})

