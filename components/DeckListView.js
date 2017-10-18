import React, {Component} from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default class DeckListView extends Component{
	render(){
		return(
			<View>
				<Text>Hi Everyone its me</Text>
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


