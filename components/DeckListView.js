import React, {Component} from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import {getDecks} from '../utils/api'

export default class DeckListView extends Component{

	componentDidMount(){
		const decks = getDecks()
		this.setState({decks})
		alert("state", this.state)

	}

	state={

	}

	render(){
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


