import React, {Component} from 'react'
import { View, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native'
import {saveDeckTitle} from '../utils/api'
import {newDeck} from '../actions/index';
import {connect} from 'react-redux';

class NewDeckView extends Component{
	state={
		title:''
	}


   handleSubmit = title => {
    saveDeckTitle(title).then(() => {
      this.props.newDeck({ [this.state.title] : {title : this.state.title, questions : []} });
      this.props.navigation.navigate('IndividualDeckView',
      	{ title: this.state.title,
          numOfCards: 0 },
                        );
      this.setState(() => ({
        title: '',
      }));
    });
  };
	

	render(){
		return(
			<KeyboardAvoidingView style={styles.container} behavior="padding">
				<Text>What is the title of your new deck</Text>
				<TextInput style={styles.TextInput}
					onChangeText={(text) => this.setState({title: text})}
				/>
				<TouchableOpacity style={styles.SubmitBtn}
				onPress={()=>this.handleSubmit(this.state.title)}>
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


export default connect(null, {newDeck})(NewDeckView);