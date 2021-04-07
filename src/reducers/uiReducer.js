import { types } from "../types/types";

const initialState = {
    loading: false,
    msgError: null
}


export const uiReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.uiSetError:
            return {
                ...initialState,
                msgError: action.payload
            };

        case types.uiRemoveError:
            return {
                ...initialState,
                msgError: null
            };

        case types.uiStartLoading:
            return {
                ...initialState,
                loading: true
            };

        case types.uiFinishLoading:
            return {
                ...initialState,
                loading: false
            };



        default:
            return state;
    }


};