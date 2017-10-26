import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Platform } from 'react-native';



export default class DeckListItem extends Component {

    render() {
        return (
            <TouchableOpacity key={this.props.title}
                onPress={() => this.props.navigation.navigate(
                            'IndividualDeckView',
                            { title: this.props.title }
                        )}>
                <View>
                    <Text>{this.props.title}</Text>
                    <Text>{`${this.props.numOfCards} cards`}</Text>
                </View>
            </TouchableOpacity>
        )
    }
};