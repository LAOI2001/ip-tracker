import { types } from "../types";


export const actionResizeWindow = () => ({
    type: types.resizeScreen,
    payload: window.innerWidth
});