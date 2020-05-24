import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    };
  }

  componentDidMount() {
    //return fetch('https://www.receitaws.com.br/v1/cnpj/14660263000131')
    return fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.movies
        })
      })
      .catch((error) =>{
        console.log(error)
      });
  }


  render() {
    if(this.state.isLoading){
      return (
        <View style={styles.container}>
          <ActivityIndicator/>
        </View>
      )
    } else {

        let movies = this.state.dataSource.map((val, key) =>{
          return <View key={key} style={styles.item}>
            <Text>{val.title}</Text>
            <Text>{val.releaseYear}</Text>
          </View>
        });
        return (
          <View style={styles.container}>
            {movies}
          </View>
        );
      }
    }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  item: {

  }
});

export default App;

