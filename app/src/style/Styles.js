import React, { Component } from 'react'
import { StyleSheet, Colors, Dimensions, Platform } from 'react-native'

const { height, width } = Dimensions.get('window');
const aspectRatio = height / width;
const gridDimension = width / 4;

export const styles = StyleSheet.create({
    scrollView: {
        // backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        // backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        // color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        // color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        // color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: "#E0E0E0"
    },
    textHedaerNav: {
        fontFamily: "Ubuntu-Regular",
        fontSize: 20,
        color: "#000000"
    },
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    containerSignUp: {
        marginHorizontal: 32,
        backgroundColor: '#FFFFFF',
        shadowOffset: { width: 0, height: 0 },
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOpacity: 0.25,
        shadowRadius: 5,
        borderRadius: 32,
        paddingVertical: 24
    },
    headerContainer: {
        backgroundColor: "#FFFFFF",
        height: 56
    },
    touchContainer: {
        height: 40,
        width: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    shadow: {
        backgroundColor: '#FFFFFF',
        shadowOffset: { width: 0, height: 0 },
        shadowColor: '#000000',
        //shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5
    },
    cardView: {
        margin: 20,
        backgroundColor: '#FFFFFF',
        shadowOffset: { width: 0, height: 0 },
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOpacity: 0.25,
        shadowRadius: 5,
        borderRadius: 15
    },
    card: {
        backgroundColor: '#FFFFFF',
        shadowOffset: { width: 0, height: 0 },
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOpacity: 0.25,
        shadowRadius: 5,
    },
    contentMainMenu: {
        backgroundColor: '#FFFFFF',
        shadowOffset: { width: 0, height: 0 },
        shadowColor: 'rgba(0, 0, 0, 16)',
        shadowOpacity: 0.25,
        shadowRadius: 3,
        marginRight: 16,
        marginBottom: 16,
        marginTop: 8,
    },
    shorcut: {
        backgroundColor: '#FFFFFF',
        shadowOffset: { width: 0, height: 0 },
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOpacity: 0.25,
        shadowRadius: 5,
        height: 48,
        width: 48,
        justifyContent: "center",
        alignItems: "center",
    },
    contentContainer: {
        marginHorizontal: 16,
        marginVertical: 8,
        backgroundColor: '#FFFFFF',
        shadowOffset: { width: 0, height: 0 },
        shadowColor: 'rgba(0, 0, 0, 16)',
        shadowOpacity: 0.25,
        shadowRadius: 5,
        borderRadius: 10,
    },
    itemContainer: {
        marginHorizontal: 16,
        marginVertical: 8,
        backgroundColor: '#FFFFFF',
        shadowOffset: { width: 0, height: 0 },
        shadowColor: 'rgba(0, 0, 0, 16)',
        shadowOpacity: 0.15,
        shadowRadius: 3,
        borderRadius: 5,
    },
    contentFavorite: {
        // marginHorizontal:16,
        // marginBottom:20,
        flex: 1,
        paddingHorizontal: 8,
        paddingTop: 16,
        paddingBottom: 8,
        backgroundColor: '#FFFFFF',
        // borderBottomWidth:1,
        // borderRightWidth:1,
        //borderColor:"#EBEFF5",
    },
    contentPromo: {
        marginBottom: 8,
        backgroundColor: '#FFFFFF',
    },
    contentDetail: {
        marginHorizontal: 10,
        backgroundColor: '#FFFFFF',
        shadowOffset: { width: 0, height: 0 },
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOpacity: 0.25,
        shadowRadius: 5,
        borderRadius: 5,
    },
    titleApp: {
        fontFamily: "Ubuntu-Bold",
        fontSize: 32,
        color: "#FFFFFF"
    },
    textValue: {
        fontFamily: "Ubuntu-Medium",
        fontSize: 16,
        color: "#FFFFFF"
    },
    textMediumBlack: {
        fontFamily: "Ubuntu-Medium",
        fontSize: 16,
        color: "#000000"
    },
    textMediumWhite: {
        fontFamily: "Ubuntu-Medium",
        fontSize: 14,
        color: "#FFFFFF"
    },
    textTitleMedium: {
        fontFamily: "Ubuntu-Medium",
        fontSize: 12,
        color: "#000000"
    },
    textButtonWhite: {
        fontFamily: "Ubuntu-Medium",
        fontSize: 16,
        color: "#FFFFFF"
    },
    textInput: {
        borderColor: '#70707015',
        borderWidth: 1,
        fontSize: 14,
        fontFamily: 'Ubuntu-Medium',
        color: "#000000",
        height: 35
    },
    textInputSearch: {
        flex: 1,
        height: 40,
        fontSize: 14,
        fontFamily: 'Ubuntu-Medium',
        color: "#000000",
    },
    inputSearchLocation: {
        borderColor: '#00D79E',
        borderWidth: 1,
        fontSize: 18,
        fontFamily: 'Ubuntu-Regular',
        color: "#000000",
        height: 40,
        paddingHorizontal: 16,
        borderRadius: 3,
    },
    textTitle: {
        fontFamily: "Ubuntu-Regular",
        fontSize: 16,
        color: "#00D79E"
    },
    textHeader: {
        fontFamily: "Ubuntu-Medium",
        fontSize: 14,
        color: "#00D79E"
    },
    textLabelLight: {
        fontFamily: "Ubuntu-Light",
        fontSize: 14,
        color: "#2D3436"
    },
    textValueWhite: {
        fontFamily: "Ubuntu-Regular",
        fontSize: 14,
        color: "#FFFFFF"
    },
    textValueBlack: {
        fontFamily: "Ubuntu-Regular",
        fontSize: 14,
        color: "#000000"
    },
    textDesc: {
        fontFamily: "Ubuntu-Regular",
        fontSize: 14,
        color: "#BEC2C4"
    },
    textLabel: {
        fontFamily: "Ubuntu-Regular",
        fontSize: 12,
        color: "#BEC2C4"
    },
    textLabelItem: {
        fontFamily: "Ubuntu-Regular",
        fontSize: 12,
        color: "#6A6A6A"
    },
    textTitleItem: {
        fontFamily: "Ubuntu-Light",
        fontSize: 12,
        color: "#6A6A6A"
    },
    titleItem: {
        fontFamily: "Ubuntu-Regular",
        fontSize: 16,
        color: "#000000"
    },
    mainTextTitle: {
        fontFamily: "Ubuntu-Medium",
        fontSize: 14,
        color: "#000000"
    },
    mainButtonText: {
        fontFamily: "Ubuntu-Medium",
        fontSize: 16,
    },
    textButtonMedium: {
        fontFamily: "Ubuntu-Medium",
        fontSize: 14,
    },
    textButton: {
        fontFamily: "Ubuntu-Regular",
        fontSize: 14,
    },
    saveButton: {
        backgroundColor: "#00D79E",
        height: 56,
        borderRadius: 28,
        alignItems: "center",
        justifyContent: "center",
    },
    phoneButton: {
        backgroundColor: "#EBFCF7",
        borderColor: "#00D79E",
        borderWidth: 1,
        height: 48,
        borderRadius: 28,
        alignItems: "center",
        justifyContent: "center",
    },
    facebookButton: {
        backgroundColor: "#2980B9",
        height: 48,
        borderRadius: 28,
        alignItems: "center",
        justifyContent: "center",
    },
    googleButton: {
        backgroundColor: "#E74C3C",
        height: 48,
        borderRadius: 28,
        alignItems: "center",
        justifyContent: "center",
    },
    containerFilter: {
        flexDirection: "row",
        height: 40,
        alignSelf: "center",
        bottom: 16,
        position: "absolute",
        zIndex: 1,
        backgroundColor: "#FFFFFF",
        borderRadius: 18,
        shadowOffset: { width: 0, height: 0 },
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOpacity: 0.25,
        shadowRadius: 5,
    },
    contentSort: {
        flexDirection: "row",
        alignItems: "center",
        height: 40,
        paddingHorizontal: 16,
        borderTopLeftRadius: 18,
        borderBottomLeftRadius: 18,
    },
    contentFilter: {
        flexDirection: "row",
        alignItems: "center",
        height: 40,
        paddingHorizontal: 16,
        borderTopRightRadius: 18,
        borderBottomRightRadius: 18,
    },
    text: {
        fontFamily: "Ubuntu-Regular",
        fontSize: 12,
    },
    textRegular: {
        fontFamily: "Ubuntu-Regular",
        fontSize: 12,
        color: "#000000"
    },
    textMedium: {
        fontFamily: "Ubuntu-Medium",
        fontSize: 12,
    },
    containerAbsolute: {
        zIndex: 2,
        position: "absolute",
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(17, 17, 17, 0.5)",
    },
    textItem: {
        fontFamily: "Ubuntu-Regular",
        fontSize: 14,
    },
    containerClose: {
        height: 32,
        width: 32,
        justifyContent: "center",
        alignItems: "center"
    },
    textHeaderItem: {
        fontFamily: "Ubuntu-Medium",
        fontSize: 14,
        color: "#6A6A6A"
    },
    textContentItem: {
        fontFamily: "Ubuntu-Regular",
        fontSize: 12,
    },
    circle: {
        height: 24,
        width: 24,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#707070",
        borderWidth: 1,
        borderRadius: 12,
    },
    textItemFilter: {
        fontFamily: "Ubuntu-Light",
        fontSize: 16,
        color: "#6A6A6A"
    },
    textDistance: {
        fontFamily: "Ubuntu-Light",
        fontSize: 10,
        color: "#6A6A6A"
    },
    errorMessage: {
        //height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalContent: {
        marginVertical: 30,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        //borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    headerModalFull: {
        height: 56,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        marginTop: Platform.OS === "ios" ? 20 : 0
    },
    textHeaderModal: {
        fontFamily: "Ubuntu-Medium",
        fontSize: 18,
        color: "#00D79E"
    },
    shadow: {
        backgroundColor: '#FFFFFF',
        shadowOffset:{  width: 0,  height: 0 },
        shadowColor: '#000000',
        //shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation:5
    },
    cardView: {
        margin:20,
        backgroundColor: '#FFFFFF',
        shadowOffset:{  width: 0,  height: 0 },
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOpacity: 0.25,
        shadowRadius: 5,
        borderRadius:15
    },
    card: {
        backgroundColor: '#FFFFFF',
        shadowOffset:{  width: 0,  height: 0 },
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOpacity: 0.25,
        shadowRadius: 5,
    },
    shorcut: {
        backgroundColor: '#FFFFFF',
        shadowOffset:{  width: 0,  height: 0 },
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOpacity: 0.25,
        shadowRadius: 5,
        height:48,
        width:48,
        justifyContent:"center",
        alignItems:"center",
    },
    contentContainer:{
        flex:1,
        margin:8,
        backgroundColor: '#FFFFFF',
        // shadowOffset:{  width: 0,  height: 0 },
        // shadowColor: 'rgba(0, 0, 0, 16)',
        // shadowOpacity: 0.25,
        // shadowRadius: 5,
    },
    textTitle:{
        fontFamily:"Ubuntu-Regular",
        fontSize:12,
        color:"#000000"
    },
    textName:{
        fontFamily:"Ubuntu-Medium",
        fontSize:10,
        color:"#2F82C7"
    },
    textAddress:{
        fontFamily:"Ubuntu-Light",
        fontSize:10,
        color:"#000000"
    },
    textGender:{
        fontFamily:"Ubuntu-Regular",
        fontSize:8,
        color:"#FFFFFF"
    },
    iconFavorite:{
        backgroundColor:"#FFFFFF",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:15,
        width:30,
        height:30,
        top:4,
        right:4,
        position:"absolute",
        zIndex:1
    },
    containerGender:{
        backgroundColor:"#6A6A6A",
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:12,
        height:17,
        top:0,
        left:0,
        position:"absolute",
        zIndex:1
    },
    textFilter:{
        fontFamily:"Ubuntu-Medium",
        fontSize:18,
        color:"#00D79E"
    }
});