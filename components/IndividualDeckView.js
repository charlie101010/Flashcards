import React, {Component} from 'react'
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native'


export default class IndividualDeckView extends Component{
	static navigationOptions = ({ navigation }) => {
   

    return {
      title: navigation.state.params.title
    }
  }

	render(){
		return(
			
			<View style={styles.container}>
				<Text> {this.props.navigation.state.params.title} </Text>
				<Text> Number of Cards</Text>
				<TouchableOpacity style={styles.AddCardBtn}
				 onPress={() => this.props.navigation.navigate(
              		'NewQuestionView',	
           	 		)}
				>
					<Text style={styles.AddCardText}>Add Card</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.StartQuizBtn}
				 onPress={() => this.props.navigation.navigate(
              		'QuizView',	
           	 		)}>
					<Text style={styles.StartQuizText}>Start Quiz</Text>
				</TouchableOpacity>
			</View>

			)
	}


}


const styles = StyleSheet.create({
  container: {
  	flex: 1,
    justifyContent: "center",
  },
   StartQuizBtn: {
    backgroundColor: '#000000',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  StartQuizText:{
  	color: '#ffffff',
  },
  AddCardBtn: {
    backgroundColor: '#ffffff',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderWidth: 3,
    borderColor: '#000000',
    borderStyle: 'solid',
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  AddCardText:{
  	color: '#000000',
  },
  TextInput:{
  	borderRadius: 5,
  	height: 40,
  }
})