import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Surface, Chip, List, Subheading, Paragraph,Caption } from 'react-native-paper';
import { Dropdown } from 'react-native-material-dropdown';
// My Components
import PageHeader from "../components/PageHeader";
import CardSummary from "../components/CardSummary";

// My StyleGuide
import Colors from '../constants/Colors';
import Type from '../constants/Type';
import Space from '../constants/Space';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    //header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

            <PageHeader
                style={styles.pageHeader}
                pageHeaderTitle="Dashboard"
                pageHeaderDescription="Review your sleep quality." />

            <View style={styles.stackPush}>
                <List.Accordion
                  title="Last Week"
                  description="Select a timeframe"
                  left={props => <List.Icon {...props} icon="timer" />}
                >
                  <List.Item title="This Week" />
                  <List.Item title="This Month" />
                  <List.Item title="This Year" />
                </List.Accordion>
            </View>

            <CardSummary
                cardStyle={styles.panelLight}
                cardTitle="Overall Sleep Quality"
                cardStat="Low"
                cardDescription="Movement over the average, regular disturbances and low deep sleep">
            </CardSummary>

            <View style={styles.stackPush}>
                <Chip icon="warning">Your sleep quality is trending down</Chip>
            </View>

            <View style={[styles.card, styles.colorLight]}>
                <Subheading>Last Weeks Sleep Report</Subheading>
                <Caption>Movement over the average, regular disturbances and low deep sleep</Caption>
            </View>

            <CardSummary
                cardStyle={styles.panelLight}
                cardTitle="Average Sleep Duration"
                cardStat="6.5hrs"
                cardDescription="15% below recommended amount.">
            </CardSummary>

            <CardSummary
                cardStyle={styles.panelLight}
                cardTitle="Sleep Disturbances"
                cardStat="Frequent"
                cardDescription="An average of 8 disturbances from deep sleep per night.">
            </CardSummary>

            <View style={[styles.card, styles.colorLight]}>
                <Subheading>Your pre-bedtime activities</Subheading>
                <Paragraph>Most pre-bedtime activies from last week were detrimental to your sleep quality.</Paragraph>
            </View>

            <List.Item
                title="Using Phone/Tablet"
                description="3 times"
                left={props => <List.Icon {...props} icon="devices" />}
                right={props => <List.Icon {...props} icon="thumb-down" />}
              />
            <List.Item
              title="Watching TV"
              description="3 times"
              left={props => <List.Icon {...props} icon="tv" />}
              right={props => <List.Icon {...props} icon="thumb-down" />}
            />
            <List.Item
                title="Reading"
                description="2 times"
                left={props => <List.Icon {...props} icon="book" />}
                right={props => <List.Icon {...props} icon="thumb-up" />}
              />

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
  },
  stackPush: {
    marginTop: Space.stackPush
  },
  panelLight: {
      backgroundColor: Colors.colorWhite,
      color: Type.textDark,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: Colors.colorDark
  },
  panelDark: {
      backgroundColor: Colors.tintColor,
      color: Type.textWhite,
  },
  textP: {
      fontSize: Type.textBaseSize,
      lineHeight: Type.textBaseSize,
      color: Type.textDark,
      flexDirection: 'row',
  },
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
