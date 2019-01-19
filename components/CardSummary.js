import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Surface, Chip, List, Headline, Subheading, Paragraph, Caption } from 'react-native-paper';
import Colors from '../constants/Colors';
import Type from '../constants/Type';
import Space from '../constants/Space';

export default class CardSummary extends Component {
    render() {
            return (
                <View style={[styles.card, this.props.cardStyle]}>
                    <Subheading>
                      {this.props.cardTitle ? this.props.cardTitle : "cardTitle"}
                    </Subheading>
                    <Headline>
                        {this.props.cardStat ? this.props.cardStat : "cardStat"}
                    </Headline>
                    <Paragraph>
                        {this.props.cardDescription ? this.props.cardDescription : "cardDescription"}
                    </Paragraph>
                    <Chip
                        icon="brightness-3"
                        type="outline"
                        onPress={() => console.log('Pressed')}>
                        Open Last Week's Sleep Journal
                    </Chip>
                </View>
            );
    }
}

const styles = StyleSheet.create({
    card: {
        marginTop: Space.sizeLarge,
        padding: Space.sizeLarge,
        borderRadius: Space.sizeMedium,
    }
});
