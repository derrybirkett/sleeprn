import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

export default class PageHeader extends Component {
  render() {
    return (
      <View style={[this.props.style]}>
        <Text style={styles.pageHeaderTitle}>
          {this.props.pageHeaderTitle ? this.props.pageHeaderTitle : "Page Title"}
        </Text>
        <Text style={styles.pageHeaderDescription}>
          {this.props.pageHeaderDescription ? this.props.pageHeaderDescription : "Page Description."}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pageHeaderTitle: {
    fontSize: 24
  },
  pageHeaderDescription: {
    fontSize: 16
  }
});
