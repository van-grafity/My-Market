import React, { Component, PureComponent } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export default class Dashboard extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Dashboard</Text>
                <ContentPopular />
                <ContentPromo />
                <ContentService />
            </View>
        )
    }
}

class ContentPopular extends PureComponent {
    render() {
        return (
            <View>
                <Text>ContentPopular</Text>
            </View>
        )
    }
}

class ContentPromo extends PureComponent {
    render() {
        return (
            <View elevation={3} style={[stylesPhone.contentMainMenu,{borderRadius:5,}]}>
                <TouchableHighlight underlayColor="transparent"
                    onPress={this.onDetails}>
                    <LinearGradient style={stylesPhone.containerItem}
                        colors={["#FFFFFF", "#FFFFFF"]}>
                        <View style={{flex:1}}>
                            <Image borderTopLeftRadius={5} borderTopRightRadius={5}
                                source={{uri: "https://d1d8o7q9jg8pjk.cloudfront.net/zenwel/c/5c94d8bda8bab.jpg"}} style={stylesPhone.image}/>
                            <View style={stylesPhone.containerAbsolute}>
                                <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                                    <LinearGradient colors={["#FFC500","#C21500"]} start={{x: 0.1, y: 0.7}} end={{x: 1, y: 1.0}}
                                        style={stylesPhone.containerPromo}>
                                        <Text style={[stylesPhone.textPromo, {color:"#FFFFFF"}]}>PROMO 20%</Text>
                                    </LinearGradient>
                                </View>
                                <LinearGradient colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.13)", "rgba(0, 0, 0, 0.32)", "rgba(0, 0, 0, 0.74)"]}
                                    //start={{x: 0.1, y: 0.7}} end={{x: 1, y: 1.0}}
                                    style={{opacity:0.8, backgroundColor:"transparent", height:53, width:"100%", padding:8, justifyContent:"flex-end", position:"absolute", bottom:0}}>
                                    <Text numberOfLines={2} style={stylesPhone.titleContent}>{"Gerai Sanusi Pertama Hebat Sejahtera"}</Text>
                                </LinearGradient>
                            </View>
                        </View>
                            
                            
                        <View style={{margin:8}}>
                            <Text numberOfLines={1} style={stylesPhone.textTitle}>Name</Text>
                        </View>
                        <View style={{margin:8, flexDirection:"row", alignItems:"center"}}>
                            <Text style={stylesPhone.textPrice}>75000</Text>
                            <Text style={{marginLeft:8, fontSize:12, color:"#BEC2C4", textDecorationLine:"line-through"}}>50000</Text>
                        </View>
                    </LinearGradient>
                </TouchableHighlight>
            </View>
        )
    }
}

class ContentService extends PureComponent {
    render() {
        return (
            <View elevation={3} style={[stylesPhone.contentMainMenu, { borderRadius: 5 }]}>
                <TouchableHighlight underlayColor="transparent"
                    onPress={this.onDetails}>
                    <LinearGradient style={stylesPhone.containerItem}
                        colors={["#FFFFFF", "#FFFFFF"]}>
                        <View style={{ flex: 1 }}>
                            <Image borderTopLeftRadius={5} borderTopRightRadius={5} borderTopLeftRadius={5}
                                source={{ uri: "https://d1d8o7q9jg8pjk.cloudfront.net/zenwel/c/5c94d8bda8bab.jpg" }} style={stylesPhone.image} />
                            <View style={stylesPhone.containerAbsolute}>
                                <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                                    <TouchableOpacity
                                        style={stylesPhone.containerFavorite}>
                                        {/* <Feather name="heart" color="#9A9797" size={20}/> */}
                                    </TouchableOpacity>
                                </View>
                                <LinearGradient colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.13)", "rgba(0, 0, 0, 0.32)", "rgba(0, 0, 0, 0.74)"]}
                                    style={{ height: 53, width: "100%", padding: 8, justifyContent: "flex-end", position: "absolute", bottom: 0 }}>
                                    <Text numberOfLines={2} style={stylesPhone.titleContent}>{"Gerai Sanusi Pertama Hebat Sejahtera"}</Text>
                                </LinearGradient>
                            </View>
                        </View>
                        <View style={{ margin: 8 }}>
                            <Text numberOfLines={2} style={stylesPhone.textTitle}>Name</Text>
                            <View style={{ marginTop: 16, }}>
                                <Text style={stylesPhone.textPrice}>75000</Text>
                            </View>
                        </View>
                    </LinearGradient>
                </TouchableHighlight>
            </View>
        )
    }
}



