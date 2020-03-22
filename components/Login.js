import React, {setState, useState} from 'react';
import { StatusBar, Dimensions, StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

export default function Login() {
  StatusBar.setBarStyle('dark-content', true);

  const [letsgo, setLetsGo] = useState(false);
  const [mail, onChangeMail] = useState('E-Mail');
  const [pass, onChangePass] = useState('Passwort');

  const setLogin = ({ mail, pass }) => {
    alert(`Die Mail ${mail} mit dem Passwort ${pass} wurde registriert!`);
  };

  return(
    <View style={{flex: 1, backgroundColor: '#E5E5E5'}}>
      {!letsgo && (
      <View style={styles.container}>
        <View style={styles.containerText}>
          <Text style={styles.headlineSmall}>Worum geht es?</Text>
          <Text style={styles.paragraphText}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</Text>
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.button} onPress={() => setLetsGo(true)}>
            <Text style={styles.buttonText}>Los gehts</Text>
          </TouchableOpacity>
          <Text style={styles.paragraphTracking}>Tracking Code</Text>
        </View>
      </View>
      )}
      {letsgo && (
      <View style={styles.container}>
        <View style={styles.containerText}>
          <Text style={styles.headlineBig}>Willkommen bei revealVirus</Text>
            <TextInput style={styles.textInput} name="mail" onChangeText={mail => onChangeMail(mail)} value={mail} placeholder="E-Mail" />
            <Text style={{color: '#000'}}>{mail, pass, onChangeMail, onChangePass}</Text>
            <TextInput secureTextEntry={true} style={styles.textInput} name="pass" onChangeText={pass => onChangePass(pass)} value={pass} placeholder="Password" />
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.button} onPress={() => setLogin(true)}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.paragraphTracking}>Account erstellen</Text>
        </View>
      </View>
      )}
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    marginTop: 120,
    flex: 1,
    alignItems: 'center',
  },
  containerText: {
    flex: 0.75,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%'
  },
  containerButton: {
    flex: 0.25,
    width: '100%',
    padding: 30
  },
  headlineSmall: {
    textTransform: 'uppercase',
    fontWeight: '500',
    fontSize: 16,
    alignSelf: 'stretch',
    textAlign: 'center'
  },
  headlineBig: {
    fontWeight: '600',
    paddingLeft: '20%',
    paddingRight: '20%',
    fontSize: 32,
    alignSelf: 'stretch',
    textAlign: 'center',
    marginBottom: 40
  },
  paragraphText: {
    padding: 30,
    fontSize: 14
  },
  scanner: {
    height: 300,
    width: 300,
    marginBottom: 20
  },
  button: {
    width: '100%',
    borderRadius: 6,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 100,
    paddingRight: 100,
    backgroundColor: '#00DC9A',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: {
      width: 8,
      height: 20
    },
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600'
  },
  paragraphTracking: {
    textAlign: 'center',
    marginTop: 20
  },
  textInput: {
    fontWeight: '600',
    color: '#9098B1',
    alignSelf: 'stretch',
    height: 50,
    marginTop: 20,
    textAlign: 'left',
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 6,
    marginLeft: 30,
    marginRight: 30
  }
});