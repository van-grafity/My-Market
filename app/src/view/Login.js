import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { isNewExpression } from '@babel/types';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#BEC2C4"
    };
  }

  isHome = () => {
    this.props.navigation.navigate('Home')
  }

  onBlur = () => {
    this.setState({ color: "#BEC2C4" })
  }

  onFocus = () => {
    this.setState({ color: "#00D79E" })
  }

  render() {
    return (
      <View>
        <View style={styles.marginTextInput}>
          <TextInput
            underlineColorAndroid="transparent"
            placeholder='username'
            style={{ borderWidth: 1, borderRadius: 8, borderColor: this.state.color, padding: 15, color: "#000000" }}
          />
        </View>

        <View style={styles.marginTextInput}>
          <TextInput
            placeholder="password"
            style={{ borderWidth: 1, borderRadius: 8, padding: 15, borderColor: this.state.color }}
          />
        </View>

        <Button
          title='Login'
          onPress={this.isHome}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  marginTextInput: {
    marginTop: 24,
    paddingHorizontal: 40
  }
})
