import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import {removeDeck} from '../utils/api'



export default class DeckListItem extends Component {

    deleteDeck =() =>{
        removeDeck(this.props.title)
        this.props.navigation.navigate(
            'Home'
        )
    }

    render() {
        return (
            <View style={styles.container}>
            <TouchableOpacity key={this.props.title}
                onPress={() => this.props.navigation.navigate(
                            'IndividualDeckView',
                            { title: this.props.title,
                            numOfCards: this.props.numOfCards },
                        )}>
                <View>
                    <Text>{this.props.title}</Text>
                    <Text>{`${this.props.numOfCards} cards`}</Text>
                </View>
            </TouchableOpacity>
             <TouchableOpacity 
                onPress={() => this.deleteDeck()}>
                <View>
                    <Text>Delete</Text>
                </View>
            </TouchableOpacity>
            </View>
        )
    }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 2
     },
  })