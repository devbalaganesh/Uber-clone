import React from 'react';
import MapView, { PROVIDER_DEFAULT } from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';
import { useLocationStore } from './store';
import { calculateRegion } from '@/lib/map';

 

export default function Map() {
  const {
    userLongitude,
    userLatitude,
    destinationLatitude,
    destinationLongitude,
  }=useLocationStore();
  const region = calculateRegion({
      userLongitude,
    userLatitude,
    destinationLatitude,
    destinationLongitude,
  })
  return (
    <View style={styles.container}>
      <MapView 
        provider={PROVIDER_DEFAULT} 
        style={styles.map}
        initialRegion={region}
          
       
      />
      <Text style={{ marginTop: 10 }}>Map</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  map: {
    width: '100%',
    height: '80%',
    borderRadius: 20,
  },
});
