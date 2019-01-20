import React, { Component } from "react";
import { View } from "react-native";
import { Subheading, Paragraph, Caption } from 'react-native-paper';
import Layer from '../constants/Layer';
import Colors from '../constants/Colors';
import Type from '../constants/Type';
import Space from '../constants/Space';

export default class CardSummary extends Component {
    render() {
            return (
                <View style={[Layer.sectionHead, Layer.sectionPush]}>
                    <Subheading>{this.props.sectionHeader ? this.props.sectionHeader : "sectionHeader"}</Subheading>
                    <Caption>{this.props.sectionCaption ? this.props.sectionCaption : "sectionCaption"}</Caption>
                </View>
            );
    }
}
