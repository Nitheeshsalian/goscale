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
} from "react-native";

import { connect, useDispatch, useSelector } from "react-redux";
import { setErros, clearError } from "../actions/home";

export default Home = ({ navigation }) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    //this is reducer selector
    const errors = useSelector((state) => state.homeReducer.errors);
    const processing_request = useSelector(
        (state) => state.homeReducer.processing_request
    );

    console.log(errors);
    //create dispatch function from redux
    const dispatch = useDispatch();

    useEffect(() => {
        // Update the document title using the browser API
        console.log("error  " + errors);
        console.log("processing_request  " + processing_request);
        if (processing_request == true) {
            //conditional actions dispatch
            dispatch(clearError("Erros cleared"));
        }
    });

    submit = () => {
        //calling defined actions from dispatch
        dispatch(setErros("New Error"));
        if (userName == "" || password == "") {
            setError(true);
        } else {
            setError(false);
            console.log(userName, password);
        }
    };

    return (
        <View
            style={{
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
            }}>
            <View style={{ width: 250 }}>
                <Text
                    style={{
                        textAlign: "center",
                        fontSize: 25,
                        fontWeight: "bold",
                    }}>
                    Vikings{errors}
                </Text>
                <TextInput
                    style={{
                        borderColor: "#333",
                        borderWidth: 1,
                        width: 250,
                        marginTop: 20,
                        borderRadius: 3,
                        paddingLeft: 10,
                    }}
                    placeholder="Username"
                    onChangeText={(value) => setUserName(value)}
                    value={userName}
                    autoCompleteType="email"
                    keyboardType="email-address"
                />
                <TextInput
                    style={{
                        borderColor: "#333",
                        borderWidth: 1,
                        width: 250,
                        marginTop: 20,
                        marginBottom: 20,
                        borderRadius: 3,
                        paddingLeft: 10,
                    }}
                    placeholder="Password"
                    onChangeText={(value) => setPassword(value)}
                    value={password}
                    secureTextEntry={true}
                />
                <Button title="Login" onPress={() => submit()} />
                {error ? (
                    <Text
                        style={{
                            textAlign: "center",
                            color: "red",
                            paddingTop: 10,
                        }}>
                        Please enter all feilds
                    </Text>
                ) : null}
            </View>
        </View>
    );
};

// const mapStateToProps = (state) => ({
//     // ... computed data from state and optionally ownProps
//     errors: state.homeReducer.errors,
// });

// const mapDispatchToProps = {
//     // ... normally is an object full of action creators
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
