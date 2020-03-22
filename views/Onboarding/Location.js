import React, { useEffect, useState } from 'react';
import {
  Button, Platform, StyleSheet, Text, View,
} from 'react-native';
import Constants from 'expo-constants';
import * as ExpoLocation from 'expo-location';
import * as Permissions from 'expo-permissions';


export default function Location({ navigateToNext = () => {} }) {
  const [error, setError] = useState(undefined);
  const [location, setLocation] = useState(undefined);

  // This tests the location permission and gets the current position.
  // Use this method to track the location in the background: https://docs.expo.io/versions/latest/sdk/location/#locationstartlocationupdatesasynctaskname-options
  const getLocationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      setError('Permission to access location was denied');
    }

    const currentPosition = await ExpoLocation.getCurrentPositionAsync({});
    setLocation(currentPosition);
    navigateToNext();
  };

  useEffect(() => {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      setError('Oops, this will not work on Sketch in an Android emulator. Try it on your device!');
    } else {
      getLocationAsync();
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {
              !location
              && (
              <>
                <Text style={styles.title}>Einige Funktionen sind ohne vollständigen Standortzugriff nicht verfügbar.</Text>
                <Text style={styles.title}>Erlauben Sie den Standortzugriff, um die App in vollem Umfang nutzen können.</Text>
                <Button style={styles.button} title="Standortzugriff erlauben" />
              </>
              )
            }
        {
              location
              && <Text style={styles.title}>Standortzugriff erlaubt 👍</Text>
            }
        {
              error
              && <Text style={styles.title}>{error}</Text>
            }
      </View>
      <View style={styles.actions}>
        <Button style={styles.button} title="Zurück" />
        <Button style={styles.button} title="Weiter" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    margin: 20,
  },
});
