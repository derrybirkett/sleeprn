import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Surface, Chip } from 'react-native-paper';
import PageHeader from "../components/PageHeader";
import CardSummary from "../components/CardSummary";
import Colors from '../constants/Colors';
import Type from '../constants/Type';
import Space from '../constants/Space';

export default class CalendarScreen extends React.Component {
  static navigationOptions = {
    //header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

            <PageHeader
                style={styles.pageHeader}
                pageHeaderTitle="Sleep Calendar."
                pageHeaderDescription="Navigate your Sleep Journal." />

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutralWhite,
    padding: Space.sizeMedium
  }
});
