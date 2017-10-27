import React, {Component} from 'react'
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native'
import {connect} from 'react-redux';
import {getDeck} from '../utils/api';


class QuizView extends Component{
  static navigationOptions = ({ navigation }) => {

    return {
      title: navigation.state.params.title
    }
  }

  state={

    currentQuestion: 1,
    correctAnswers: 0

  }


	render(){
		return(
			<View style={styles.container}>
				<Text> {this.state.currentQuestion}</Text>
				<Text>  </Text>
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

mapStateToProps = (state, ownProps) =>{
    const { title } = ownProps.navigation.state.params;
    alert(JSON.stringify(state.decks))

    return {
        deck: state.decks[title]
    }
}




export default connect(mapStateToProps)(QuizView);


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

