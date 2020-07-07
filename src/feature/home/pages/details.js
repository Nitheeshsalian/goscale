/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from "react-native";
import { connect, useDispatch, useSelector } from "react-redux";

export default function Details() {
    const user = useSelector((state) => state.homeReducer.user);

    return (
        <View
            style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
            <Text>{user.name}</Text>
            <Text>{user.phoneNumber}</Text>
            <Text>{user.location}</Text>
            <Text>{user.categoryName}</Text>
            <Text>{user.classLocPref}</Text>
            <Text>{user.postedOn}</Text>
        </View>
    );
}
