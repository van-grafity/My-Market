import React, { Component } from 'react';
import {
    View,
    ActivityIndicator
} from 'react-native';
import {
    DotIndicator,
  } from 'react-native-indicators';


export default class Loading extends Component {
    render() {
        return (
            <View
                style = {{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                    <DotIndicator size={10} count={3}
                    color="#00D79E" />
            </View>
        );
    }
}