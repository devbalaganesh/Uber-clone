import React from 'react';
import MapView, { PROVIDER_DEFAULT } from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';

export default function Map() {
  return (
    <View style={styles.container}>
      <MapView 
        provider={PROVIDER_DEFAULT} 
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
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
