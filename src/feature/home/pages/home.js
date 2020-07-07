/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from "react";
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    TextInput,
    FlatList,
    TouchableOpacity,
    Image,
    Linking,
} from "react-native";

import { connect, useDispatch, useSelector } from "react-redux";
import { setUserDetails, fetchUser } from "../actions/home";
import call from "../../../assets/image/call.png";

export default Home = ({ navigation }) => {
    const [selected, setSelected] = React.useState(new Map());
    const data = useSelector((state) => state.homeReducer.data);
    const processing_request = useSelector(
        (state) => state.homeReducer.processing_request
    );

    const dispatch = useDispatch();

    useEffect(() => {
        if (data.length == 0) {
            dispatch(fetchUser());
        }
    });

    Item = ({ id, item }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    dispatch(setUserDetails(item)),
                        navigation.navigate("Details");
                }}
                style={styles.row}>
                <View style={styles.item}>
                    <View style={styles.name}>
                        <Text style={{ color: "white" }}>{item.name[0]}</Text>
                    </View>
                </View>
                <View style={{ flex: 3 }}>
                    <Text>{item.categoryName}</Text>
                    <Text>{item.phoneNumber}</Text>
                </View>
                <TouchableOpacity
                    onPress={() => Linking.openURL(`tel:${item.phoneNumber}`)}
                    style={styles.imageWrapper}>
                    <Image source={call} style={styles.callImage} />
                </TouchableOpacity>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.styles}>
            <FlatList
                data={data}
                renderItem={({ item }) => <Item id={item.enqId} item={item} />}
                keyExtractor={(item) => item.enqId.toString()}
                extraData={selected}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: { flexDirection: "row", padding: 10 },
    item: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    name: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: "black",
        color: "white",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    },
    imageWrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    callImage: { height: 25, width: 25 },
});
