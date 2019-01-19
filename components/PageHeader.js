import React, { Component } from "react";
//import Button151 from "./button151";
import { View, StyleSheet, Text } from "react-native";

export default class PageHeader extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 36,
    height: 102
  };
  render() {
    return (
      <View style={[this.props.style]}>

        <Text style={styles.pageHeaderTitle}>
          {this.props.pageHeaderTitle ? this.props.pageHeaderTitle : "Dashboard"}
        </Text>
        <Text style={styles.pageHeaderDescription}>
          {this.props.pageHeaderDescription ? this.props.pageHeaderDescription : "Review your sleep quality."}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  pageHeaderTitle: {
    top: 56,
    left: "8.93%",
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 24
  },
  pageHeaderDescription: {
    top: 87,
    left: "8.93%",
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 16
  }
});
