import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Slider } from 'react-native';
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';

//expo install expo-constants
import Constants from 'expo-constants';

const BACKGROUND = '#88B04B';

//cria um component reutilizavel Morph
const Morph = ({ children }) => {
  return <View style={styles.morhTop}>{children}</View >;
};

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Morph>
          <Text style={styles.neumorphism}>Neumophism UI 2</Text>
        </Morph>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    //alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  neumorphism: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  morhTop: {
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowColor: BACKGROUND,
  },
});
