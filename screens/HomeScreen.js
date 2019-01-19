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
import { WebBrowser } from 'expo';

// My Components
import PageHeader from "../components/PageHeader";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    //header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <PageHeader style={styles.pageHeader} />
            <View style={styles.cardDark}>
              <View style={styles.cardBackground} />
              <Text style={styles.intro}>Overall Sleep Quality</Text>
              <Text style={styles.value}>Low</Text>
              <Text style={styles.description}>Movement over the average, regular disturbances and low deep sleep</Text>
            </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardDark: {
    height: 172,
    width: 302,
    top: 147,
    left: 29,
    position: "absolute"
  },
  cardBackground: {
    top: 0,
    left: "0%",
    width: 302,
    height: 172,
    position: "absolute",
    backgroundColor: "rgba(35,35,35,.8)",
    opacity: 1,
    transform: [
      {
        rotate: "0deg"
      }
    ],
    borderRadius: 12
  },
  intro: {
    top: 25,
    left: 26,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 14,
    color: "rgba(255,255,255,1)"
  },
  value: {
    top: 58,
    left: 26,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 28,
    color: "rgba(255,255,255,1)"
  },
  description: {
    top: 105,
    left: 26,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 14,
    color: "rgba(255,255,255,1)"
  }
});
