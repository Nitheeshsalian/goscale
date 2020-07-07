/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from "react";
import { Provider } from "react-redux";
import configureStore from "./src/reducers/index";
import Home from "./src/feature/home/pages/home";
import MyStack from "./src/navigators/appNavigator";
import { NavigationContainer } from "@react-navigation/native";

const App: () => React$Node = () => {
    const [storeConfig, setStoreConfig] = useState(configureStore());

    return (
        <Provider store={storeConfig.store}>
            <NavigationContainer>
                <MyStack />
            </NavigationContainer>
        </Provider>
    );
};
export default App;
