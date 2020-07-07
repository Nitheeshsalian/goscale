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
