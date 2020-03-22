import React, { useEffect, useState } from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import * as Permissions from 'expo-permissions';

async function askForPermission() {
    const permission = await Permissions.askAsync(
        Permissions.NOTIFICATIONS
    );
    if (permission.granted === true) {
        return true;
    }
    return false
}

const Notifications = () => {

    const [isGranted, setIsGranted] = useState(false);

    useEffect(() => {
        const getPermission = async () => {
            setIsGranted(await askForPermission());
        }
        getPermission();
    }, [])

    return (
      <View style={styles.container}>
          <View style={styles.content}>
              {!isGranted && <>
                <Text style={styles.title}>Wir möchten Infektionsketten unterbrechen und im Ernstfall schnell reagieren. Dazu würden wir Dir eine Push Nachricht schicken, sobald du Kontakt mit einer infizierten Person hattest.</Text>
                <Button style={styles.button} title="Benachrichtigungen aktivieren" />
              </>}
              {isGranted &&
              <Text style={styles.title}>Mitteilungen sind aktiviert 👍</Text>}
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
    alignItems: 'center'
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
    margin: 20
  }
});

export default Notifications;