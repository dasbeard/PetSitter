import React, { useEffect, useState } from 'react'
import { Platform, StyleSheet } from 'react-native';

import { View, Text } from '@/components/Themed'
import { useColorScheme } from '@/components/useColorScheme';
import ActiveButton from '@/components/Buttons/ActiveButton';

import useCreateEventStore from '@/hooks/CreateEvent'
import { Link, router } from 'expo-router';
import DatePicker from '@/components/DatePicker';

const  DateAndDetails = () => {
  const { eventType } = useCreateEventStore();
  const [ occurrence, setOccurrence ]= useState<string>('')
  const [ selectedDays, setSelectedDays ] = useState<string[]>([])
  const [ selectedTimes, setSelectedTimes ] = useState<string[]>([])
  const colorScheme = useColorScheme()

  const days= Platform.OS === 'web' ? 
    ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] :
    ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'] 
  


  // const days = [
  //   {
  //     id: 0,
  //     web: 'Sunday',
  //     native: 'S',
  //   },
  //   {
  //     id: 1,
  //     web: 'Monday',
  //     native: 'M',
  //   },
  //   {
  //     id: 2,
  //     web: 'Tuesday',
  //     native: 'T',
  //   },
  //   {
  //     id: 3,
  //     web: 'Wednesday',
  //     native: 'W',
  //   },
  //   {
  //     id: 4,
  //     web: 'Thursday',
  //     native: 'T',
  //   },
  //   {
  //     id: 5,
  //     web: 'Friday',
  //     native: 'F',
  //   },
  //   {
  //     id: 6,
  //     web: 'Saturday',
  //     native: 'S',
  //   },
  // ]

  const handleOccranceSelection = (type: string) => {   
    if(type === occurrence) {
      setOccurrence('')
    } else {
      setOccurrence(type)
    }
  }

  const handleDaySelection = ( day: string) => {
    if (selectedDays.includes(day)){
      const updated = selectedDays.filter( d => d !== day);
      setSelectedDays(updated)
    } else {
      setSelectedDays([...selectedDays, day])
    } 
  }

  const handleTimeSelection = ( time: string) => {
    if (selectedTimes.includes(time)){
      const updated = selectedTimes.filter( t => t !== time);
      setSelectedTimes(updated)
    } else {
      setSelectedTimes([...selectedTimes, time])
    } 
  }

  // const showDatePicker = () => {
  //   setDatePickerVisible(true);
  // };

  // const hideDatePicker = () => {
  //   setDatePickerVisible(false);
  // };

  // const handleConfirm = (date: any) => {
  //   console.warn("A date has been picked: ", date);
  //   hideDatePicker();
  // };

  const showModal = () => {
    // console.log('Click');
    // setDatePickerVisible();
    // setDatePickerVisible(true)
    // console.log(datePickerVisible);
    

    router.navigate('/DateSelectionModal')
    // router.navigate('/(client)/NewServiceRequest/DatePickerModal')
  }




  return (
    <>
          {/* {DatePickerVisible ? (
        <DatePicker />
      ) : null} */}
      <View style={styles.container}>

        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{eventType}</Text>
        </View>

        <View style={styles.oftenContainer}>
          <Text style={styles.subHeader}>How often do you need service?</Text>

          <View style={styles.oftenButtons}>
            <ActiveButton TextValue='Once' Selected={occurrence === 'Once'} Function={() => handleOccranceSelection('Once')} ButtonWidth={75} />
            <ActiveButton TextValue='Weekly' Selected={occurrence === 'Weekly'} Function={() => handleOccranceSelection('Weekly')} ButtonWidth={75} />
          </View>

        </View>

        <View style={styles.weekSelectionContainer}>
          <Text style={styles.subHeader}>What days you would like serivce?</Text>
          <View style={styles.oftenButtons}>
            { days.map((d, _idx) => (
              <ActiveButton 
                key={_idx}
                TextValue={d} 
                Selected={selectedDays.includes(d)} 
                Function={() => handleDaySelection(d)}  
                ButtonWidth={ Platform.OS === 'web' ? 100 : 25}
              />
            ))}
          </View>
        </View>

        <View style={styles.startDateContainer}>
          <Text style={styles.subHeader}>When do you need serive to begin?</Text>

          <View style={styles.oftenButtons}>
            <ActiveButton 
              TextValue='12/12/2024'
              ButtonWidth={100}
              Function={showModal}
            />
          </View>

        </View>

        <View style={styles.timeContainer}>
          <Text style={styles.subHeader}>What time of day?</Text>

          <View style={styles.timeButtons}>

            <ActiveButton 
              TextValue='Morning'
              ButtonWidth={100}
              Selected={selectedTimes.includes('Morning')} 
              // Function={}
              />
            <ActiveButton 
              TextValue='Afternoon'
              ButtonWidth={100}
              Selected={selectedTimes.includes('Afternoon')} 
              // Function={}
              />
            <ActiveButton 
              TextValue='Evening'
              ButtonWidth={100}
              Selected={selectedTimes.includes('Evening')} 
              // Function={}
              />
          </View>
          
          <View style={styles.nextContainer}>
            <ActiveButton 
              TextValue='Next'
              ButtonWidth={100}
              Disabled={true}
              // Function={}
              />

          </View>

        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 12,
  },
  headerContainer:{
    flex: 0.25,
    alignItems: 'center',
    padding: 6,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  oftenContainer: {
    flex:1,
  },
  subHeader:{
    fontSize: 15,
    fontWeight: '300',
    marginBottom: 4,
    marginLeft: Platform.OS === 'web' ? 35 : 12,
    // textAlign: 'center',
  },
  oftenButtons: {
    flexDirection: 'row',
    marginVertical: 6,
    justifyContent: 'space-evenly',
  },
  weekSelectionContainer: {
    flex:1,
  },
  startDateContainer: {
    flex:1, 
  },

  timeContainer:{
    flex: 2,
    justifyContent: 'center',
  },
  timeButtons:{
    flex: 1,
    flexDirection: 'row',
    marginVertical: 6,
    justifyContent: 'space-evenly',
  },

  nextContainer: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
  },

})



export default DateAndDetails