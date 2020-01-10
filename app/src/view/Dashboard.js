import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { styles } from '../style/styles'

export default class Dashboard extends Component {
    render() {
        return (
            <View style={styles.textMedium, { flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Dashboard</Text>
            </View>
        )
    }
}
