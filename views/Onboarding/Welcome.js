import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class Welcome extends Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
              <Text style={styles.title}>Titel</Text>
            </View>
            <View style={styles.actions}>
              <Button style={styles.button} title="Zurück" />
              <Button style={styles.button} title="Weiter" />
            </View>
        </View>
    );
  }
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
    margin: '2em'
  }
});
