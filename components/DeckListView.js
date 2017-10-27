import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {getDecks, addCardToDeck} from '../utils/api';
import DeckListItem from '../components/DeckListItem';
import {setDecks} from '../actions/index';
import {connect} from 'react-redux';
import _ from 'lodash';

class DeckListView extends Component {
  componentDidMount() {
   
      getDecks().then(decks => {
        this.props.setDecks(decks);
      });

     }
    
  

  render() {
    const decks = JSON.parse(this.props.decks|| null) || {};
    const titles = Object.keys(decks || {});
  


    if (!this.props.decks) {
      return (
        <View>
          <Text>App loading</Text>
          <DeckListItem
            title={'Sample Title'}
            numOfCards={5}
            navigation={this.props.navigation}
          />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        {titles.map(i =>(
        <DeckListItem key={i} title={i} numOfCards={decks[i].questions.length} navigation={this.props.navigation}/>
    	))}
      </View>
    );
  }
}

mapStateToProps = state => {
  return {decks: state.decks};
};

const styles = StyleSheet.create({
  container: {
  	flex: 1,
  	},
  })

export default connect(mapStateToProps, {setDecks})(DeckListView);


