import React, {Component} from 'react'
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native'
import {connect} from 'react-redux';
import {getDeck} from '../utils/api';
import FlipCard from 'react-native-flip-card'
import { setLocalNotification, clearLocalNotification } from '../utils/notifications'


class QuizView extends Component{
  static navigationOptions = ({ navigation }) => {

    return {
      title: navigation.state.params.title
    }
  }

  state={

    currentQuestion: 1,
    correctAnswers: 0,
    showAnswer: false

  }

  correctAnswer = () =>{
     this.setState({
              correctAnswers: this.state.correctAnswers + 1,
              currentQuestion: this.state.currentQuestion + 1,
              showAnswer: false
            })
  }

  incorrectAnswer = () =>{
    this.setState({
              currentQuestion: this.state.currentQuestion + 1,
              showAnswer: false
            })
  }




	render(){

  const numOfQuestions = this.props.deck.questions.length

  if(this.state.currentQuestion <= numOfQuestions){
		return(
			<View style={styles.container}>
      <View>
        <Text>How many questions: {numOfQuestions}</Text>
				<Text>You are on question number: {this.state.currentQuestion}</Text>
        <Text>You have answered {this.state.correctAnswers} questions correctly </Text>
      </View>
      {!this.state.showAnswer
        ?
        <View style={styles.answerGroup}>
				<Text style={styles.questionText}>{this.props.deck.questions[this.state.currentQuestion-1].question} </Text>
        <TouchableOpacity
            onPress={()=>this.setState({
              showAnswer: true
            })}
        >
          <Text style={styles.Answer}>Answer</Text>
        </TouchableOpacity>
				<TouchableOpacity style={styles.CorrectBtn}
          onPress={()=>this.correctAnswer()
           
        }
        >
					<Text style={styles.CorrectText}>Correct</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.IncorrectBtn}
         onPress={()=>this.incorrectAnswer()
            
        }
        >
					<Text style={styles.IncorrectText}>Incorrect</Text>
				</TouchableOpacity>

        </View>

         :
         <View style={styles.answerGroup}>

          <Text style={styles.questionText}>{this.props.deck.questions[this.state.currentQuestion-1].answer} </Text>
        <TouchableOpacity
         onPress={()=>this.setState({
              showAnswer: false
            })}
        >
          <Text style={styles.Answer}>Question</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CorrectBtn}
         onPress={()=>this.correctAnswer()}
         >
          <Text style={styles.CorrectText}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.IncorrectBtn}
        onPress={()=>this.incorrectAnswer()}
        >
          <Text style={styles.IncorrectText}>Incorrect</Text>
        </TouchableOpacity>

        </View>
         

       }


  
			</View>

			)
	   }
    else{
            clearLocalNotification()
                .then(setLocalNotification())
      return(
      <View style={styles.answerGroup}>
        <Text>You got {this.state.correctAnswers} correct answers out of {numOfQuestions} questions</Text>
         <TouchableOpacity style={styles.restart}
         onPress={()=>this.props.navigation.navigate('QuizView',
         {title: this.props.navigation.state.params.title})}
         >
          <Text style={styles.blackText}>Restart Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.returnToDeck}
        onPress={()=>this.props.navigation.navigate('IndividualDeckView',
         {title: this.props.navigation.state.params.title})}
        >
          <Text style={styles.CorrectText}>Return to Deck</Text>
        </TouchableOpacity>

      </View>
      )
    }
  }

}

mapStateToProps = (state, ownProps) =>{
    const { title } = ownProps.navigation.state.params;

    return {
 
        deck: state[title]

    }
}




export default connect(mapStateToProps)(QuizView);


const styles = StyleSheet.create({
  container: {
  	flex: 1,
  },
  answerGroup: {
    flex: 1,
    justifyContent: "center"
  },
  questionText: {
    alignItems: "center",
    fontSize: 20,
    fontWeight: "bold"

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
  blackText:{
    color: '#000000',
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
  Answer:{
  	color: '#FF0000',
    fontSize: 16
  },
  TextInput:{
  	borderRadius: 5,
  	height: 40,
  },
   restart:{
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
  returnToDeck:{
    backgroundColor: '#000000',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

