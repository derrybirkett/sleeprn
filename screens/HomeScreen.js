import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser, Icon } from 'expo';
import { Chip } from 'react-native-paper';

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

            <PageHeader style={styles.pageHeader} />

            <CardSummary
                cardStyle={styles.panelDark}
                cardTitle="Overall Sleep Quality"
                cardStat="Low"
                cardDescription="Movement over the average, regular disturbances and low deep sleep">
            </CardSummary>

            <View style={styles.stackPush}>
                <Chip icon="warning">Your sleep quality is trending down</Chip>
            </View>

            <View style={[styles.card, styles.colorLight]}>
                <Text style={styles.textH5}>Last Weeks Sleep Report</Text>
                <Text style={styles.textP}>Movement over the average, regular disturbances and low deep sleep</Text>
            </View>

            <CardSummary
                cardStyle={styles.panelLight}
                cardTitle="Something else"
                cardStat="6.5hrs"
                cardDescription="You sleep too little.">
            </CardSummary>

            <View style={[styles.card, styles.panelDark]}>
              <Text style={[styles.textP, styles.textLight]}>Overall Sleep Quality</Text>
              <Text style={[styles.textH3, styles.textLight]}>Low</Text>
              <Text style={[styles.textP, styles.textLight]}>Movement over the average, regular disturbances and low deep sleep</Text>
            </View>

            <View style={[styles.card, styles.colorLight]}>
                <Text style={styles.textH5}>Your pre-bedtime activities</Text>
                <Text style={styles.textP}>Most pre-bedtime activies from last week were detrimental to your sleep quality.</Text>
            </View>

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
    marginTop: Space.sizeLarge
  },
  textH5: {
      fontWeight: 'bold',
      fontSize: Type.textBaseSize
  },
  textLight: {
      color: Type.textWhite,
  },
  panelLight: {
      backgroundColor: Colors.tintColor,
      color: Type.textDark
  },
  panelDark: {
      backgroundColor: Colors.tintColor,
      color: Type.textWhite,
  },
  alert: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
  },
  iconInline: {
      color: Type.textDark,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start'
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
