import React, { Component } from "react";
import { View } from "react-native";
import { Subheading, Paragraph, Caption } from 'react-native-paper';
import Layer from '../constants/Layer';

export default class CardSummary extends Component {
    render() {
            return (
                <View style={Layer.sectionHead}>
                    <Subheading>{this.props.sectionHeader ? this.props.sectionHeader : "sectionHeader"}</Subheading>
                    <Caption>{this.props.sectionCaption ? this.props.sectionCaption : "sectionCaption"}</Caption>
                </View>
            );
    }
}
