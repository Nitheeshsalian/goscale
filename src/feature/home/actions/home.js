import * as types from "../../../types/types";

export function setErros(error) {
    return {
        type: types.RESET_ERROR,
        payload: {
            error: error,
        },
    };
}

export function clearError(error) {
    return {
        type: types.USER_LOGIN_REQUEST,
        payload: {
            error: error,
        },
    };
}

export function fetchUser(error) {
    return {
        type: types.USER_FETCH_REQUEST,
    };
}

export function setUserDetails(user) {
    return {
        type: types.SET_USER_DETAILS,
        payload: {
            user: user,
        },
    };
}
