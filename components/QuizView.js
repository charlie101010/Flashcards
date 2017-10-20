import React, {Component} from 'react'
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native'


export default class QuizView extends Component{
  static navigationOptions = ({ navigation }) => {
    // const { entryId } = navigation.state.params

    return {
      title: 'Deck Title'
    }
  }


	render(){
		return(
			<View style={styles.container}>
				<Text> Question Number</Text>
				<Text> Question </Text>
        <TouchableOpacity>
          <Text style={styles.IncorrectText}>Correct</Text>
        </TouchableOpacity>
				<TouchableOpacity style={styles.CorrectBtn}>
					<Text style={styles.CorrectText}>Correct</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.IncorrectBtn}>
					<Text style={styles.IncorrectText}>Incorrect</Text>
				</TouchableOpacity>
  
			</View>

			)
	 }

}


const styles = StyleSheet.create({
  container: {
  	flex: 1,
    justifyContent: 'center',
  },
   CorrectBtn: {
    backgroundColor: '#008000',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CorrectText:{
  	color: '#ffffff',
  },
  IncorrectBtn: {
    backgroundColor: '#FF0000',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  IncorrectText:{
  	color: '#ffffff',
  },
  TextInput:{
  	borderRadius: 5,
  	height: 40,
  },
})