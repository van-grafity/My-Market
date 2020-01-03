import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import CustomInput from '../components/CustomInput'
import { Button, Form } from 'native-base'


export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  navRegister = () => {
    this.props.navigation.navigate("Register", {
      title: "Register"
    })
  }

  render() {
    return (
      <View>
        <ScrollView>
          <View style={{ marginTop: 24, paddingHorizontal: 16 }}>
            <Text style={{ fontSize: 20, color: '#000000' }}>Have trouble with your password?</Text>
          </View>
          <View style={{ marginTop: 16, paddingHorizontal: 16 }}>
            <Text style={{ fontSize: 11, color: "#6A6A6A" }}>Forgot your password? Please input your email below. We will send you link for reset password</Text>
          </View>
          <View style={{ marginTop: 8, paddingHorizontal: 16 }}>
            <CustomInput
              placeholder="Input Email"
              placeholderTextColor="#E0E0E0"
              onChangeText={(text) => this.setState({ email: text })} />
          </View>

          <View style={{ marginTop: 16, paddingHorizontal: 16 }}>
            <Button block style={{ backgroundColor: "#00D79E", height: 56, borderRadius: 28, alignItems: "center", justifyContent: "center" }}>
              <Text style={{ color: "#FFFFFF", fontSize: 16 }}>Reset Password</Text>
            </Button>
          </View>
        </ScrollView>
        <View style={{ flexDirection: "row", alignItems: "center", height: 56, backgroundColor: "#F8F8F8", justifyContent: "center" }}>
          <Text>Have Not</Text>
          <Text onPress={this.navRegister} style={{ color: "#00D79E", marginLeft: 5, fontSize: 16 }}>Register</Text>
        </View>
      </View>
    );
  }
}
