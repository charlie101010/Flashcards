import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import { TabNavigator, StackNavigator} from 'react-navigation';
import { Constants } from 'expo';
import { Ionicons } from '@expo/vector-icons'
import DeckListView from './components/DeckListView';
import NewDeckView from './components/NewDeckView';
import IndividualDeckView from './components/IndividualDeckView';
import QuizView from './components/QuizView';
import NewQuestionView from './components/NewQuestionView';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'


const Tabs = TabNavigator({
  DeckListView:{
    screen: DeckListView,
    navigationOptions: {
      tabBarLabel: 'Decks',
       tabBarIcon: ({ tintColor }) => <Ionicons name='ios-albums' size={30} color={tintColor} />
    }
  },
  NewDeckView:{
    screen: NewDeckView,
    navigationOptions: {
      tabBarLabel: 'Add a New Deck',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-add' size={30} color={tintColor} />
    }
  },
  //   IndividualDeckView:{
  //   screen: IndividualDeckView,
  //   navigationOptions: {
  //     tabBarLabel: 'Indy',
  //     tabBarIcon: ({ tintColor }) => <Ionicons name='ios-add' size={30} color={tintColor} />
  //   }
  // },
},
 {
  navigationOptions: {
    header: null
  },
}
)

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  IndividualDeckView: {
    screen: IndividualDeckView,
    navigationOptions: {
       headerTintColor: "#ffffff",
      headerStyle: {
        backgroundColor: '#000000',
      }
    }
  },
  QuizView: {
    screen: QuizView,
    navigationOptions: {
       headerTintColor: "#ffffff",
      headerStyle: {
        backgroundColor: '#000000',
      }
    }
  },
  NewQuestionView: {
    screen: NewQuestionView,
    navigationOptions: {
      headerTintColor: "#ffffff",
      title: "Add a New Question",
      alignItem: 'center',
      headerStyle: {
        backgroundColor: '#000000',
      }
    }
  },
})

export default class App extends Component {
  render() {
    return (
    <Provider store={createStore(reducer)}>
      <View style={{flex: 1}}>
        <View style={styles.statusBar} />
        <MainNavigator />
      </View>
    </Provider>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    height: Constants.statusBarHeight,
  },
})