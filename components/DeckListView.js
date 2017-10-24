import React, {Component} from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import {getDecks} from '../utils/api'
import DeckListItem from '../components/DeckListItem'
import { setDecks } from '../actions/index'
import { connect } from 'react-redux'
import _ from 'lodash'

class DeckListView extends Component{

	componentDidMount(){
		getDecks().then((decks) => this.props.setDecks(decks))

	}


	render(){
		const {decks} = this.props
		const decksArray = _.values(decks)
		
		if(!this.props.decks){
			return(
				<View>
					<Text>App loading</Text>
					<DeckListItem title={"Sample Title"} numOfCards={5} navigation={this.props.navigation}/>
				</View>)
		}
		return(
			<View>
				<Text>{decks}</Text>
				<TouchableOpacity
				 onPress={() => this.props.navigation.navigate(
              		'IndividualDeckView',	
           	 		)}>
				 <Text> Click me </Text>
				</TouchableOpacity>

				<DeckListItem title={"Sample Title"} numOfCards={5} />
			</View>
			)
	}

}

mapStateToProps = (state) => {
	return {decks: state.decks}
}

export default connect(mapStateToProps, {setDecks})(DeckListView)


