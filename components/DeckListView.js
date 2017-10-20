import React, {Component} from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import {getDecks} from '../utils/api'
import DeckListItem from '../components/DeckListItem'

export default class DeckListView extends Component{

	componentDidMount(){
		const decks = getDecks()
		alert("decks", decks)
		this.setState({decks})
		

	}

	state={

	}

	render(){
		if(!this.state.decks){
			return(
				<View>
					<Text>App is loading</Text>
					<DeckListItem title={"Euclinden"} numOfCards={5} navigation={this.props.navigation}/>
				</View>)
		}
		return(
			<View>
				<Text>{this.state.decks}</Text>
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


