import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Button, Surface, Chip, List, Subheading, Paragraph,Caption } from 'react-native-paper';

// My Components
import PageHeader from "../components/PageHeader";
import CardSummary from "../components/CardSummary";

// My StyleGuide
import Colors from '../constants/Colors';
import Type from '../constants/Type';
import Space from '../constants/Space';
import Layer from '../constants/Layer';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={{flex:1}}>

          <PageHeader
              style={styles.pageHeader}
              pageHeaderTitle="Dashboard"
              pageHeaderDescription="Review your sleep quality." />

        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

            <View style={Layer.stackPush, Layer.outline}>
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
                cardStyle={Layer.panelLight}
                cardTitle="Overall Sleep Quality"
                cardStat="Low"
                cardDescription="Movement over the average, regular disturbances and low deep sleep">
            </CardSummary>

            <View style={Layer.stackPush}>
                <Button style={[Layer.padSmall]} icon="book" mode="outlined" onPress={() => console.log('Pressed')}>
                    Open this Sleep Journal
                  </Button>
             </View>

            <View style={[Layer.sectionHeader, Layer.sectionPush, Layer.neutralLight]}>
                <Subheading>Last Weeks Sleep Report</Subheading>
                <Caption>Movement over the average, regular disturbances and low deep sleep</Caption>
            </View>

            <View style={Layer.stackPush}>
                <Chip icon="info" mode="outlined">Your sleep quality is trending down</Chip>
            </View>

            <CardSummary
                cardStyle={Layer.panelLight}
                cardTitle="Average Sleep Duration"
                cardStat="6.5hrs"
                cardDescription="15% below recommended amount.">
            </CardSummary>

            <CardSummary
                cardStyle={Layer.panelLight}
                cardTitle="Sleep Disturbances"
                cardStat="Frequent"
                cardDescription="An average of 8 disturbances from deep sleep per night.">
            </CardSummary>

            <View style={[Layer.sectionHeader, Layer.sectionPush, Layer.colorLight]}>
                <Subheading>Your pre-bedtime activities</Subheading>
                <Paragraph>Most pre-bedtime activies from last week were detrimental to your sleep quality.</Paragraph>
            </View>

            <List.Item
                style={Layer.outline, Layer.stackPush}
                title="Using Phone/Tablet"
                description="3 times"
                left={props => <List.Icon {...props} icon="devices" />}
                right={props => <List.Icon {...props} icon="thumb-down" />}
              />
            <List.Item
                style={Layer.outline, Layer.stackPush}
              title="Watching TV"
              description="3 times"
              left={props => <List.Icon {...props} icon="tv" />}
              right={props => <List.Icon {...props} icon="thumb-down" />}
            />
            <List.Item
                style={Layer.outline, Layer.stackPush}
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
    padding: Space.sizeMedium,
  }
});
