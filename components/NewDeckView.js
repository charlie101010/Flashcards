import React, {Component} from 'react'
import { View, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native'

export default class NewDeckView extends Component{
	render(){
		return(
			<KeyboardAvoidingView style={styles.container} behavior="padding">
				<Text>What is the title of your new deck</Text>
				<TextInput style={styles.TextInput}/>
				<TouchableOpacity style={styles.SubmitBtn}>
					<Text style={styles.SubmitText}>Submit</Text>
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