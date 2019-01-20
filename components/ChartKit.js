import React, { Component } from "react";
import { Dimensions } from 'react-native';
import { View, Text} from 'react-native'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph
} from 'react-native-chart-kit'

export default class ChartKit extends Component {
    render() {
        return (

            <View>
              <LineChart
                data={{
                  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                  datasets: [{
                    data: [
                      6,
                      4,
                      9,
                      4,
                      8,
                      8,
                      8
                    ]
                  }]
                }}
                width={Dimensions.get('window').width - 32} // from react-native
                height={220}
                chartConfig={{
                  backgroundColor: '#6200EE',
                  backgroundGradientFrom: '#9A00F8',
                  backgroundGradientTo: '#6500EE',
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16
                  }
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16
                }}
              />
            </View>


            );
    }
}
