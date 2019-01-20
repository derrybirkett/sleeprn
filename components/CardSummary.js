import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Surface, Chip, List, Headline, Subheading, Paragraph, Caption } from 'react-native-paper';
import Colors from '../constants/Colors';
import Type from '../constants/Type';
import Space from '../constants/Space';
import Layer from '../constants/Layer';

export default class CardSummary extends Component {
    render() {
            return (
                <View style={[Layer.card, this.props.cardStyle]}>
                    <Subheading>
                      {this.props.cardTitle ? this.props.cardTitle : "cardTitle"}
                    </Subheading>
                    <Headline>
                        {this.props.cardStat ? this.props.cardStat : "cardStat"}
                    </Headline>
                    <Paragraph>
                        {this.props.cardDescription ? this.props.cardDescription : "cardDescription"}
                    </Paragraph>
                </View>
            );
    }
}
