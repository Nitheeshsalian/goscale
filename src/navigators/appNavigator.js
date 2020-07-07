import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../feature/home/pages/home";
import Details from "../feature/home/pages/details";
const Stack = createStackNavigator();

export default function MyStack() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            headerMode="none"
            screenOptions={{
                headerTintColor: "white",
            }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    );
}
