import React, {Component} from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import {getDecks} from '../utils/api'
import DeckListItem from '../components/DeckListItem'
import { setDecks } from '../actions/index'
import { connect } from 'react-redux'

class DeckListView extends Component{

	componentDidMount(){
		getDecks().then((decks) => this.props.setDecks(decks))

	}


	render(){

		if(!this.props.decks){
			return(
				<View>
					<Text>App loading</Text>
					<DeckListItem title={"Euclinden"} numOfCards={5} navigation={this.props.navigation}/>
				</View>)
		}
		return(
			<View>
				<Text>{this.props.decks}</Text>
				<TouchableOpacity
				 onPress={() => this.props.navigation.navigate(
              		'IndividualDeckView',	
           	 		)}>
				 <Text> Click me </Text>
				</TouchableOpacity>

				<DeckListItem title={"Euclinden"} numOfCards={5} />
			</View>
			)
	}

}

mapStateToProps = (state) => {
	return {decks: state.decks}
}

export default connect(mapStateToProps, {setDecks})(DeckListView)


