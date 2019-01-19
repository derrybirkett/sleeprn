import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import Colors from '../constants/Colors';
import Type from '../constants/Type';
import Space from '../constants/Space';

export default class CardSummary extends Component {
    render() {
            return (
                <View style={[styles.card, this.props.cardStyle]}>
                  <Text style={[styles.textP, ,styles.textBold]}>
                    {this.props.cardTitle ? this.props.cardTitle : "cardTitle"}
                  </Text>
                  <Text style={[styles.textH3]}>
                    {this.props.cardStat ? this.props.cardStat : "cardStat"}
                  </Text>
                  <Text style={[styles.textP]}>
                    {this.props.cardDescription ? this.props.cardDescription : "cardDescription"}
                  </Text>
                </View>
            );
    }
}

const styles = StyleSheet.create({
    card: {
        marginTop: Space.sizeLarge,
        padding: Space.sizeLarge,
        borderRadius: Space.sizeMedium,
    },
    textH3: {
      fontSize: 28,
      lineHeight: 54,
    }
});
