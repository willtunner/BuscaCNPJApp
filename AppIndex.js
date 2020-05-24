import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Slider } from 'react-native';
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';

const gray = '#91A1BD';



export default function App() {
  const NeuMorph = ({ children, size, style }) => {
    return (
      <View style={styles.topShadow}>
        <View style={styles.bottomShadow}>
          <View
            style={[
              styles.inner,
              { width: size || 40, height: size || 40, borderRadius: size / 2 || 40 / 2 },
              style
            ]}
          >
            {children}
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ alignSelf: 'stretch' }}>
        <View style={{ marginHorizontal: 32, marginTop: 32 }}>
          <View style={styles.topContainer}>

            <NeuMorph>
              <AntDesign name="arrowleft" size={35} color={gray} />
            </NeuMorph>

            <View>
              <Text style={styles.playing} size={35} color={gray}>ESCUTE AGORA</Text>
            </View>

            <NeuMorph>
              <Entypo name="menu" size={35} color={gray} />
            </NeuMorph>
          </View>

          <View style={styles.songContainer}>
            <NeuMorph size={300}>
              <Image source={require("./assets/logo.jpg")} style={styles.songArt} />
            </NeuMorph>
          </View>

          <View style={styles.songArtContainer}>
            <Text style={styles.title}>Lost it</Text>
            <Text style={styles.artist}>Flume ft. Vic Mensa</Text>
          </View>

          <View style={styles.trackContainer}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={styles.time}>1:21</Text>
              <Text style={styles.time}>3:19</Text>
            </View>

            <Slider
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#8AAAFF"
              maximumTrackTintColor="#DAE6F4"
              thumbTintColor="#7B9BFF"
            />
          </View>

          <View style={styles.controlsContainer}>

            <NeuMorph size={80}>
              <Ionicons name="ios-rewind" size={10} color={gray} />
            </NeuMorph>

            <NeuMorph size={80} style={{ backgroundColor: "#8AAAFF", borderColor: "#8AAAFF" }}>
              <Ionicons name="ios-pause" size={10} color="#FFFFFF" />
            </NeuMorph>

            <NeuMorph size={80}>
              <Ionicons name="ios-fastforward" size={10} color={gray} />
            </NeuMorph>

          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE9FD',
    alignItems: 'center',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inner: {
    backgroundColor: "#DEE9F7",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#E2ECFD",
    borderWidth: 1,
  },
  topShadow: {
    shadowOffset: {
      width: -6,
      height: -6,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: '#FBFFFF',
  },
  bottomShadow: {
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: "#B7C4DD",
  },
  playing: {
    color: gray,
    fontWeight: "800",
  },
  songArtContainer: {
    marginVertical: 10,
    alignItems: "center",
    //marginTop: 10
  },
  songArt: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: "#D7E1F3",
    borderWidth: 10
  },
  songContainer: {
    alignItems: 'center',
    margin: -50
  },
  title: {
    fontSize: 30,
    color: "#6C7A93",
    fontWeight: "600"
  },
  artist: {
    fontSize: 14,
    margin: 6,
    color: gray,
    fontWeight: "500"
  },
  trackContainer: {
    marginTop: 32,
    marginBottom: 64
  },
  time: {
    fontSize: 10,
    color: gray,
    fontWeight: "700"
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: "space-around"
  }
});
