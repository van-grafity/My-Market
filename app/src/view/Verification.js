import React, { Component, PureComponent } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';

export default class Verification extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            code: "",
        }
    }

    componentDidMount() {
        this.setState({
            isLoading: false
        })
    }

    onVerifcation = (code) => {
        this.setState({
            isLoading: true
        })
        var bodyData = {
            verification_code: code,
        }
        console.log("bodydata", bodyData)
    }

    _onCodeFilled = (code) => {
        console.log("_onCodeFilled", code)
    }

    _onCodeChanged = (code) => {
        console.log("_onCodeChanged", code)
        this.setState({
            code: code
        })

        if (code.length == 5) {
            console.log("length", code.length)
            this.onVerifcation(code);
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ paddingTop: 32, alignItems: "center" }}>
                    <View style={{ marginTop: 32, alignItems: "center" }}>
                        <Text>Input Verification Code</Text>
                    </View>
                    <View style={{ marginTop: 16, marginBottom: 24, alignItems: "center" }}>
                        <Text>Verification code has been sent to email</Text>
                        <Text>Email</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    borderStyleBase: {
        width: 30,
        height: 45
    },

    borderStyleHighLighted: {
        borderColor: "#03DAC6",
    },

    underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
    },

    underlineStyleHighLighted: {
        borderColor: "#03DAC6",
    },
});