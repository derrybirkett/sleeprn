import React, { Component } from "react";
import { AreaChart, XAxis, YAxis, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { View } from 'react-native'
import Space from '../constants/Space';

export default class Chart extends Component {
    render() {
        const data = [ 6,4,9,4,8,8,8 ]
        const dates = [ 'Mon','Tue','Wed','Thu','Fri','Sat','Sun' ]
        return (
                <View style={Space.stackPush}>
                    <AreaChart
                        style={{ height: 200 }}
                        data={ data }
                        contentInset={{ top: 30, bottom: 30 }}
                        curve={ shape.curveNatural }
                        svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
                    >
                        <Grid/>
                    </AreaChart>
                    <XAxis
                            style={{ marginHorizontal: -10 }}
                            data={ dates }
                            contentInset={{ left: 10, right: 10 }}
                            svg={{ fontSize: 10, fill: 'black' }}
                        />

                </View>

            );
    }
}
