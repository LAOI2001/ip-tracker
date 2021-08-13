import { types } from "../types";


const initialState = {
    widthScreen: 0
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.resizeScreen:
            return {
                ...state,
                widthScreen: action.payload
            }

        default:
            return state;
    }
}