const stylesPhone = StyleSheet.create({
    containerAbsolute: {
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    containerFlatlist: {
        paddingLeft: 16
    },
    contentMainMenu: {
        backgroundColor: '#FFFFFF',
        shadowOffset: { width: 0, height: 0 },
        shadowColor: 'rgba(0, 0, 0, 16)',
        shadowOpacity: 0.25,
        shadowRadius: 3,
        marginRight: 16,
        marginBottom: 16,
        marginTop: 16,
    },
    containerPopular: {
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        marginRight: 16,
        marginBottom: 16,
        marginTop: 16,
    },
    containerPromo: {
        borderTopLeftRadius: Platform.OS === "ios" ? 0 : 5,
        borderBottomRightRadius: 10,
        flexDirection: "row",
        paddingHorizontal: 8,
        height: 18,
        alignItems: "center"
    },
    containerLocation: {
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        height: 56,
        alignItems: "center",
        paddingHorizontal: 16
    },
    containerGender: {
        height: 18,
        borderTopLeftRadius: 5,
        borderBottomRightRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 4,
        justifyContent: "center"
    },
    containerFavorite: {
        margin: 4,
        borderRadius: 15,
        height: 30,
        width: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF"
    },
    containerTime: {
        height: 11,
        borderRadius: 29,
        marginLeft: 4,
        paddingHorizontal: 6,
        justifyContent: "center",
        marginBottom: 4,
    },
    containerSearch: {
        flex: 1,
        height: 40,
        borderRadius: 20,
        paddingHorizontal: 16,
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        alignItems: "center"
    },
    headerContent: {
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        paddingTop: 16,
        paddingHorizontal: 16,
    },
    bgContent: {
        opacity: 0.8,
        backgroundColor: "transparent",
        height: 53,
        width: "100%",
        padding: 8,
        position: "absolute",
        bottom: 0
    },
    textPromo: {
        fontSize: 8,
    },
    textTime: {
        fontSize: 8,
    },
    textTitle: {
        fontSize: 12,
        color: "#000000"
    },
    textPrice: {
        fontSize: 12,
        color: "#000000"
    },
    textAddress: {
        fontSize: 10,
        color: "#000000"
    },
    titleContent: {
        fontSize: 10,
        color: "#FFFFFF"
    },
    textDistance: {
        fontSize: 10,
        color: "#6A6A6A"
    },
    textSeeAll: {
        fontSize: 12,
    },
    textHeader: {
        fontSize: 16,
    },
    textSearch: {
        color: "#E0E0E0",
        fontSize: 14,
    },
    containerItem: {
        backgroundColor: "#FFFFFF",
        width: 136,
        borderRadius: 5,
        paddingBottom: 8
    },
    image: {
        width: 136,
        height: 136
    },
    iconShorcut: {
        margin: 4,
        backgroundColor: '#FFFFFF',
        shadowOffset: { width: 0, height: 0 },
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOpacity: 0.25,
        shadowRadius: 5,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    containerShorcut: {
        marginHorizontal: 12,
        width: 56,
        alignItems: "center",
    },
    textShorcut: {
        fontSize: 12,
        color: "#000000"
    },
    headerModalFull: {
        height: 56,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        marginTop: Platform.OS === "ios" ? 20 : 0
    },
    textHeaderModal: {
        fontSize: 18,
        color: "#00D79E"
    },
    inputSearchLocation: {
        borderColor: '#00D79E',
        borderWidth: 1,
        fontSize: 18,
        color: "#000000",
        height: 40,
        paddingHorizontal: 16,
        borderRadius: 20,
    },
    headerContainer: {
        backgroundColor: '#FFFFFF',
        shadowOffset: { width: 0, height: 0 },
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOpacity: 0.25,
        shadowRadius: 5,
        ...Platform.select({
            ios: {
                height: 76,
                paddingTop: 20
            },
            android: {
                height: 56,
            }
        })
    },
    textLabel: {
        fontSize: 12,
        color: "#BEC2C4"
    },
    card: {
        backgroundColor: '#FFFFFF',
        shadowOffset: { width: 0, height: 0 },
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOpacity: 0.25,
        shadowRadius: 5,
        marginTop: 4,
    },
    textLoc: {
        fontSize: 16,
        color: "#6A6A6A"
    }
})