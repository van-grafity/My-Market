import React, { Component, PureComponent } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const { height, width } = Dimensions.get('screen');
const wPhone = ((width) / 2);
const wTab = ((width) / 3);

const menuSort = [
    {id:0, nameId: "Paling Sesuia", nameEn:"Relevance", value:"",},
    {id:1, nameId: "Terdekat", nameEn:"Nearest", value:"nearest",}, 
    {id:2, nameId: "Rating Tertinggi", nameEn:"Highest Rating", value:"highest_rating",},
]

const GENDER = [
    {id:0, nameId: "Semua Gender", nameEn:"All Gender", value:""},
    {id:1, nameId: "Hanya Wanita", nameEn:"Women only", value:""},
    {id:2, nameId: "Hanya Pria", nameEn:"Men only", value:""},
]

const LOCATION = [
    {id:0, nameId: "Bali", nameEn:"Bali", value:""},
    {id:1, nameId: "Jakarta", nameEn:"Jakarta", value:""},
    {id:2, nameId: "Yogyakarta", nameEn:"Yogyakarta", value:""},
]

const FACILITY = [
    {id:0, nameId: "WiFi", nameEn:"WiFi", value:""},
    {id:1, nameId: "Kolam Berenang", nameEn:"Swimming Pool", value:""},
    {id:2, nameId: "Area Anak - anak", nameEn:"Child Area", value:""},
    {id:3, nameId: "Spa", nameEn:"Spa", value:""},
]

export default class Places extends Component {

    render() {
        return (
            <View style={styles.textMedium, { flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Place</Text>
                <Content />
            </View>
        )
    }
}
class Content extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            working_hours: ''
        }
    }

    render() {
        return (
            <TouchableOpacity activeOpacity={0.5}
                onPress={this.onDetails}
                style={styles.contentContainer}>
                <View style={{}}>
                    <LinearGradient colors={["#FFFFFF", "#FFFFFF"]}
                        style={{ width: "100%", borderTopLeftRadius: 5, borderTopRightRadius: 5 }}>
                        <View style={{ flex: 1 }}>
                            <Image source={{ uri: "https://pngimage.net/wp-content/uploads/2018/06/logo-olshop-png-1.png" }}
                                style={styles.image} />
                            <View style={styles.containerAbsolute}>
                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                                    <View
                                        style={[styles.containerGender, { backgroundColor: "#2980B9" }]}>
                                        <Text style={styles.textGender}>Man Only</Text>
                                    </View>

                                    {/* <TouchableOpacity
                                        style={styles.containerFavorite}>
                                        <Feather name="heart" color="#9A9797" size={20} />
                                    </TouchableOpacity> */}

                                </View>
                                <View style={{ flexDirection: "row", flex: 1, justifyContent: "flex-end", alignItems: "flex-end" }}>

                                    <View style={[styles.containerTime, { backgroundColor: "#FFFFFF" }]}>
                                        <Text style={[styles.textTime, { color: "#2D3436" }]}>Field</Text>
                                    </View>

                                </View>
                            </View>
                        </View>
                    </LinearGradient>

                    {/* <StarRating
                            disabled={false}
                            maxStars={5} 
                            emptyStarColor="#FFCA28"
                            fullStarColor='#FFCA28'
                            starSize={16}
                            containerStyle={{width:100, height:16, marginTop:5}}
                            rating={data._source.rating} />*/}

                    <View style={{ marginTop: 5, }}>
                        <Text numberOfLines={2} style={styles.textTitle}>Name</Text>
                    </View>
                    <View style={{ marginTop: 4, }}>
                        <Text numberOfLines={2} style={styles.textAddress}>Source Address</Text>
                    </View>
                    <View style={{ marginTop: 4, }}>
                        <Text numberOfLines={2} style={styles.textDistance}>Distance</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerStyleInput: {
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 8,
        borderRadius: 20,
        marginHorizontal: 8,
    },
    containerAbsolute: {
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: 1,
    },
    zInput: {
        flex: 1,
        fontSize: 18,
        color: "#000000",
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginHorizontal: 8,
    },
    containerAbsolute: {
        width: "100%",
        height: "100%",
        zIndex: 1,
    },
    contentContainer: {
        width: wPhone,
        paddingVertical: 16,
        paddingHorizontal: 16,
        backgroundColor: "#FFFFFF",
        borderBottomColor: "#EBEFF5",
        borderBottomWidth: 1,
        borderRightColor: "#EBEFF5",
        borderRightWidth: 1
    },
    containerGender: {
        height: 20,
        borderTopLeftRadius: 5,
        borderBottomRightRadius: 10,
        paddingHorizontal: 10,
        justifyContent: "center"
    },
    containerFavorite: {
        borderRadius: 15,
        height: 30,
        width: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        position: 'absolute',
        zIndex: 1,
        top: 4,
        right: 4,
    },
    containerTime: {
        //height: 11, 
        borderRadius: 29,
        marginRight: 4,
        paddingHorizontal: 6,
        justifyContent: "center",
        marginBottom: 4,
    },
    containerIcon: {
        shadowOffset: { width: 0, height: 0 },
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOpacity: 0.25,
        shadowRadius: 5,
        borderRadius: 10,
        height: 48,
        width: 48,
        margin: 4,
    },
    image: {
        width: "100%",
        height: 130,
    },
    textGender: {
        fontSize: 8,
        color: "#FFFFFF",
        textAlign: "center",
    },
    textTitle: {
        fontSize: 12,
        color: "#000000"
    },
    textTime: {
        fontSize: 12,
    },
    textBook: {
        fontSize: 12,
        color: "#FFFFFF"
    },
    textCity: {
        fontSize: 10,
        color: "#000000"
    },
    textAddress: {
        fontSize: 10,
        color: "#000000"
    },
    textDistance: {
        fontSize: 10,
        color: "#6A6A6A"
    },
    textNotFound: {
        fontSize: 18,
        color: "#000000"
    },
    textSearcResult: {
        fontFamily: "Ubuntu-Regular",
        fontSize: 12,
        color: "#6A6A6A",
        textAlign: "center",
    },
    textTry: {
        fontSize: 16,
        color: "#FFFFFF"
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
    textButton: {
        fontSize: 16,
    },
});
