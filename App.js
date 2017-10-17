import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import { TabNavigator, StackNavigator} from 'react-navigation';
import { Constants } from 'expo';
import DeckListView from './components/DeckListView';


const Tabs = TabNavigator({
  DeckListView:{
    screen: DeckListView,
    navigationOptions: {
      tabBarLabel: 'Decks',
    }
  },
})

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.StatusBar} />
        <Tabs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    paddingTop: 20,
  },
})