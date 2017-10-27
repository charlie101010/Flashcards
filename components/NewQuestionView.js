import React, {Component} from 'react'
import { View, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native'
import {addCardToDeck} from '../utils/api'

export default class NewQuestionView extends Component{
   state={
    question: '',
    answer: ''
  }

  handleSubmit = () =>{
    addCardToDeck(this.props.navigation.state.params.title, {question: this.state.question, answer: this.state.answer}).then(
     this.props.navigation.navigate(
            'IndividualDeckView',
            {title: this.props.navigation.state.params.title}
        ))
  }

	render(){
		return(
			<KeyboardAvoidingView style={styles.container} behavior="padding">
				<Text>Enter your new card information below</Text>
				<TextInput style={styles.TextInput} 
          onChangeText={(text) => this.setState({question: text})}
          placeholder="Enter Your Question"/>
        <TextInput style={styles.TextInput} 
          onChangeText={(text) => this.setState({answer: text})}
          placeholder="Enter Your Answer"/>
				<TouchableOpacity style={styles.SubmitBtn}>
					<Text style={styles.SubmitText} onPress={()=>this.handleSubmit()}>Submit</Text>
				</TouchableOpacity>
			</KeyboardAvoidingView>
			)
	}


}


const styles = StyleSheet.create({
  container: {
  	flex: 1,
    justifyContent: "center",
  },
   SubmitBtn: {
    backgroundColor: '#000000',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SubmitText:{
  	color: '#ffffff',
  },
  TextInput:{
  	borderRadius: 5,
  	height: 40,
  }
})