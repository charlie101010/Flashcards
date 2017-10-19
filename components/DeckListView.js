import React, {Component} from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import {getDecks} from '../utils/api'

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
			</View>
			)
	}

}


