import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Appbar, Title, Headline, Subheading, Paragraph, Caption } from 'react-native-paper';

export default class PageHeader extends Component {
  render() {
    return (
        <Appbar.Header style={styles.appBar}>
            <Appbar.Action icon="menu" onPress={this._onSearch} />
            <Appbar.Content
              title="Dashboard"
              subtitle="View it all"
            />
            <Appbar.Action icon="more-vert" onPress={this._onMore} />
        </Appbar.Header>
    );
  }
}

const styles = StyleSheet.create({
    appBar: {
        backgroundColor: 'white',
    }
});
