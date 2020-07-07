import * as types from "../../../types/types";
import { act } from "react-test-renderer";

const initialState = {
    errors: "nnlnl",
    error: "",
    processing_request: false,
    data: [],
    user: null,
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.RESET_ERROR:
            return {
                ...state,
                errors: action.payload.error,
                processing_request: false,
                data: [],
            };

        case types.USER_FETCH_REQUEST:
            return {
                ...state,
                processing_request: true,
            };

        case types.USER_FETCH_SUCCESS:
            return {
                ...state,
                data: action.payload.data.dataList,
                processing_request: false,
            };
        case types.USER_FETCH_FAILURE:
            return {
                ...state,
                error: action.payload,
                processing_request: false,
            };

        case types.SET_USER_DETAILS:
            return {
                ...state,
                user: action.payload.user,
            };

        default:
            return state;
    }
};
export default homeReducer;
