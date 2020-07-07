import * as types from "../../../types/types";

const initialState = {
    errors: "nnlnl",
    error: "",
    processing_request: false,
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.RESET_ERROR:
            return {
                ...state,
                errors: action.payload.error,
                processing_request: true,
            };

        case types.USER_LOGIN_REQUEST:
            return {
                ...state,
                errors: action.payload.error,
                processing_request: false,
            };

        case types.USER_LOGIN_SUCCESS:
            return {
                ...state,
                error: "",
            };
        case types.USER_LOGIN_FAILURE:
            return {
                ...state,
                error: "Login failed",
            };

        default:
            return state;
    }
};
export default homeReducer;
