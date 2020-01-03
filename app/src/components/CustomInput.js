import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet
} from 'react-native';

export default class CustomInput extends Component {
    constructor(props){
        super(props)
        this.state = {
            color:"#E0E0E0",
            textColor: "#6A6A6A",
            _styles: this.props.isTablet ? stylesTab : stylesPhone
        }
    }

    onBlur = () => {    
        this.setState({
            color:"#E0E0E0",
            textColor: "#6A6A6A",
        })
    }
    onFocus = () => {
        this.setState({
            color:"#00D79E",
            textColor:"#00D79E",
        })
    }

    render(){
        const {color, textColor, _styles} = this.state
        return(
            <View style={{flex:1,}}>
                {
                    this.props.title != null ?
                    <Text style={[_styles.textTitle,{color: textColor,}]}>{this.props.title}</Text>
                    : null
                }
                    <TextInput {...this.props}
                        underlineColorAndroid="transparent"
                        style={[_styles.textInput,{borderBottomColor: color, borderBottomWidth:1}]}
                        onBlur={this.onBlur}
                        onFocus={this.onFocus}
                        />
                    {
                        this.props.helper != null ?
                        <Text style={_styles.textHelper}>{this.props.helper}</Text> : null
                    }
            </View>

        )
    }
}

const stylesPhone = StyleSheet.create({
    textTitle:{
        fontSize:12,
        fontFamily:"Ubuntu-Light",
    },
    textHelper:{
        fontSize:11,
        color:"#E0E0E0",
        marginTop:3,
    },
    textInput:{
        flex:1,
        fontSize:16,
        color:"#000000",
        paddingVertical: 4,
        //borderBottomWidth:2,
    },
})

const stylesTab = StyleSheet.create({
    textTitle:{
        fontSize:16,
        fontFamily:"Ubuntu-Light",
    },
    textHelper:{
        fontSize:12,
        color:"#E0E0E0",
        marginTop:3,
    },
    textInput:{
        flex:1,
        fontSize:18,
        color:"#000000",
        //borderBottomWidth:1,
        paddingVertical: 4,
    },
})