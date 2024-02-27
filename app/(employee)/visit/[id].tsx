import { View, Text } from '@/components/Themed'
import { useGlobalSearchParams } from 'expo-router'

import dummyData from '@/dummydata.js'
import { useEffect, useState } from 'react';
import Boarding from './Boarding';
import HomeVisit from './HomeVisit';
import DogWalk from './DogWalk';

export default function EventDetails() {
  const { id } = useGlobalSearchParams();
  const [ eventData, setEventData ] = useState<RootObject | null>(null);

  // This will need to be changed to an API call
  const getData = () => {
    const data = dummyData.find((obj: RootObject)=> obj.id.toString() === id)
    if (data) {
      return data
    } else {
      return null
    }
  }

  useEffect(() => {
    setEventData(getData())
  },[ id ])


  if (eventData?.type === 'Boarding'){
    return <Boarding />
  } else if (eventData?.type === 'Home Visit') {
    return <HomeVisit />
  } else if ( eventData?.type === 'Dog Walk') {
    return <DogWalk />
  } else {
   return (
      <View>
      <Text>Event Details</Text>
      <Text>Event ID: {id}</Text>
      <Text>Event ID: {eventData?.id}</Text>
    </View>
  )
}
}

interface RootObject {
  id: number;
  createdOn: string;
  updatedOn: string;
  type: string;
  appointmentDate: string;
  appointmentTime: string;
  client: Client;
  employee: Client;
  pets: Pet[];
}

interface Pet {
  id: number;
  type: string;
  name: string;
  breed: string;
  color: string;
  age: number;
  weight: string;
  specialNeeds: SpecialNeeds;
  notes: string;
  indoorOnly: boolean;
  spayedNeutered: boolean;
  image_url: string;
}

interface SpecialNeeds {
  medical: boolean;
  dietary: boolean;
}

interface Client {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: Location;
  picture: Picture;
}

interface Picture {
  avatar_url: string;
  thumb_url: string;
}

interface Location {
  address: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;
}
