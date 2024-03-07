import React, { useState } from 'react'
import { StyleSheet, Pressable, Platform } from 'react-native'
import { router } from 'expo-router'
import { View, Text } from '@/components/Themed';

import DateTimePicker, { DateType} from 'react-native-ui-datepicker'
import dayjs from 'dayjs'

import ActiveButton from '@/components/Buttons/ActiveButton'


export default function DateSelectionModal() {

  const [date, setDate] = useState<DateType | undefined>();
  const [range, setRange] = useState<{
    startDate: DateType | undefined;
    endDate: DateType | undefined;
  }>({ startDate: undefined, endDate: undefined });

  const handleDayPress = (day: any) => {
    setDate(day)
    // console.log(dayjs(day).format('MMMM, DD, YYYY'))
  }

  const handleRangeSelect = (range: any) => {
    setRange(range)
    // console.log("StartDay: ", dayjs(range.startDate).format('MMMM, DD, YYYY'), " EndDay: ", dayjs(range.endDate).format('MMMM, DD, YYYY'));    
  }


  const handleCancel = () => {
    router.back()
  }

  const handleSaveDates = () => {
    router.back()
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Select the day needed</Text>
      </View>


      <View style={styles.calendarContainer}>
        <DateTimePicker
          mode="single"
          date={date}
          onChange={(params) => handleDayPress(params.date)}
          
          // mode='range'
          // startDate={range.startDate}
          // endDate={range.endDate}
          // onChange={handleRangeSelect }
          />
      </View>

      <View style={styles.bottomSection}>
        <View style={styles.dates}>
          {/* <View style={{ gap: 3 }}>
            <Text>
              <Text style={{ marginRight: 5, fontWeight: 'bold' }}>
                Start Date:
              </Text>
              {range.startDate
                ? dayjs(range.startDate)
                    .format('MMMM, DD, YYYY')
                : '...'}
            </Text>
            <Text>
              <Text style={{ marginRight: 5, fontWeight: 'bold' }}>
                End Date:
              </Text>
              {range.endDate
                ? dayjs(range.endDate)
                    .format('MMMM, DD, YYYY')
                : '...'}
            </Text>
          </View> */}
          <View>
            <Text>
              {date ? (
                dayjs(date).format('MMMM, DD, YYYY')
                ):(
                '...'
                )}
            </Text>
          </View>
        </View>
        <View style={styles.buttons}>
          <ActiveButton 
            TextValue='Cancel'
            Background='red'
            Function={handleCancel}
            ButtonWidth={65}
            />
          <ActiveButton 
            TextValue='OK'
            Function={handleSaveDates}
            ButtonWidth={65}
            />
        </View>

      </View>

    </View> 
    
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    flex: 1,
    borderRadius: 8,
    padding: 12
  },

  header: {
    flex: .25,
  },

  calendarContainer: {
    flex: 2,
    // justifyContent: 'center',
    alignSelf: 'center',
    // width: Platform.OS === 'web' ? '75%' : undefined,
    

  },
  bottomSection:{
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-between'
  },
  dates:{
    flex: 1,
    // borderWidth: 1,
    
  },
  buttons:{
    // borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // paddingHorizontal: 10
  },
})