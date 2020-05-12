import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Global from './components/Global';
import Indo from './components/Indo';
import Provinsi from './components/Provinsi';
class App extends Component {
  render() {
    return(
      <ImageBackground source={require('./assets/background.png')} style={{ width: '100%', height: '100%' }}>
      <View>
      <View style={{ flex: 1, marginTop: 65 }}>
          <Text style={{ alignSelf: 'center', fontSize: 25, fontWeight:'bold', color: 'black' }}>Data Covid 19 Global & Indonesia</Text>
           </View>
        <Global></Global>
        <Indo></Indo>
        <Provinsi></Provinsi>
      </View>
      </ImageBackground>
  
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;