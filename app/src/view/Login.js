import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableHighlight } from 'react-native';
import { isNewExpression } from '@babel/types';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#BEC2C4"
    };
  }

  shshowPlace = () => {
    this.props.navigation.navigate('Dashboard')
  }

  onBlur = () => {
    this.setState({ color: "#BEC2C4" })
  }

  onFocus = () => {
    this.setState({ color: "#00D79E" })
  }

  closeModal = () => {
    this.setState({ visibleModal: null })
  }

  renderPickerData = () => (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View style={{ height: 56, flexDirection: "row", alignItems: "center", paddingHorizontal: 24, marginTop: Platform.OS === "ios" ? 20 : 0 }}>
        <View style={{ flex: 1 }}>
          <Text onPress={this.closeModal}>Pilih negara</Text>
        </View>
        <TouchableOpacity onPress={this.closeModal}>
          <Feather name="x" color="#707070" size={18} />
        </TouchableOpacity>
      </View>

      <TextInput style={{ height: 48, borderColor: "#E0E0E0", borderWidth: 1, marginHorizontal: 16 }}
        underlineColorAndroid="transparent"
      />

      <ScrollView>
        {
          this.state.pickerData.length != 0 ?
            this.state.pickerData.map((data, key) =>
              <TouchableHighlight underlayColor="#EEEEEE"
                onPress={() => this.selectCountry(data)} key={key}>
                <View style={{ height: 48, alignItems: "center", paddingHorizontal: 16, flexDirection: "row", borderBottomColor: "#E0E0E0", borderBottomWidth: 1 }}>
                  {/* <Image source={data.image} resizeMode="stretch" style={{ width: 30, height: 16 }}/> */}
                  <View style={{ flex: 1, marginLeft: 16 }}>
                    <Text>Label</Text>
                  </View>
                </View>
              </TouchableHighlight>
            ) : null
        }
      </ScrollView>
    </View>
  )

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
          onPress={this.shshowPlace}
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
