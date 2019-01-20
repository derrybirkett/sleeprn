import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Paragraph } from 'react-native-paper';
import Layout from '../constants/Layout';
import PageHeader from "../components/PageHeader";

export default class CalendarScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
        <View style={{flex:1}}>

            <PageHeader
                pageHeaderTitle="Calendar"
                pageHeaderDescription="Select a sleep journal range." />

            <ScrollView style={Layout.container} contentContainerStyle={Layout.contentContainer}>
                <View>
                    <Paragraph>To do: browse by dates.</Paragraph>
                </View>
          </ScrollView>
        </View>
    );
  }
}
